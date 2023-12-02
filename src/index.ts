import * as fs from 'fs';

console.info('Yeay!', fs.readFileSync('./package.json', 'utf8'));
