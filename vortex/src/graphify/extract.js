import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, extname, sep } from 'path';

function makeId(...parts) {
  let combined = parts
    .map(p => p.trim().replace(/^[._]+|[._]+$/g, ''))
    .filter(p => p.length > 0)
    .join('_');
  combined = combined.normalize('NFKC');
  combined = combined.replace(/[^\w]+/g, '_');
  combined = combined.replace(/_+/g, '_');
  return combined.replace(/^_+|_+$/g, '').toLowerCase();
}

function fileStem(path) {
  const parts = path.replace(/\\/g, '/').split('/');
  const filename = parts[parts.length - 1] || '';
  const lastDot = filename.lastIndexOf('.');
  const stem = lastDot > 0 ? filename.slice(0, lastDot) : filename;
  if (parts.length >= 2) {
    const parent = parts[parts.length - 2];
    if (parent && parent !== '.' && parent !== '') {
      return `${parent}.${stem}`;
    }
  }
  return stem;
}

function createFileNode(path, fileType = 'code') {
  const stem = fileStem(path);
  return {
    id: makeId(path),
    label: path.split('/').pop() || stem,
    file_type: fileType,
    source_file: path
  };
}

function createClassNode(className, filePath, line) {
  const stem = fileStem(filePath);
  return {
    id: makeId(stem, className),
    label: className,
    file_type: 'code',
    source_file: filePath,
    source_location: `L${line}`
  };
}

function createFunctionNode(funcName, filePath, line) {
  const stem = fileStem(filePath);
  return {
    id: makeId(stem, funcName),
    label: `${funcName}()`,
    file_type: 'code',
    source_file: filePath,
    source_location: `L${line}`
  };
}

function createImportEdge(sourceId, targetId, filePath, line, type = 'imports') {
  return {
    source: sourceId,
    target: targetId,
    relation: type,
    confidence: 'EXTRACTED',
    source_file: filePath,
    source_location: `L${line}`,
    weight: 1.0
  };
}

function createContainsEdge(sourceId, targetId, filePath, line) {
  return {
    source: sourceId,
    target: targetId,
    relation: 'contains',
    confidence: 'EXTRACTED',
    source_file: filePath,
    source_location: `L${line}`,
    weight: 1.0
  };
}

function extractJSLike(content, filePath) {
  const nodes = [];
  const edges = [];
  const fileNode = createFileNode(filePath, 'code');
  nodes.push(fileNode);
  const fileId = fileNode.id;
  const seenClasses = new Set();
  const seenFunctions = new Set();

  let classRegex = /(?:export\s+)?class\s+(\w+)/g;
  let match;
  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    if (!seenClasses.has(className)) {
      seenClasses.add(className);
      const lineNum = content.slice(0, match.index).split('\n').length;
      nodes.push(createClassNode(className, filePath, lineNum));
      edges.push(createContainsEdge(fileId, nodes[nodes.length - 1].id, filePath, lineNum));
    }
  }

  let funcRegex = /(?:export\s+)?(?:async\s+)?function\s+(\w+)/g;
  while ((match = funcRegex.exec(content)) !== null) {
    const funcName = match[1];
    if (!seenFunctions.has(funcName)) {
      seenFunctions.add(funcName);
      const lineNum = content.slice(0, match.index).split('\n').length;
      const funcNode = createFunctionNode(funcName, filePath, lineNum);
      nodes.push(funcNode);
      edges.push(createContainsEdge(fileId, funcNode.id, filePath, lineNum));
    }
  }

  let arrowRegex = /(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[^=])\s*=>/g;
  while ((match = arrowRegex.exec(content)) !== null) {
    const funcName = match[1];
    if (!seenFunctions.has(funcName)) {
      seenFunctions.add(funcName);
      const lineNum = content.slice(0, match.index).split('\n').length;
      const funcNode = createFunctionNode(funcName, filePath, lineNum);
      nodes.push(funcNode);
      edges.push(createContainsEdge(fileId, funcNode.id, filePath, lineNum));
    }
  }

  let importRegex = /import\s+(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  while ((match = importRegex.exec(content)) !== null) {
    const modulePath = match[1];
    const lineNum = content.slice(0, match.index).split('\n').length;
    const importId = makeId(modulePath);
    edges.push(createImportEdge(fileId, importId, filePath, lineNum, 'imports_from'));
  }

  for (const funcNode of nodes.filter(n => n.label.endsWith('()'))) {
    const funcName = funcNode.label.slice(0, -2);
    const callRegex = new RegExp(`\\b${funcName}\\s*\\(`, 'g');
    while ((match = callRegex.exec(content)) !== null) {
      const lineNum = content.slice(0, match.index).split('\n').length;
      if (funcNode.source_location) {
        const defLine = parseInt(funcNode.source_location.slice(1));
        if (Math.abs(lineNum - defLine) > 1) {
          edges.push({
            source: fileId,
            target: funcNode.id,
            relation: 'calls',
            confidence: 'EXTRACTED',
            source_file: filePath,
            source_location: `L${lineNum}`,
            weight: 1.0
          });
        }
      }
    }
  }

  return { nodes, edges };
}

