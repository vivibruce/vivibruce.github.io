const currencyElOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyElTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

function calculateRates(){
    const currency_one = currencyElOne.value;
  const currency_two = currencyElTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res=>res.json())
  .then(data=>{
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      
      amountTwo.value = (amountOne.value * rate).toFixed(2);
  });
}

function swapCurrencies(){
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculateRates();

}

currencyElOne.addEventListener('change', calculateRates);
currencyElTwo.addEventListener('change', calculateRates);
amountOne.addEventListener('input', calculateRates);
amountTwo.addEventListener('input', calculateRates);

swap.addEventListener('click', swapCurrencies);

calculateRates();
