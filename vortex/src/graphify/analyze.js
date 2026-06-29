import { graphEdges, graphNodes, graphDegrees, graphNeighbors } from './graphlib-utils.js';

function isFileNode(G, nodeId) {
  const data = G.node(nodeId);
  if (!data) return false;
  const label = data.label || '';
  const sourceFile = data.source_file || '';
  if (!label || !sourceFile) return false;
  const fileName = sourceFile.split('/').pop() || '';
  if (label === fileName) return true;
  if (label.startsWith('.') && label.endsWith('()')) return true;
  if (label.endsWith('()')) {
    const inEdges = G.inEdges(nodeId) || [];
    const outEdges = G.outEdges(nodeId) || [];
    return (inEdges.length + outEdges.length) <= 1;
  }
  return false;
}

function isConceptNode(G, nodeId) {
  const data = G.node(nodeId);
  if (!data) return false;
  const source = data.source_file || '';
  if (!source) return true;
  const fileName = source.split('/').pop() || '';
  if (!fileName.includes('.')) return true;
  return false;
}

export function godNodes(G, topN = 10) {
  const degrees = graphDegrees(G);
  const sorted = Object.entries(degrees)
    .map(([nodeId, deg]) => ({ nodeId, degree: deg }))
    .sort((a, b) => b.degree - a.degree);
  const result = [];
  for (const { nodeId, degree: deg } of sorted) {
    if (isFileNode(G, nodeId) || isConceptNode(G, nodeId)) continue;
    const data = G.node(nodeId);
    result.push({ id: nodeId, label: data?.label || nodeId, degree: deg });
    if (result.length >= topN) break;
  }
  return result;
}

export function analyze(G, communities) {
  const gods = godNodes(G, 10);
  const surprises = [];
  const nodeCommunity = new Map();
  for (const [cid, nodes] of Object.entries(communities)) {
    for (const node of nodes) nodeCommunity.set(node, parseInt(cid));
  }
  for (const [u, v] of graphEdges(G)) {
    const uComm = nodeCommunity.get(u);
    const vComm = nodeCommunity.get(v);
    if (uComm === undefined || vComm === undefined || uComm === vComm) continue;
    if (isFileNode(G, u) || isFileNode(G, v)) continue;
    const data = G.edge(u, v) || {};
    const relation = data.relation || '';
    if (['imports', 'imports_from', 'contains', 'method'].includes(relation)) continue;
    surprises.push({
      source: (G.node(u)?.label) || u,
      target: (G.node(v)?.label) || v,
      source_files: [(G.node(u)?.source_file) || '', (G.node(v)?.source_file) || ''],
      confidence: data.confidence || 'EXTRACTED',
      relation,
      note: `Bridges community ${uComm} → community ${vComm}`
    });
  }
  const order = { AMBIGUOUS: 0, INFERRED: 1, EXTRACTED: 2 };
  surprises.sort((a, b) => order[a.confidence] - order[b.confidence]);
  return {
    god_nodes: gods.slice(0, 5),
    surprising_connections: surprises.slice(0, 5),
    communities,
    cohesion: {}
  };
}
