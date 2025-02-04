function hashtagGenerator(str) {
  let res = "#";
  if (str.length === 0) {
    return false;
  }
  res += str.split(" ").join("");
  if (res.length > 140) {
    return false;
  }
  return res;
}

console.log(hashtagGenerator("I love Javascript"));
console.log(hashtagGenerator(""));
console.log(
  hashtagGenerator(
    "Bobby's driving through the city tonight, Through the lights in a hot new rent-a-car. He joins the lovers in his heavy machine. It's a scene down on sunset boulevard. Say goodbye to hollywood. Say goodbye, my baby. Say goodbye to hollywood. Say goodbye, my baby."
  )
);
