import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import { graphNodes, graphEdges, graphDegrees } from './graphlib-utils.js';

const COMMUNITY_COLORS = [
  '#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F',
  '#EDC948', '#B07AA1', '#FF9DA7', '#9C755F', '#BAB0AC'
];

export function toHTML(G, communities, outputPath) {
  const allNodes = graphNodes(G);
  const allEdges = graphEdges(G);

  const dir = dirname(outputPath);
  if (dir && !existsSync(dir)) mkdirSync(dir, { recursive: true });

  const nodeCommunity = new Map();
  for (const [cid, nodes] of Object.entries(communities)) {
    for (const node of nodes) nodeCommunity.set(node, parseInt(cid));
  }

  const degree = graphDegrees(G);
  const maxDegree = Math.max(...Object.values(degree), 1);

  const visNodes = allNodes.map(nodeId => {
    const data = G.node(nodeId) || {};
    const cid = nodeCommunity.get(nodeId) || 0;
    const color = COMMUNITY_COLORS[cid % COMMUNITY_COLORS.length];
    const deg = degree[nodeId] || 1;
    const size = 10 + 30 * (deg / maxDegree);
    return {
      id: nodeId, label: data.label || nodeId,
      color: { background: color, border: color, highlight: { background: '#ffffff', border: color } },
      size: Math.round(size * 10) / 10,
      font: { size: deg >= maxDegree * 0.15 ? 12 : 0, color: '#ffffff' },
      title: data.label || nodeId, community: cid,
      source_file: data.source_file || '', file_type: data.file_type || 'unknown', degree: deg
    };
  });

  const visEdges = allEdges.map(([u, v], i) => {
    const data = G.edge(u, v) || {};
    const confidence = data.confidence || 'EXTRACTED';
    const trueSrc = data._src || u;
    const trueTgt = data._tgt || v;
    return {
      id: i, from: trueSrc, to: trueTgt, label: '',
      title: `${data.relation || ''} [${confidence}]`,
      dashes: confidence !== 'EXTRACTED',
      width: confidence === 'EXTRACTED' ? 2 : 1,
      color: { opacity: confidence === 'EXTRACTED' ? 0.7 : 0.35 },
      arrows: { to: { enabled: true, scaleFactor: 0.5 } }
    };
  });

  const legendData = Object.keys(communities).map(cid => ({
    cid: parseInt(cid),
    color: COMMUNITY_COLORS[parseInt(cid) % COMMUNITY_COLORS.length],
    label: `Community ${cid}`,
    count: communities[cid].length
  })).sort((a, b) => a.cid - b.cid);

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>graphify</title>
<script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0f0f1a;color:#e0e0e0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:flex;height:100vh;overflow:hidden}
#graph{flex:1}
#sidebar{width:280px;background:#1a1a2e;border-left:1px solid #2a2a4e;display:flex;flex-direction:column;overflow:hidden}
#search-wrap{padding:12px;border-bottom:1px solid #2a2a4e}
#search{width:100%;background:#0f0f1a;border:1px solid #3a3a5e;color:#e0e0e0;padding:7px 10px;border-radius:6px;font-size:13px;outline:none}
#search:focus{border-color:#4E79A7}
#search-results{max-height:140px;overflow-y:auto;padding:4px 12px;border-bottom:1px solid #2a2a4e;display:none}
.search-item{padding:4px 6px;cursor:pointer;border-radius:4px;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.search-item:hover{background:#2a2a4e}
#info-panel{padding:14px;border-bottom:1px solid #2a2a4e;min-height:140px}
#info-panel h3{font-size:13px;color:#aaa;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em}
#info-content{font-size:13px;color:#ccc;line-height:1.6}
#info-content .field{margin-bottom:5px}
#info-content .field b{color:#e0e0e0}
#info-content .empty{color:#555;font-style:italic}
.neighbor-link{display:block;padding:2px 6px;margin:2px 0;border-radius:3px;cursor:pointer;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-left:3px solid #333}
.neighbor-link:hover{background:#2a2a4e}
#neighbors-list{max-height:160px;overflow-y:auto;margin-top:4px}
#legend-wrap{flex:1;overflow-y:auto;padding:12px}
#legend-wrap h3{font-size:13px;color:#aaa;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em}
.legend-item{display:flex;align-items:center;gap:8px;padding:4px 0;cursor:pointer;border-radius:4px;font-size:12px}
.legend-item:hover{background:#2a2a4e;padding-left:4px}
.legend-item.dimmed{opacity:.35}
.legend-dot{width:12px;height:12px;border-radius:50%;flex-shrink:0}
.legend-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.legend-count{color:#666;font-size:11px}
#stats{padding:10px 14px;border-top:1px solid #2a2a4e;font-size:11px;color:#555}
</style></head>
<body>
<div id="graph"></div>
<div id="sidebar">
<div id="search-wrap"><input id="search" type="text" placeholder="Search nodes..." autocomplete="off"><div id="search-results"></div></div>
<div id="info-panel"><h3>Node Info</h3><div id="info-content"><span class="empty">Click a node to inspect it</span></div></div>
<div id="legend-wrap"><h3>Communities</h3><div id="legend"></div></div>
<div id="stats">${allNodes.length} nodes · ${allEdges.length} edges · ${Object.keys(communities).length} communities</div>
</div>
<script>
const NODES=${JSON.stringify(visNodes)},EDGES=${JSON.stringify(visEdges)},LEGEND=${JSON.stringify(legendData)};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
const nds=new vis.DataSet(NODES.map(n=>({id:n.id,label:n.label,color:n.color,size:n.size,font:n.font,title:n.title,_community:n.community,_source_file:n.source_file,_file_type:n.file_type,_degree:n.degree})));
const eds=new vis.DataSet(EDGES.map((e,i)=>({id:i,from:e.from,to:e.to,label:'',title:e.title,dashes:e.dashes,width:e.width,color:e.color,arrows:e.arrows})));
const container=document.getElementById('graph');
const net=new vis.Network(container,{nodes:nds,edges:eds},{physics:{enabled:true,solver:'forceAtlas2Based',forceAtlas2Based:{gravitationalConstant:-60,centralGravity:.005,springLength:120,springConstant:.08,damping:.4,avoidOverlap:.8},stabilization:{iterations:200,fit:true}},interaction:{hover:true,tooltipDelay:100,hideEdgesOnDrag:true,navigationButtons:false,keyboard:false},nodes:{shape:'dot',borderWidth:1.5},edges:{smooth:{type:'continuous',roundness:.2},selectionWidth:3}});
net.once('stabilizationIterationsDone',()=>{net.setOptions({physics:{enabled:false}})});
function showInfo(id){const n=nds.get(id);if(!n)return;const nids=net.getConnectedNodes(id);const ni=nids.map(nid=>{const nb=nds.get(nid);return '<span class="neighbor-link" style="border-left-color:'+esc(nb?nb.color.background:'#555')+'" onclick="focusNode('+JSON.stringify(nid)+')">'+esc(nb?nb.label:nid)+'</span>'}).join('');
document.getElementById('info-content').innerHTML='<div class="field"><b>'+esc(n.label)+'</b></div><div class="field">Type: '+esc(n._file_type||'unknown')+'</div><div class="field">Source: '+esc(n._source_file||'-')+'</div><div class="field">Degree: '+n._degree+'</div>'+(nids.length?'<div class="field" style="margin-top:8px;color:#aaa;font-size:11px">Neighbors ('+nids.length+')</div><div id="neighbors-list">'+ni+'</div>':'')}
function focusNode(id){net.focus(id,{scale:1.4,animation:true});net.selectNodes([id]);showInfo(id)}
let hov=null;net.on('hoverNode',p=>{hov=p.node;container.style.cursor='pointer'});
net.on('blurNode',()=>{hov=null;container.style.cursor='default'});
container.addEventListener('click',()=>{if(hov!==null){showInfo(hov);net.selectNodes([hov])}});
net.on('click',p=>{if(p.nodes.length>0)showInfo(p.nodes[0]);else if(hov===null)document.getElementById('info-content').innerHTML='<span class="empty">Click a node to inspect it</span>'});
const si=document.getElementById('search'),sr=document.getElementById('search-results');
si.addEventListener('input',()=>{const q=si.value.toLowerCase().trim();sr.innerHTML='';if(!q){sr.style.display='none';return}
const m=NODES.filter(n=>n.label.toLowerCase().includes(q)).slice(0,20);if(!m.length){sr.style.display='none';return}
sr.style.display='block';m.forEach(n=>{const e=document.createElement('div');e.className='search-item';e.textContent=n.label;e.style.borderLeft='3px solid '+n.color.background;e.style.paddingLeft='8px';e.onclick=()=>{net.focus(n.id,{scale:1.5,animation:true});net.selectNodes([n.id]);showInfo(n.id);sr.style.display='none';si.value=''};sr.appendChild(e)})});
const hc=new Set(),le=document.getElementById('legend');
LEGEND.forEach(c=>{const i=document.createElement('div');i.className='legend-item';const cb=document.createElement('input');cb.type='checkbox';cb.className='legend-cb';cb.checked=true;
cb.addEventListener('change',e=>{if(cb.checked){hc.delete(c.cid);i.classList.remove('dimmed')}else{hc.add(c.cid);i.classList.add('dimmed')}
nds.update(NODES.filter(n=>n.community===c.cid).map(n=>({id:n.id,hidden:!cb.checked})))});
i.innerHTML='<div class="legend-dot" style="background:'+c.color+'"></div><span class="legend-label">'+esc(c.label)+'</span><span class="legend-count">'+c.count+'</span>';
i.prepend(cb);i.onclick=e=>{if(e.target===cb)return;cb.checked=!cb.checked;cb.dispatchEvent(new Event('change'))};le.appendChild(i)});
</script></body></html>`;

  writeFileSync(outputPath, html);
}
