const mainForm = document.querySelector('form');
const valueCurrency = document.getElementById('amount');
const typeCurrency = document.getElementById('currency');

const footerResult = document.querySelector('main footer');
const description = document.getElementById('description');
const totalValue = document.getElementById('result');

const hasCharactersRegex = /\D+/g;
const valueUSD = 4.87;
const valueEUR = 5.32;
const valueGBP = 6.08;

valueCurrency.addEventListener('input', () => {
  valueCurrency.value = valueCurrency.value.replace(hasCharactersRegex, '');
});

mainForm.onsubmit = (event) => {
  event.preventDefault();
  switch (typeCurrency.value) {
    case 'USD':
      convertCurrency(valueCurrency.value, valueUSD, 'US$');
      break;
    case 'EUR':
      convertCurrency(valueCurrency.value, valueEUR, '€');
      break;
    case 'GBP':
      convertCurrency(valueCurrency.value, valueGBP, '£');
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    footerResult.classList.add('show-result');
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    let total = amount * price;
    if (isNaN(total)) {
      return alert('Digite o valor corretamente para converter');
    }
    total = formatCurrencyBRL(total);
    result.textContent = `${total}`;
  } catch (error) {
    footerResult.classList.remove('show-result');

    console.error(error);
    alert('Nao foi possivel converter, tente novamente mais tarde.');
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
