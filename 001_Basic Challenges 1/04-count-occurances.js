function countOccurances(testString, testChar) {
  try {
    let res = 0;
    for (let i = 0; i < testString.length; i++) {
      if (testString[i] === testChar) {
        res++;
      }
    }
    return res;
  } catch (error) {
    return error.message;
  }
}

console.log(countOccurances("ABC", "a"));
console.log(countOccurances("aBa", "a"));
console.log(countOccurances(123, "a"));
