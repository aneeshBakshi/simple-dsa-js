function isPalindrome(input) {
  try {
    let testString = input;
    if (!isNaN(input)) {
      testString = input.toString();
    }
    let reverseString = testString.split("").reverse().join("");

    if (testString === reverseString) {
      return "Palindrome";
    }
    return "Not a Palindrome";
  } catch (error) {
    return error.message;
  }
}

console.log(isPalindrome("Aneesh"));
console.log(isPalindrome(123.5));
console.log(isPalindrome("madaM"));
console.log(isPalindrome("madam"));
