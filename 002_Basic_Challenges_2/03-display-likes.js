function displayLikes(names) {
  try {
    if (Array.isArray(names)) {
      if (names.length === 0) {
        return `No one likes this`;
      }
      if (names.length === 1) {
        return `${names[0]} likes this`;
      }
      if (names.length === 2) {
        return `${names[0]} and ${names[1]} likes this`;
      }

      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } other likes this`;
    }
    return "Invalid entry";
  } catch (error) {
    console.log(error.message);
    return `${error.message}`;
  }
}

console.log(displayLikes(["Alex", "Abhishek", "Ajit"]));
console.log(displayLikes(["Alex", "Abhishek"]));
console.log(displayLikes(["Alex"]));
console.log(displayLikes([]));
console.log(displayLikes("Alex"));
