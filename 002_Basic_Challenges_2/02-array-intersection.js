function arrayIntersection(arr1, arr2) {
  try {
    let res = [];
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
      let set1 = new Set(arr1);
      let set2 = new Set(arr2);
      for (const x of set2) {
        if (set1.has(x)) {
          res.push(x);
        }
      }
    }
    return res;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 5, 6, 7]));
console.log(arrayIntersection([1, 2, 3, 4, 5], [7, 8, 9]));
console.log(arrayIntersection([1, 1, 2, 3, 4, 5], [1]));
console.log(arrayIntersection([1, 1, 2, 3, 4, 5], [1, 1, 1, 2, 2]));
console.log(arrayIntersection([1, 1, 2, 3, 4, 5], 12));
