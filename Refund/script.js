// Select Main Form
const form = document.querySelector('form');

// Select Element List
const expenseList = document.querySelector('ul');
const expenseQuantityItems = document.querySelector('aside header p span');
const expenseTotal = document.querySelector('aside header h2');

const amountInput = document.getElementById('amount');
const expenseInput = document.getElementById('expense');
const categoryInput = document.getElementById('category');

// Format Currency
function formatedCurrencyBRL(value) {
  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return value;
}

amountInput.addEventListener('input', () => {
  let amountValue = amountInput.value.replace(/\D/g, '');
  amountValue = Number(amountValue) / 100;
  amountInput.value = formatedCurrencyBRL(amountValue);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expenseInput.value,
    category_id: categoryInput.value,
    category_name: categoryInput.options[categoryInput.selectedIndex].text,
    amount: amountInput.value,
    created_at: new Date(),
  };
  expenseAdd(newExpense);
});

function expenseAdd(expense) {
  try {
    const expenseItem = document.createElement('li');
    const expenseIcon = document.createElement('img');

    const expenseDivInfo = document.createElement('div');

    const expensiveInfoName = document.createElement('strong');
    expensiveInfoName.textContent = expense.expense;
    const expensiveInfoCategory = document.createElement('span');
    expensiveInfoCategory.textContent = expense.category_name;

    expenseDivInfo.append(expensiveInfoName, expensiveInfoCategory);

    expenseDivInfo.classList.add('expense-info');

    const expenseAmount = document.createElement('span');
    expenseAmount.classList.add('expense-amount');
    expenseAmount.innerHTML = `<small>R$</small>${expense.amount
      .toUpperCase()
      .replace('R$', '')}`;

    const removeIcon = document.createElement('img');
    removeIcon.classList.add('remove-icon');
    removeIcon.setAttribute('src', './img/remove.svg');
    removeIcon.setAttribute('alt', 'remover');

    expenseItem.classList.add('expense');
    expenseIcon.setAttribute('src', `./img/${expense.category_id}.svg`);
    console.log(expense.category_id);
    expenseIcon.setAttribute('alt', `${expense.category_name}`);

    //Add icon to item
    expenseItem.append(expenseIcon, expenseDivInfo, expenseAmount, removeIcon);

    //Add item to list
    expenseList.append(expenseItem);
    clearAllInputs();
    updateTotal();
  } catch (error) {
    alert('Nao foi possivel atualizar a lista');
    console.error(error);
  }
}

function updateTotal() {
  try {
    const items = expenseList.children;

    expenseQuantityItems.textContent = `${items.length} ${
      items.length > 1 ? 'despesa' : 'despesas'
    }`;

    let total = 0;
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector('.expense-amount');

      let valueItem = itemAmount.textContent
        .replace(/[^\d,]/g, '')
        .replace(',', '.');

      valueItem = parseFloat(valueItem);
      if (isNaN(valueItem))
        return alert(
          'Nao foi possivel calcular o total, o valor nao parece ser um numero',
        );
      total += valueItem;
      expenseTotal.textContent = total;
    }
    const symbolBRL = document.createElement('small');
    symbolBRL.textContent = 'R$';
    total = formatedCurrencyBRL(total).toUpperCase().replace('R$', '');
    expenseTotal.innerHTML = '';
    expenseTotal.append(symbolBRL, total);
  } catch (error) {
    alert('Nao foi possivel calcular o total');
    console.error(error);
  }
}

expenseList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove-icon')) {
    const item = e.target.closest('.expense');
    item.remove();
  }
  updateTotal();
});

function clearAllInputs() {
  expense.value = '';
  categoryInput.value = '';
  amountInput.value = '';
}
