const fs = require('fs');

const file = 'next-env.d.ts';
const lines = fs
  .readFileSync(file, 'utf8')
  .split('\n')
  .filter((line) => !line.trim().startsWith('// '))
  .join('\n');

fs.writeFileSync(file, lines.trimEnd() + '\n');