function extractPython(content, filePath) {
  const nodes = [];
  const edges = [];
  const fileNode = createFileNode(filePath, 'code');
  nodes.push(fileNode);
  const fileId = fileNode.id;
  const seenClasses = new Set();
  const seenFunctions = new Set();

  let classRegex = /class\s+(\w+)(?:\([^)]*\))?:/g;
  let match;
  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    if (!seenClasses.has(className)) {
      seenClasses.add(className);
      const lineNum = content.slice(0, match.index).split('\n').length;
      const classNode = createClassNode(className, filePath, lineNum);
      nodes.push(classNode);
      edges.push(createContainsEdge(fileId, classNode.id, filePath, lineNum));
    }
  }

  let funcRegex = /def\s+(\w+)\s*\(/g;
  while ((match = funcRegex.exec(content)) !== null) {
    const funcName = match[1];
    if (!seenFunctions.has(funcName)) {
      seenFunctions.add(funcName);
      const lineNum = content.slice(0, match.index).split('\n').length;
      const funcNode = createFunctionNode(funcName, filePath, lineNum);
      nodes.push(funcNode);
      edges.push(createContainsEdge(fileId, funcNode.id, filePath, lineNum));
    }
  }

  let importRegex = /(?:^|\n)\s*(?:import\s+([^\n]+)|from\s+([^\s]+)\s+import)/g;
  while ((match = importRegex.exec(content)) !== null) {
    const modulePath = match[1] || match[2];
    if (!modulePath) continue;
    const lineNum = content.slice(0, match.index).split('\n').length;
    const importId = makeId(modulePath.trim());
    edges.push(createImportEdge(fileId, importId, filePath, lineNum, 'imports'));
  }

  return { nodes, edges };
}

function extractFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!existsSync(filePath)) {
    return { nodes: [], edges: [], error: `File not found: ${filePath}` };
  }
  try {
    const content = readFileSync(filePath, 'utf-8');
    if (['.js', '.jsx', '.ts', '.tsx', '.mjs'].includes(ext)) {
      return extractJSLike(content, filePath);
    } else if (ext === '.py') {
      return extractPython(content, filePath);
    }
    return { nodes: [createFileNode(filePath, 'code')], edges: [] };
  } catch (error) {
    return { nodes: [], edges: [], error: `Error reading ${filePath}: ${error}` };
  }
}

export function extract(rootPath, { includeExtensions } = {}) {
  const exts = includeExtensions || ['.js', '.ts', '.jsx', '.tsx', '.py', '.java'];
  const allNodes = [];
  const allEdges = [];
  const SKIP_DIRS = ['node_modules', '.git', 'dist', 'build', '__pycache__', 'venv', '.vortex', 'graphify-out'];
  function walkDir(dir) {
    let entries;
    try { entries = readdirSync(dir); } catch { return; }
    for (const entry of entries) {
      const fullPath = resolve(dir, entry);
      try {
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
          if (SKIP_DIRS.includes(entry)) continue;
          walkDir(fullPath);
        } else if (stat.isFile()) {
          const ext = extname(entry).toLowerCase();
          if (exts.includes(ext)) {
            const result = extractFile(fullPath);
            allNodes.push(...result.nodes);
            allEdges.push(...result.edges);
          }
        }
      } catch {}
    }
  }
  walkDir(resolve(rootPath));
  return { nodes: allNodes, edges: allEdges };
}
