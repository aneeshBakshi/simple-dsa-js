// Simple Examples for higher order array methods

const number = [1, 2, 3, 4, 5];

// map
const doubleNumbers = number.map((num) => num * 2);

// console.log(doubleNumbers);

// filter
const evenNumbers = number.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

// reduce

const sum = number.reduce((total, num) => {
  return total + num;
}, 0);

// console.log(sum);

// forEach
number.forEach((num) => {
  //   console.log(num);
});

// find
const foundNumber = number.find((num) => num > 2);

// console.log(foundNumber);

// some
const hasEvenNumber = number.some((num) => num % 2 === 0);

// console.log(hasEvenNumber);

// every
const allNumberGreaterThanZero = number.every((num) => num > 1);

console.log(allNumberGreaterThanZero);
