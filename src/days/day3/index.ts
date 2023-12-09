import { addDay } from '../../config';

import { run as part1 } from './part1';
import { run as part2 } from './part2';

addDay({
  title: 'Day 3',
  value: '3',
  inputs: [
    {
      title: 'Sample',
      value: './src/days/day3/inputs/sample',
    },
    {
      title: 'Input',
      value: './src/days/day3/inputs/input',
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
