const rollDice = () => {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.ceil(Math.random()*6);
        values.push(value);
        images.push(`<img src="Dices/${value}.png" alt="Dice${value}" >`);
    }
    
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}