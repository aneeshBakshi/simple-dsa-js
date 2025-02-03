function fizzbuzz(num) {
  try {
    let res = [];
    if (!isNaN(num) && Number.isInteger(num) && num > 0) {
      for (let i = 1; i <= num; i++) {
        if (i % 15 == 0) {
          res.push("FizzBuzz");
        } else if (i % 5 == 0) {
          res.push("Buzz");
        } else if (i % 3 == 0) {
          res.push("Fizz");
        } else {
          res.push(i);
        }
      }
    }

    return res;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

console.log(fizzbuzz(1.1));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
