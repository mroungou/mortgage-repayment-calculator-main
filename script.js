const clearBtn = document.getElementById('clear-btn');
const calculateBtn = document.getElementById('btn-calculate');
const yearsInput = document.getElementById('years');
const mortgageAmt = document.getElementById('mortgage-amt');
const interestRate = document.getElementById('interest-rate');
const repaymentOption = document.getElementById('repayment');
const interestOption = document.getElementById('interest');
const monthlyPmtSpan = document.getElementById('monthly-pmt');
const totalPmtSpan = document.getElementById('total-pmt');
const emptyResultsDiv = document.getElementById('empty-results');
const completedResultsDiv = document.getElementById('completed-results');

const inputs = document.querySelectorAll('input[type="text"]');
const inputsArray = [...inputs];
const radios = document.querySelectorAll('input[type="radio"]');

function calculate() {
    const amt = parseFloat(mortgageAmt.value);
    const interest = parseFloat(interestRate.value) / 100;
    const term = parseInt(yearsInput.value);

    let monthlyPmt;

    if(interestOption.checked) {
        monthlyPmt = (interest * amt) / 12;
        monthlyPmtSpan.innerText = `${new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(monthlyPmt)}`;
        totalPmtSpan.innerText = `${new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(monthlyPmt * 12 * term)}`;
    } else if(repaymentOption.checked) {
        const r = interest / 12 // gives you the monthly interest rate
        const n = term * 12 // gives you the number of payments to be made
        monthlyPmt = amt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        monthlyPmtSpan.innerText = `${new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(monthlyPmt)}`;
        totalPmtSpan.innerText = `${new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(monthlyPmt * n)}`;
    }
}

function hasError(element) {
    const parentDiv = element.parentElement;
    if (parentDiv) {
        parentDiv.classList.add('has-error')
        if (!parentDiv.querySelector('.error-message')){
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = 'This field is required';
            parentDiv.appendChild(errorDiv);
            // parentDiv.innerHTML += `<div class = "error-message">This field is required</div>`;
        }
    }

}

function hasNoError(element) {
    const parentDiv = element.parentElement;
    if (parentDiv) {
        parentDiv.classList.remove('has-error');
        const errorMessage = parentDiv.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove()
        }
    }
}

clearBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
        hasNoError(input);
    })

    radios.forEach(radio => {
        radio.checked = false;
        hasNoError(radio.parentElement.parentElement)
        radio.parentElement.parentElement.classList.remove('checked');
    })

    emptyResultsDiv.style.display = 'block';
    completedResultsDiv.style.display = 'none';
    monthlyPmtSpan.innerText = '';
    totalPmtSpan.innerText = '';
} )


function validateRadios(radios) {
    let isChecked = false;
    radios.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        hasError(radios[0].parentElement.parentElement); 
        return false;
    } else {
        hasNoError(radios[0].parentElement.parentElement);
        return true;
    }
}

interestOption.addEventListener('change', () => {
    if(interestOption.checked) {
        interestOption.parentElement.parentElement.classList.add('checked');
        repaymentOption.parentElement.parentElement.classList.remove('checked')
    }
})

repaymentOption.addEventListener('change', () => {
    if (repaymentOption.checked) {
        repaymentOption.parentElement.parentElement.classList.add('checked');
        interestOption.parentElement.parentElement.classList.remove('checked')
    }
})

inputsArray.forEach((input) => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
});

inputsArray.forEach((input) => {
    input.addEventListener('focusout', () => {
        input.parentElement.classList.remove('focused');
    });
});

calculateBtn.addEventListener('click', () => {
    let allInputFields = true;

    inputs.forEach(input => {
        if (input.value === '') {
            hasError(input)
            allInputFields = false;
        } else {
            hasNoError(input)
        }
    });

    const radiosValid = validateRadios(radios);
    
    if (allInputFields && radiosValid) {
        calculate();
        emptyResultsDiv.style.display = 'none';
        completedResultsDiv.style.display = 'block';
    }
});