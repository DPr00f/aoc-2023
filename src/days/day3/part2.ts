import * as fs from 'fs';

type NumberMap = {
  [key: string]: number;
};

const isNumber = (char: string) => {
  return /\d/.test(char);
};

const extractNumbers = (lines: string[], row: number, col: number) => {
  const numbersMap: NumberMap = {};
  const lineToCheck = row - 1;
  let currentLine = lineToCheck;

  while (currentLine < row + 2) {
    const line = lines[currentLine];

    if (line) {
      const colsToCheck = [col - 1, col, col + 1];

      while (colsToCheck.length) {
        let currentCol = colsToCheck.pop();
        let foundNumber = false;

        while (currentCol >= 0) {
          const char = line[currentCol];

          if (!isNumber(char)) {
            break;
          }

          foundNumber = true;
          currentCol--;
        }

        if (foundNumber) {
          currentCol += 1;
        }

        let numStr = '';
        const initialNumberCol = currentCol;

        while (isNumber(line[currentCol])) {
          numStr += line[currentCol];
          currentCol++;
        }

        if (numStr) {
          numbersMap[`${currentLine}, ${initialNumberCol}`] = parseInt(numStr, 10);
        }
      }
    }

    currentLine++;
  }

  return numbersMap;
};

export const run = (inputSrc: string) => {
  const file = fs.readFileSync(inputSrc, 'utf8');
  const lines = file.split('\n');
  let total = 0;

  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    for (let col = 0; col < line.length; col++) {
      const char = line[col];

      if (char !== '*') {
        continue;
      }

      const gearNumbers = extractNumbers(lines, row, col);
      const gears = Object.values(gearNumbers);

      if (gears.length === 2) {
        total += gears[0] * gears[1];
      }
    }
  }

  console.info(total);
};
