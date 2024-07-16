const numOfDice = document.getElementById("numOfDice");
const diceResult = document.getElementById("dice-result");
const diceImages = document.getElementById("dice-images");
const images = [];
const values = [];

function rollDice() {
  for (let i = 0; i < numOfDice.value; i++) {
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src="dice/${value}.png">`);
  }
  diceResult.textContent = `dice roled: ${values.join(",")}`;
  diceImages.innerHTML = images.join(" ");
}
