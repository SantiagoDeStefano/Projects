const display = document.getElementById("display");
function addToDisplay(input) {
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = parseFloat(eval(display.value).toFixed(6));
    }
    catch(error) {
        display.value = "Error";
    }
}