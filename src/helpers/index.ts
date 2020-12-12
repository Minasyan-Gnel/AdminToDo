export const getNumbersFromRange = (from: number, to: number): number[] => {
  const numbersArr = [];
  for (let i = from; i <= to; i++) {
    numbersArr.push(i);
  }
  return numbersArr;
};
