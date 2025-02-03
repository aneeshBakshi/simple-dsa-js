function findTheMissingLetter(arr) {
  try {
    let start = arr[0].charCodeAt(0);
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i].charCodeAt(0);

      if (current - start > 1) {
        return String.fromCharCode(start + 1);
      }
      start = current;
    }
  } catch (error) {
    console.log(error.message);
    return -1;
  }
}

console.log(findTheMissingLetter(["a", "b", "d", "e"]));
