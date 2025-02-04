function validAnagrams(str1, str2) {
  const testStr1 = str1.split("").sort().join("");
  const testStr2 = str2.split("").sort().join("");
  return testStr1 === testStr2;
}

console.log(validAnagrams("xaaax", "aaaxx"));
