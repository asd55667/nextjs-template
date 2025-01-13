import { execSync } from 'child_process'
// install-husky.js
const isStackBlitz = process.env.STACKBLITZ === 'true';

if (!isStackBlitz) {
  execSync('husky', { stdio: 'inherit' });
}
