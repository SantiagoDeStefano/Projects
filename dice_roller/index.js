function rollDice() {
    const numberOfDices = document.getElementById("number_of_dice").value;
    const diceResult = document.getElementById("dices_result");
    const dicesImages = document.getElementById("dices_images");
    const values = [];
    const images = [];

    for(let i = 0; i < numberOfDices; i++) {
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }

    diceResult.textContent = `Dices: ${values.join(', ')}`;
    dicesImages.innerHTML = images.join('  ');
}