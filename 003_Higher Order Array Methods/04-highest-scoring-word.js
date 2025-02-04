function highestScoringWord(str) {
  const words = str.split(" ");
  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > scores[highestIndex]) {
      highestIndex = i;
    }
  }
  return words[highestIndex];
}

console.log(highestScoringWord("hi i am yyyy"));
console.log(highestScoringWord("hi i xxxxxx am yyyy "));
