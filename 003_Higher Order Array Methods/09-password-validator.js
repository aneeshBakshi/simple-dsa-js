function validatePassword(password) {
  let isLengthValid = password.length >= 8;

  let hasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  let hasLowerCase = password
    .split("")
    .some((char) => char !== char.toUpperCase() && char === char.toLowerCase());

  let hasDigit = password.split("").some((char) => !isNaN(parseInt(char, 10)));

  return hasDigit && hasLowerCase && hasUpperCase && isLengthValid;
}

console.log(validatePassword("axwejbfs123B"));
console.log(validatePassword("123BKJSAHSDA"));
console.log(validatePassword("axwejbfsajdbsb12"));
console.log(validatePassword("axwejbfsaBDSD"));
console.log(validatePassword("a123B"));
