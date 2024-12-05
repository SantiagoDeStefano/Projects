function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const principalAmount = document.getElementById("principal");
    const rateAmount = document.getElementById("rate");
    const numbersYear = document.getElementById("year");

    let principal = Number(principalAmount.value);
    let rate = Number(rateAmount.value)/100;
    let year = Number(numbersYear.value);

    if(principal < 0 || isNaN(principal)) {
        principal = 0;
        principalAmount.value = 0;
    }
    if(rate < 0 || isNaN(rate)) {
        rate = 0;
        rateAmount.value = 0;
    }
    if(year < 0 || isNaN(year)) {
        year = 0;
        numbersYear.value = 0;
    }

    const result = principal * Math.pow(1 + rate/4, 4*year);
    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
}