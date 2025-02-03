function titleCase(testString) {
  try {
    if (typeof testString === "string") {
      const words = testString.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
      return words.join(" ");
    } else {
      return "Not a string";
    }
  } catch (error) {
    return error.message;
  }
}

console.log(titleCase("abc def"));
console.log(titleCase("i'm starting my dsa journey today"));
console.log(titleCase(123));
