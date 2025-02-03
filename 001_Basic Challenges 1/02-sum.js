function getSum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Not a number";
  }
  return num1 + num2;
}

console.log(getSum(2, 21));
console.log(getSum("b", 21));
