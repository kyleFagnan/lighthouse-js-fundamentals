const args = process.argv;
const sliced = args.slice(2);

const diceRoll = function(sliced) {
  const numOfRolls = Number(sliced[0]);
  const valueOfRolls = [];
  let result = "";
  for (let i = 0; i < numOfRolls; i++) {
    let rolledNumber = Math.floor(Math.random() * 6) + 1;
    valueOfRolls.push(rolledNumber);
  }
  result = `rolled ${numOfRolls} dice: ${valueOfRolls.join(", ")}`;
  return result;
};
console.log(diceRoll(sliced));
