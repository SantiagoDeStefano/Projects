const myCheckBox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const mastercardButton = document.getElementById("masterCardButton");
const paypalButton = document.getElementById("payPalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = "You are subscribed!";
    }
    else {
        subResult.textContent = "You are not subscribed!";
    }
    if(visaButton.checked) {
        paymentResult.textContent = "You are paying with Visa";
    }
    else if(mastercardButton.checked) {
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else {
        paymentResult.textContent = "You are paying with PayPal";
    }
}