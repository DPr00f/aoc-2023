import * as prompts from 'prompts';

import './days';
import { execPart, getDay, getDays } from './config';

(async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'day',
      message: 'Pick AOC day',
      choices: getDays().map((day) => ({ title: day.title, value: day.value })),
    },
  ]);

  const day = getDay(response.day);

  const partResponse = await prompts([
    {
      type: 'select',
      name: 'part',
      message: 'Pick AOC part',
      choices: day.parts.map((part) => ({ title: part.title, value: part.value })),
    },
  ]);

  let inputValue = '';

  if (day.inputs?.length) {
    const inputResponse = await prompts([
      {
        type: 'select',
        name: 'input',
        message: 'Pick AOC input',
        choices: day?.inputs.map((input) => ({ title: input.title, value: input.value })),
      },
    ]);

    inputValue = inputResponse.input;
  }

  execPart(response.day, partResponse.part, inputValue);
})();
