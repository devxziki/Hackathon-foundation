import { Graph } from 'graphlib';
import { graphEdges, graphNodes, graphNeighbors } from './graphlib-utils.js';

function louvainCommunities(G, seed = 42) {
  const nodes = graphNodes(G);
  const n = nodes.length;
  if (n === 0) return new Map();
  if (n === 1) return new Map([[nodes[0], 0]]);

  const community = new Map();
  nodes.forEach((node, i) => community.set(node, i));
  const edgeWeights = new Map();
  const nodeDegrees = new Map();
  for (const [u, v] of graphEdges(G)) {
    const weight = (G.edge(u, v)?.weight) || 1;
    edgeWeights.set(`${u}->${v}`, weight);
    edgeWeights.set(`${v}->${u}`, weight);
    nodeDegrees.set(u, (nodeDegrees.get(u) || 0) + weight);
    nodeDegrees.set(v, (nodeDegrees.get(v) || 0) + weight);
  }

  const maxIterations = 10;
  let changed = true;
  let iteration = 0;
  const shuffled = [...nodes];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((seed + i * 17) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  while (changed && iteration < maxIterations) {
    changed = false;
    iteration++;
    for (const node of shuffled) {
      const neighbors = graphNeighbors(G, node);
      if (!neighbors || neighbors.length === 0) continue;
      const communityCounts = new Map();
      for (const neighbor of neighbors) {
        const neighborComm = community.get(neighbor);
        if (neighborComm === undefined) continue;
        const weight = edgeWeights.get(`${neighbor}->${node}`) || 1;
        communityCounts.set(neighborComm, (communityCounts.get(neighborComm) || 0) + weight);
      }
      let bestComm = community.get(node);
      let bestWeight = 0;
      for (const [comm, weight] of communityCounts) {
        if (weight > bestWeight) { bestWeight = weight; bestComm = comm; }
      }
      if (bestComm !== undefined && bestComm !== community.get(node)) {
        community.set(node, bestComm);
        changed = true;
      }
    }
  }

  const commIds = new Set(community.values());
  const commMap = new Map();
  let nextId = 0;
  for (const oldId of commIds) commMap.set(oldId, nextId++);
  for (const [node, oldId] of community) community.set(node, commMap.get(oldId) || 0);
  return community;
}

export function cluster(G) {
  const nodes = graphNodes(G);
  const n = nodes.length;
  if (n === 0) return {};

  const isolates = nodes.filter(node => graphNeighbors(G, node).length === 0);
  const connectedNodes = nodes.filter(node => graphNeighbors(G, node).length > 0);
  const communities = {};

  if (connectedNodes.length > 0) {
    const connectedG = new Graph({ multigraph: true, directed: false });
    for (const node of connectedNodes) {
      const data = G.node(node);
      if (data) connectedG.setNode(node, data);
    }
    const nodeSet = new Set(connectedNodes);
    for (const [u, v] of graphEdges(G)) {
      if (nodeSet.has(u) && nodeSet.has(v)) connectedG.setEdge(u, v, G.edge(u, v));
    }
    const partition = louvainCommunities(connectedG);
    for (const [node, cid] of partition) {
      if (!communities[cid]) communities[cid] = [];
      communities[cid].push(node);
    }
  }

  let nextCid = Object.keys(communities).length;
  for (const node of isolates) { communities[nextCid] = [node]; nextCid++; }

  const MAX_COMMUNITY_FRACTION = 0.25;
  const MIN_SPLIT_SIZE = 10;
  const maxSize = Math.max(MIN_SPLIT_SIZE, Math.floor(n * MAX_COMMUNITY_FRACTION));
  const finalCommunities = {};
  let finalCid = 0;

  for (const nodesList of Object.values(communities)) {
    if (nodesList.length > maxSize) {
      const subG = new Graph({ multigraph: true, directed: false });
      for (const node of nodesList) {
        const data = G.node(node);
        if (data) subG.setNode(node, data);
      }
      const nodeSet = new Set(nodesList);
      for (const [u, v] of graphEdges(G)) {
        if (nodeSet.has(u) && nodeSet.has(v)) subG.setEdge(u, v, G.edge(u, v));
      }
      const subCommunities = louvainCommunities(subG);
      const groups = new Map();
      for (const node of nodesList) {
        const comm = subCommunities.get(node) || 0;
        if (!groups.has(comm)) groups.set(comm, []);
        groups.get(comm).push(node);
      }
      for (const split of groups.values()) {
        finalCommunities[finalCid] = split.sort();
        finalCid++;
      }
    } else {
      finalCommunities[finalCid] = nodesList.sort();
      finalCid++;
    }
  }

  const sorted = Object.values(finalCommunities).sort((a, b) => b.length - a.length);
  const result = {};
  sorted.forEach((list, i) => { result[i] = list; });
  return result;
}
