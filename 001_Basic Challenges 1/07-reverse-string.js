function reverseString(testString) {
  try {
    if (typeof testString === "string") {
      let resString = "";
      for (let i = testString.length - 1; i >= 0; i--) {
        resString += testString[i];
      }
      return resString;
    }
    return "Not a String";
  } catch (error) {
    return error.message;
  }
}

console.log(reverseString("Aneesh"));
console.log(reverseString(123));
console.log(
  reverseString("Far far from the light, when the night creatures come")
);
