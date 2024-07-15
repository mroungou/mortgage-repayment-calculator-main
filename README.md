# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: (https://github.com/mroungou/mortgage-repayment-calculator-main)
- Live Site URL: (https://mroungou.github.io/mortgage-repayment-calculator-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project I got to practice more using template literals and different methods available for arrays and nodelists. Getting to work with both and knowing how to iterate over them strengthened by knowledge.

```
```
```js
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
```



### Continued development

I would like to rebuild this project using a JS framework such as Vue or React and make my code more reusable and DRY.

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This helped with styling the radio buttons and making sure that they functioned properly
- [Formatting Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) - This helped with formatting the currency once it had been computed - used this method so I wouldn't have to code my own logic.


## Author

- Twitter - [@mroungou](https://x.com/mroungou)



