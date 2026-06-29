import { Graph } from 'graphlib';
import { graphNodes, graphEdges } from './graphlib-utils.js';

const FILE_TYPE_SYNONYMS = {
  'markdown': 'document', 'text': 'document',
  'tool': 'code', 'library': 'code',
  'pattern': 'concept', 'principle': 'concept',
  'constraint': 'concept', 'tech': 'concept',
  'framework': 'concept'
};

function normalizeId(s) {
  let normalized = s.normalize('NFKC');
  normalized = normalized.replace(/[^\w]+/g, '_');
  normalized = normalized.replace(/_+/g, '_');
  return normalized.replace(/^_+|_+$/g, '').toLowerCase();
}

function deduplicateByLabel(nodes, edges) {
  const canonical = new Map();
  const remap = new Map();
  for (const node of nodes) {
    const key = (node.label || node.id).toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
    if (!key) continue;
    const existing = canonical.get(key);
    if (!existing) {
      canonical.set(key, node);
    } else {
      const hasSuffix = /_c\d+$/.test(node.id);
      const existingHasSuffix = /_c\d+$/.test(existing.id);
      if (hasSuffix && !existingHasSuffix) {
        remap.set(node.id, existing.id);
      } else if (existingHasSuffix && !hasSuffix) {
        remap.set(existing.id, node.id);
        canonical.set(key, node);
      } else if (node.id.length < existing.id.length) {
        remap.set(existing.id, node.id);
        canonical.set(key, node);
      } else {
        remap.set(node.id, existing.id);
      }
    }
  }
  if (remap.size === 0) return { nodes, edges };
  const dedupedNodes = Array.from(canonical.values());
  const dedupedEdges = [];
  for (const edge of edges) {
    const newEdge = { ...edge };
    newEdge.source = remap.get(edge.source) || edge.source;
    newEdge.target = remap.get(edge.target) || edge.target;
    if (newEdge.source !== newEdge.target) {
      dedupedEdges.push(newEdge);
    }
  }
  return { nodes: dedupedNodes, edges: dedupedEdges };
}

export function build(extractions, { directed = false, dedup = true } = {}) {
  const combined = { nodes: [], edges: [] };
  for (const ext of extractions) {
    combined.nodes.push(...ext.nodes);
    combined.edges.push(...ext.edges);
  }
  if (dedup && combined.nodes.length > 0) {
    const result = deduplicateByLabel(combined.nodes, combined.edges);
    combined.nodes = result.nodes;
    combined.edges = result.edges;
  }
  const G = new Graph({ directed: false });
  const nodeSet = new Set();
  for (const node of combined.nodes) {
    const nodeObj = node;
    let fileType = nodeObj.file_type;
    if (!fileType || fileType === 'null') fileType = 'concept';
    if (!['code', 'document', 'paper', 'image', 'rationale', 'concept'].includes(fileType)) {
      fileType = FILE_TYPE_SYNONYMS[fileType] || 'concept';
    }
    const sourceFile = nodeObj.source_file ? nodeObj.source_file.replace(/\\/g, '/') : null;
    const id = nodeObj.id;
    nodeSet.add(id);
    const nodeData = { ...nodeObj, file_type: fileType };
    if (sourceFile) nodeData.source_file = sourceFile;
    G.setNode(id, nodeData);
  }
  const normToId = new Map();
  for (const nid of nodeSet) normToId.set(normalizeId(nid), nid);
  for (const edge of combined.edges) {
    const edgeObj = edge;
    let source = edgeObj.source;
    let target = edgeObj.target;
    if (!source || !target) continue;
    if (!nodeSet.has(source)) {
      const norm = normalizeId(source);
      source = normToId.get(norm) || source;
    }
    if (!nodeSet.has(target)) {
      const norm = normalizeId(target);
      target = normToId.get(norm) || target;
    }
    if (!nodeSet.has(source) || !nodeSet.has(target)) continue;
    const attrs = {};
    for (const [key, value] of Object.entries(edgeObj)) {
      if (key !== 'source' && key !== 'target') attrs[key] = value;
    }
    if (attrs.source_file) attrs.source_file = attrs.source_file.replace(/\\/g, '/');
    attrs._src = source;
    attrs._tgt = target;
    G.setEdge(source, target, attrs);
  }
  return G;
}
