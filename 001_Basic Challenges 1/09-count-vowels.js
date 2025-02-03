function countVowels(input) {
  try {
    let res = 0;
    if (typeof input === "string") {
      for (let i = 0; i < input.length; i++) {
        if (
          input[i].toLowerCase() === "a" ||
          input[i].toLowerCase() === "e" ||
          input[i].toLowerCase() === "i" ||
          input[i].toLowerCase() === "o" ||
          input[i].toLowerCase() === "u"
        ) {
          res++;
        }
      }
    }
    return res;
  } catch (error) {
    console.log(error.message);
    return -1;
  }
}

console.log(countVowels("Aneesh"));
console.log(countVowels(123));
console.log(countVowels("hh"));
