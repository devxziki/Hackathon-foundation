import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import { Graph } from 'graphlib';
import { graphNodes, graphEdges } from './graphlib-utils.js';

export function toJSON(G, communities, outputPath) {
  const dir = dirname(outputPath);
  if (dir && !existsSync(dir)) mkdirSync(dir, { recursive: true });

  const nodeCommunity = new Map();
  for (const [cid, nodes] of Object.entries(communities)) {
    for (const node of nodes) nodeCommunity.set(node, parseInt(cid));
  }

  const nodes = graphNodes(G).map(nodeId => {
    const data = G.node(nodeId) || {};
    return {
      id: nodeId,
      label: data.label || nodeId,
      file_type: data.file_type || 'concept',
      source_file: data.source_file || '',
      source_location: data.source_location || null,
      community: nodeCommunity.get(nodeId),
      norm_label: (data.label || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    };
  });

  const edges = graphEdges(G).map(([u, v]) => {
    const data = G.edge(u, v) || {};
    const confidence = data.confidence || 'EXTRACTED';
    const confidenceScores = { EXTRACTED: 1.0, INFERRED: 0.5, AMBIGUOUS: 0.2 };
    const trueSrc = data._src || u;
    const trueTgt = data._tgt || v;
    return {
      source: trueSrc,
      target: trueTgt,
      relation: data.relation || 'related_to',
      confidence,
      source_file: data.source_file || '',
      source_location: data.source_location || undefined,
      weight: data.weight || 1.0,
      confidence_score: data.confidence_score || confidenceScores[confidence] || 1.0
    };
  });

  const output = { nodes, edges, directed: G.isDirected() };
  writeFileSync(outputPath, JSON.stringify(output, null, 2));
}
