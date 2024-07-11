const clearBtn = document.getElementById('clear-btn');
const calculateBtn = document.getElementById('btn-calculate');
const yearsInput = document.getElementById('years');
const mortgageAmt = document.getElementById('mortgage-amt');
const interestRate = document.getElementById('interest-rate');
const repaymentOption = document.getElementById('repayment');
const interestOption = document.getElementById('interest');

function calculate() {
    const amt = mortgageAmt.value;
    const interest = interestRate.value / 100;
    const term = yearsInput.value;

    if(interestOption.checked) {
        const monthlyPmt = (interest * amt) / 12;
        console.log(monthlyPmt);
    }
}

calculateBtn.addEventListener('click', calculate)