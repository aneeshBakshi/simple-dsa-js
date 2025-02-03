function calculator(num1, num2, oper) {
  try {
    if (isNaN(num1) || isNaN(num2)) {
      return "Not a Number";
    }
    let res = 0;
    switch (oper) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
      case "%":
        res = num1 % num2;
        break;
      default:
        res = "Invalid input";
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

console.log(calculator(21, 34, "+"));
console.log(calculator(25, 55, "-"));
console.log(calculator(11, 31, "/"));
console.log(calculator(31, 200, "*"));
console.log(calculator("ab", 2, "/"));
console.log(calculator(2, 200, "ab"));
