function findMaxNumber(testArray) {
  try {
    if (Array.isArray(testArray)) {
      let res = testArray[0];
      for (let i = 0; i < testArray.length; i++) {
        if (isNaN(testArray[i])) {
          continue;
        }
        if (testArray[i] > res) {
          res = testArray[i];
        }
      }
      return res;
    }
    return "not an Array";
  } catch (error) {
    return error.message;
  }
}

console.log(findMaxNumber([21, -55, "b", 30]));
console.log(findMaxNumber([21, -55, 20]));
console.log(findMaxNumber("abc"));
