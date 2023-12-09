import * as fs from 'fs';

export const run = (inputSrc: string) => {
  const file = fs.readFileSync(inputSrc, 'utf8');
  const lines = file.split('\n');
};
