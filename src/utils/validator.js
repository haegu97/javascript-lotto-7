export const isNumber = (input) => {
  return !isNaN(input);
};

export const isValidCost = (cost) => {
  return cost % 1000 === 0;
};
