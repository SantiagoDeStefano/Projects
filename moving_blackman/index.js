const myBox = document.getElementById("myDiv");
const moveAmount = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "🧑🏻‍🦲";
    myBox.style.backgroundColor = "rgb(255, 209, 209)";
});
document.addEventListener("keyup", event => {
    myBox.textContent = "👩🏿‍🦲";
    myBox.style.backgroundColor = "rgb(66, 14, 14)";
});
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch(event.key) {
            case "ArrowUp":
                y = y - moveAmount;
                break;
            case "ArrowDown":
                y = y + moveAmount;
                break;
            case "ArrowLeft":
                x = x - moveAmount;
                break;
            case "ArrowRight":
                x = x + moveAmount;
                break;    
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
    