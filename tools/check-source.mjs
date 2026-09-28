import path from 'node:path';
import { walk, parseSource, checkContracts } from './source-contracts.mjs';
const root = path.resolve(import.meta.dirname, '../assets/src');
const files = walk(root).filter((file) => /\.(m?js|jsx)$/.test(file));
for (const file of files) {
  try {
    parseSource(file);
  } catch (error) {
    throw new Error(`${file}: ${error.message}`, { cause: error });
  }
}
const { errors, features, components } = checkContracts(root);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `${files.length} JavaScript/JSX files parse; ${components} component contracts across ${features} feature manifests and authored imports are valid.`,
  );
}
