function sumOfEvenSquareNumbers(numbers) {
  let sum = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);

  return sum;
}

console.log(sumOfEvenSquareNumbers([1, 2, 3, 4, 5]));
