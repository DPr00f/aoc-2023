import * as fs from 'fs';

let linesById;

type LineData = {
  id: number;
  toCheck: number[];
  total: number;
};

const alreadyChecked: {
  [key: string]: LineData;
} = {};

const checkLine = (line: string) => {
  if (alreadyChecked[line]) {
    return alreadyChecked[line];
  }

  const cardId = /(\d+)/.exec(line)[0];

  const data = line.split(':')[1].trim().split('|');

  const winningNumbers = data[0]
    .trim()
    .split(' ')
    .filter((x) => x.trim());

  const checkNumbers = data[1]
    .trim()
    .split(' ')
    .filter((x) => x.trim());

  const id = parseInt(cardId, 10);

  const toCheck = checkNumbers.filter((x) => winningNumbers.includes(x)).map((_, i) => id + i + 1);

  const lineData = {
    id: parseInt(cardId, 10),
    toCheck,
    total: toCheck.reduce((acc, cardId) => {
      return acc + checkLine(linesById[cardId]).total;
    }, 1),
  };

  console.info(`Line ${lineData.id} has ${lineData.total} checks`);

  alreadyChecked[line] = lineData;

  return alreadyChecked[line];
};

export const run = (inputSrc: string) => {
  const file = fs.readFileSync(inputSrc, 'utf8');
  const lines = file.split('\n');

  linesById = lines.reduce((acc, line) => {
    const cardId = (/(\d+)/.exec(line) || '0')[0];

    return { ...acc, [cardId]: line };
  }, {});

  let totalCards = 0;
  const cardsToCheck = lines;

  while (cardsToCheck.length) {
    const line = cardsToCheck.shift();

    if (!line) {
      continue;
    }

    const data = checkLine(line);

    totalCards += data.total;
  }

  console.info(`Total cards checked: ${totalCards}`);
};
