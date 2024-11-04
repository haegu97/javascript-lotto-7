export const isNumber = (input) => {
  return !isNaN(input);
};

export const isValidCost = (cost) => {
  return cost % 1000 === 0;
};

export const validateIsSixNumber = (numbers) => {
  return numbers.length === 6;
};

export const validateDuplicateNumber = (input) => {
  const set = new Set(input);
  return set.size !== input.length;
};

export const validateNumbersRange = (numbers) => {
  return (
    numbers.filter((number) => {
      return number >= 1 && number <= 45;
    }).length !== 6
  );
};
