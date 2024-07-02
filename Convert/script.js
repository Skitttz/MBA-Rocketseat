const mainForm = document.querySelector('form');
const valueCurrency = document.getElementById('amount');
const typeCurrency = document.getElementById('currency');

const footerResult = document.querySelector('main footer');
const description = document.getElementById('description');
const totalValue = document.getElementById('result');

const hasCharactersRegex = /\D+/g;

const defaultValues = {
  valueUSD: 4.87,
  valueEUR: 5.32,
  valueGBP: 6.08,
};

valueCurrency.addEventListener('input', () => {
  valueCurrency.value = valueCurrency.value.replace(hasCharactersRegex, '');
});

async function getCurrency(typeCurrency) {
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${typeCurrency}`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      console.error(
        'Ops! Aconteceu algo de errado, a moeda sera convertido para um valor padrao. Tente novamente mais tarde',
      );
      return null;
    }

    const data = await response.json();
    const currencyKey = Object.keys(data)[0];
    const currencyData = data[currencyKey];
    const { ask, code } = currencyData;
    return { ask, code };
  } catch (error) {
    console.error(
      'Ops! Aconteceu algo de errado, a moeda sera convertido para um valor padrao. Tente novamente mais tarde',
    );
    return null;
  }
}

mainForm.onsubmit = async (event) => {
  event.preventDefault();
  const currencyValueApi = await getCurrency(typeCurrency.value);
  const { code: symbolApi = null, ask: currencyValue = null } =
    currencyValueApi || {};
  switch (typeCurrency.value) {
    case 'USD':
      convertCurrency(
        valueCurrency.value,
        (typeCurrency.value == symbolApi && currencyValue) ||
          defaultValues.valueUSD,
        'US$',
      );
      break;
    case 'EUR':
      convertCurrency(
        valueCurrency.value,
        (typeCurrency.value == symbolApi && currencyValue) ||
          defaultValues.valueEUR,
        '€',
      );
      break;
    case 'GBP':
      convertCurrency(
        valueCurrency.value,
        (typeCurrency.value == symbolApi && currencyValue) ||
          defaultValues.valueGBP,
        '£',
      );
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
