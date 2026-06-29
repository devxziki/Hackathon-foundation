import { runGraphify } from '../graphify/index.js';
import { printError } from '../utils/printer.js';

export async function graphify() {
  const args = process.argv.slice(3);
  const targetDir = args[0] || '.';

  try {
    await runGraphify(targetDir);
  } catch (err) {
    printError(`Graphify failed: ${err.message}`);
  }
}
