function removeDuplicates(testArray) {
  try {
    let testSet = new Set(testArray);
    return [...testSet];
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

console.log(removeDuplicates([1, 1, 1, 1, 1]));
console.log(removeDuplicates([1, "a", "a", "A", 2, 3]));
console.log(removeDuplicates(1));
