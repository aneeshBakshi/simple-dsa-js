function validIPV4(str) {
  const testArr = str.split(".");
  if (testArr.length !== 4) {
    return false;
  }
  return testArr.every((num) => num >= 0 && num <= 255);
}

console.log(validIPV4("0.0.0.0"));
console.log(validIPV4("240.0.10.230"));
console.log(validIPV4("240.260.10.230"));
console.log(validIPV4("240.250.10.230.255"));
