function diceGameSimulation(numSimulations) {
  const simulationResult = [];
  for (let i = 0; i < numSimulations; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let sum = dice1 + dice2;
    let result;
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    simulationResult.push({ dice1, dice2, sum, result });
  }
  return simulationResult;
}

console.log(diceGameSimulation(3));
