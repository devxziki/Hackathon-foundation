import kleur from 'kleur';
import { resolve, sep } from 'path';
import { mkdirSync, existsSync } from 'fs';
import { detect } from './detect.js';
import { extract } from './extract.js';
import { build } from './build.js';
import { cluster } from './cluster.js';
import { analyze } from './analyze.js';
import { toJSON } from './export-json.js';
import { toHTML } from './export-html.js';

export async function runGraphify(targetDir = '.') {
  const root = resolve(targetDir);
  const outDir = root + sep + 'graphify-out';

  console.log(`\n  ${kleur.cyan('Scanning')} ${root}...`);

  const files = detect(root);
  if (files.length === 0) {
    console.log(`  ${kleur.yellow('No code files found to analyze.')}\n`);
    return;
  }
  console.log(`  ${kleur.green('→')} Found ${files.length} code file(s). Extracting...`);

  const extraction = extract(root);
  console.log(`  ${kleur.green('→')} Extracted ${extraction.nodes.length} nodes, ${extraction.edges.length} edges.`);

  console.log(`  ${kleur.green('→')} Building graph...`);
  const G = build([extraction], { directed: false });

  console.log(`  ${kleur.green('→')} Detecting communities...`);
  const communities = cluster(G);

  console.log(`  ${kleur.green('→')} Analyzing...`);
  const analysis = analyze(G, communities);

  console.log(`  ${kleur.green('→')} Exporting...`);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const jsonPath = outDir + sep + 'graph.json';
  toJSON(G, communities, jsonPath);

  const htmlPath = outDir + sep + 'graph.html';
  toHTML(G, communities, htmlPath);

  console.log(`\n  ${kleur.green('✓')} Graph generated in ${kleur.cyan(outDir)}`);
  console.log(`    ${kleur.cyan(htmlPath)}`);
  console.log(`    ${kleur.cyan(jsonPath)}`);
  console.log(`\n  ${kleur.bold('Summary:')}`);
  console.log(`    ${extraction.nodes.length} nodes · ${extraction.edges.length} edges · ${Object.keys(communities).length} communities`);
  if (analysis.god_nodes.length > 0) {
    console.log(`    God nodes: ${analysis.god_nodes.map(n => n.label).join(', ')}`);
  }
  console.log();
}
