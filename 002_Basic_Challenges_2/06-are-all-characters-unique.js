function areAllCharactersUnique(str) {
  let testArr = str.split("");
  let testSet = new Set(testArr);
  if (testArr.length !== testSet.size) {
    return false;
  }
  return true;
}

console.log(areAllCharactersUnique("aabsc"));
console.log(areAllCharactersUnique("absc"));
