function formatPhoneNumber(number) {
  try {
    if (Array.isArray(number)) {
      if (number.length === 10) {
        return `(${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`;
      }
    }
    return `Invalid Phone Number`;
  } catch (error) {
    console.log(error.message);
    return `Invalid Phone Number`;
  }
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(formatPhoneNumber(12345));
