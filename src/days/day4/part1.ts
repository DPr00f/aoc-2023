import * as fs from 'fs';

export const run = (inputSrc: string) => {
  const file = fs.readFileSync(inputSrc, 'utf8');
  const lines = file.split('\n');

  let totalPoints = 0;

  for (const line of lines) {
    if (!line) {
      continue;
    }

    const data = line.split(':')[1].trim().split('|');

    const winningNumbers = data[0]
      .trim()
      .split(' ')
      .filter((x) => x.trim());

    const checkNumbers = data[1]
      .trim()
      .split(' ')
      .filter((x) => x.trim());

    const validNumbers = checkNumbers.filter((x) => winningNumbers.includes(x));

    if (!validNumbers.length) {
      continue;
    }

    totalPoints += 1 << (validNumbers.length - 1);
  }

  console.info(`Total points: ${totalPoints}`);
};
