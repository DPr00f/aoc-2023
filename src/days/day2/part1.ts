import * as fs from 'fs';

const possible = {
  r: 12,
  g: 13,
  b: 14,
};

const isNumber = (char: string) => {
  return /\d+/.test(char);
};

const getGameInfo = (line: string) => {
  let gameID = 0;
  let gameStarted = false;
  let red = 0;
  let green = 0;
  let blue = 0;
  let gameRed = 0;
  let gameGreen = 0;
  let gameBlue = 0;
  let prevStr = '';

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === ';') {
      red = gameRed < red ? red : gameRed;
      green = gameGreen < green ? green : gameGreen;
      blue = gameBlue < blue ? blue : gameBlue;
      gameBlue = 0;
      gameRed = 0;
      gameGreen = 0;
      continue;
    }

    if (!isNumber(char) && isNumber(prevStr)) {
      if (!gameStarted) {
        gameID = parseInt(prevStr, 10);
        gameStarted = true;
      }

      const colorChar = line[i + 1];

      if (colorChar === 'r') {
        gameRed += parseInt(prevStr, 10);
      } else if (colorChar === 'g') {
        gameGreen += parseInt(prevStr, 10);
      } else if (colorChar === 'b') {
        gameBlue += parseInt(prevStr, 10);
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

  return { gameID, red, green, blue };
};

export const run = (inputSrc: string) => {
  const all = fs.readFileSync(inputSrc, 'utf8');

  const lines = all.split('\n');
  let total = 0;

  for (const line of lines) {
    const data = getGameInfo(line + ';');

    if (data.red > possible.r || data.green > possible.g || data.blue > possible.b) {
      continue;
    }

    total += data.gameID;
  }

  console.info(total);
};
