import * as fs from 'fs';

const isNumber = (char: string) => {
  return /\d+/.test(char);
};

const getGameInfo = (line: string) => {
  let gameID = 0;
  const max = { r: 0, g: 0, b: 0 };
  const current = { r: 0, g: 0, b: 0 };
  let prevStr = '';

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === ';') {
      max.r = Math.max(max.r, current.r);
      max.g = Math.max(max.g, current.g);
      max.b = Math.max(max.b, current.b);
      current.r = 0;
      current.g = 0;
      current.b = 0;

      continue;
    }

    if (!isNumber(char) && isNumber(prevStr)) {
      if (!gameID) {
        gameID = parseInt(prevStr, 10);
      }

      const colorChar = line[i + 1];

      if (['r', 'g', 'b'].includes(colorChar)) {
        current[colorChar] += parseInt(prevStr, 10);
      }

      prevStr = '';
    } else {
      if (isNumber(char)) {
        prevStr += char;
      } else {
        prevStr = '';
      }
    }
  }

  return { gameID, r: max.r, g: max.g, b: max.b };
};

export const run = (inputSrc: string) => {
  const all = fs.readFileSync(inputSrc, 'utf8');

  const lines = all.split('\n');

  let total = 0;

  for (const line of lines) {
    const data = getGameInfo(line + ';');

    const power = data.r * data.g * data.b;

    total += power;
  }

  console.info(total);
};
