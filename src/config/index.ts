export type Part = {
  title: string;
  value: string;
  entryPoint: (inputValue?: string) => void;
};

export type Input = {
  title: string;
  value: string;
};

export type Day = {
  title: string;
  value: string;
  parts: Array<Part>;
  inputs?: Array<Input>;
};

const days: Array<Day> = [];

export const addDay = (day: Day) => {
  days.push(day);
};

export const getDays = () => {
  return days;
};

export const getDay = (dayValue: string) => {
  return days.find((day) => day.value === String(dayValue));
};

export const getPart = (dayValue: string, partValue: string) => {
  const day = getDay(dayValue);

  return day?.parts.find((part) => part.value === String(partValue));
};

export const execPart = (dayValue: string, partValue: string, inputValue?: string) => {
  const part = getPart(dayValue, partValue);

  if (part) {
    part.entryPoint(inputValue);
  }
};
