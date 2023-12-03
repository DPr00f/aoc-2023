import * as fs from 'fs';

const isNumber = (char: string) => {
  return /\d/.test(char);
};

const firstNumber = (line: string) => {
  let idx = -1;

  for (let i = 0; i < line.length; i++) {
    if (isNumber(line[i])) {
      idx = i;
      break;
    }
  }

  return line[idx];
};

const lastNumber = (line: string) => {
  let idx = -1;

  for (let i = line.length - 1; i >= 0; i--) {
    if (isNumber(line[i])) {
      idx = i;
      break;
    }
  }

  return line[idx];
};

export const run = (inputSrc: string) => {
  let total = 0;
  const input = fs.readFileSync(inputSrc, 'utf8');

  const lines = input.split('\n');

  for (const line of lines) {
    if (!line) {
      continue;
    }

    const lineNumber = `${firstNumber(line)}${lastNumber(line)}`;

    total += parseInt(lineNumber, 10);
  }

  console.info(total);
};
