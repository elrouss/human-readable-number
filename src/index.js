module.exports = function toReadable(num) {
  const zeroToNineteenMap = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tensMap = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const getZeroToNineteen = (number) => zeroToNineteenMap[Math.floor(number)];
  const getTens = (number) => tensMap[Math.floor(number / 10 - 2)];

  const isLowerThanTwenty = (number) => number < 20;
  const isLowerThanOneHundred = (number) => number < 100;
  const isLowerThanOneHundredAndMultipleOfTen = (number) =>
    isLowerThanOneHundred(number) && number % 10 === 0;
  const isMultipleOfOneHundred = (number) => number % 100 === 0;

  if (isLowerThanTwenty(num)) {
    return getZeroToNineteen(num);
  }

  if (isLowerThanOneHundredAndMultipleOfTen(num)) {
    return getTens(num);
  }

  if (isLowerThanOneHundred(num)) {
    return `${getTens(num)} ${getZeroToNineteen(num % 10)}`;
  }

  if (isMultipleOfOneHundred(num)) {
    return `${getZeroToNineteen(num / 100)} hundred`;
  }

  const hundreds = `${getZeroToNineteen(num / 100)} hundred`;
  const tens = Math.floor(num % 100);
  const ones = Math.floor(num % 10);

  if (isLowerThanTwenty(tens)) {
    return `${hundreds} ${getZeroToNineteen(tens)}`;
  }

  if (isLowerThanOneHundredAndMultipleOfTen(tens)) {
    return `${hundreds} ${getTens(tens)}`;
  }

  return `${hundreds} ${getTens(tens)} ${getZeroToNineteen(ones)}`;
};
