import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
const compiler = ['node_modules/typescript/bin/tsc', '../personal-website-tools/node_modules/typescript/bin/tsc'].find(existsSync);
if (!compiler) { console.error('TypeScript is missing. Run npm install.'); process.exit(1); }
const result = spawnSync(process.execPath, [compiler, '-p', 'tsconfig.json', ...process.argv.slice(2)], { stdio: 'inherit' });
process.exit(result.status ?? 1);
