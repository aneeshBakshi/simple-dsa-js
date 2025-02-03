function findTheMissingNumber(number) {
  try {
    let n = number.length + 1;
    let sum = (n * (n + 1)) / 2;
    let testSum = 0;
    for (let i = 0; i < number.length; i++) {
      testSum += number[i];
    }
    return sum - testSum;
  } catch (error) {
    console.log(error.message);
    return 0;
  }
}

console.log(findTheMissingNumber([1, 2, 4, 5]));
console.log(findTheMissingNumber([]));
