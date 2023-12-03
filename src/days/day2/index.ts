import { addDay } from '../../config';

import { run as part1 } from './part1';
import { run as part2 } from './part2';

addDay({
  title: 'Day 2',
  value: '2',
  inputs: [
    {
      title: 'Sample',
      value: './src/days/day2/inputs/sample',
    },
    {
      title: 'Input',
      value: './src/days/day2/inputs/input',
    },
  ],
  parts: [
    {
      title: 'Part 1',
      value: '1',
      entryPoint: part1,
    },
    {
      title: 'Part 2',
      value: '2',
      entryPoint: part2,
    },
  ],
});
