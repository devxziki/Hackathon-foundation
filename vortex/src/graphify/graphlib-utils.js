import { Graph } from 'graphlib';

export function graphNodes(G) {
  return Array.from(G.nodes());
}

export function graphDegree(G, nodeId) {
  const inEdges = G.inEdges(nodeId) || [];
  const outEdges = G.outEdges(nodeId) || [];
  if (!G.isDirected()) {
    return inEdges.length;
  }
  return inEdges.length + outEdges.length;
}

export function graphDegrees(G) {
  const degrees = {};
  for (const node of G.nodes()) {
    degrees[node] = graphDegree(G, node);
  }
  return degrees;
}

export function graphNeighbors(G, nodeId) {
  const preds = G.predecessors(nodeId) || [];
  const succs = G.successors(nodeId) || [];
  const all = new Set([...preds, ...succs]);
  return Array.from(all);
}

export function graphEdges(G) {
  if (G.isDirected()) {
    const edges = [];
    for (const node of G.nodes()) {
      const succs = G.successors(node);
      if (succs) {
        for (const succ of succs) {
          edges.push([node, succ]);
        }
      }
    }
    return edges;
  } else {
    const seen = new Set();
    const edges = [];
    for (const node of G.nodes()) {
      const succs = G.successors(node);
      if (succs) {
        for (const succ of succs) {
          const key = node < succ ? `${node}->${succ}` : `${succ}->${node}`;
          if (!seen.has(key)) {
            seen.add(key);
            edges.push([node, succ]);
          }
        }
      }
    }
    return edges;
  }
}

export function setDifference(a, b) {
  const result = new Set();
  for (const item of a) {
    if (!b.has(item)) {
      result.add(item);
    }
  }
  return result;
}
