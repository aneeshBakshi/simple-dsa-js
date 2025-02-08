function fibonacci(num) {
  if (num < 2) {
    return num;
  } else if (num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(4));
console.log(fibonacci(8));
