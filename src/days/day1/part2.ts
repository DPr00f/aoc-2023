import * as fs from 'fs';

const numberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};

const getNumber = (str: string) => {
  const number = Object.keys(numberMap).find((key) => str.startsWith(key));

  return numberMap[number || ''] || 0;
};

const firstNumber = (line: string) => {
  for (let i = 0; i < line.length; i++) {
    const num = getNumber(line.substring(i, i + 5));

    if (num) {
      return num;
    }
  }

  return -1;
};

const lastNumber = (line: string) => {
  for (let i = line.length - 1; i >= 0; i--) {
    const num = getNumber(line.substring(i, i + 5));

    if (num) {
      return num;
    }
  }

  return -1;
};

export const run = (inputSrc: string) => {
  const input = fs.readFileSync(inputSrc, 'utf8');

  const lines = input.split('\n');
  const total = lines.reduce((acc, line) => {
    if (!line) {
      return acc;
    }

    acc += parseInt(`${firstNumber(line)}${lastNumber(line)}`, 10);

    return acc;
  }, 0);

  console.info(total);
};
