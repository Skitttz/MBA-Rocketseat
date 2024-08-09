#### Método map()

O método map() chama a função callback recebida por parâmetro de cada elemento do Array Original, em ordem, e constrói um novo Array com base nos retornos de cada chamada, E no final. Devolve um novo Array.

```js
const products = ["Keyboard","Mouse","Monitor"];

// Percorro os itens numa Array
products.map((item) => {console.log(item);})

// Sintaxe reduzida
products.map((product) => console.log(product));

// Utilizando retornando um novo objeto

const format = products.map(() => {
	return product.toUpperCase();
})

console.log(format);


const randomNumber = products.map(() => {
	id: Math.random(),
	description: product,
})

console.log(randomNumber);

```

#### Método filter()

O método filter() cria um novo Array com todos os elementos que passaram na condição 

```js
const words = ["Javascript","HTML","CSS","Web"];

const result = words.filter((word) => word.length > 3);
console.log(result);


const products = [
{description:"Teclad", price: 150, promotion: true},
{description:"Mouse", price: 70, promotion: false},
{description:"Monitor", price: 900, promotion:true},
]

// Exemplo de um filtro de produtos na promocao
const promotion = products.filter((product) => product.promotion === true);

console.log(promotion);

```

#### Método findIndex()

Retorna o índice no Array do primeiro elemento que satisfizer a condição. Caso contrario, retorna **-1**, indicando que nenhum elemento passou no teste.

```js
const values = [4,6,8,12];

// Obtendo o primeiro indice do elemento que o valor foi maior do que 4
console.log(values.findIndex((value)=> value > 4));

const indexValor = values.findIndex((value)=> value > 4));

console.log(index);
console.log(values[index]);


// Retorno dara -1 
// pois nao ha quem satisfaca essa condicao
console.log(values.findIndex((value) => value > 12)); 
```

#### Método find()

Retorna o valor do primeiro elemento do Array que satisfizer a condição, caso contrario retorna **undefined** 

```js

const values = [5,12,8,130,44];

const found = values.find((value) => value > 10);
console.log(found); // Retorna o valor 12

const fruits = [
	{name:"maca", quantity:23},
	{name:"morango", quantity:23},
	{name:"abacaxi", quantity:23},
	{name:"laranja", quantity:23},
]

const result = fruits.find((fruit) => fruit.name === "banana");;

// Se torna undefined pois nao existe banana em fruits, mas se houvesse retornaria o objeto.
console.log(result);
```

#### Método every()

Testa se todos os elementos da Array passam na condição e retorna um valor **boolean**

```js
const ages = [15,30,39,29];

const result = ages.every((age) => age >= 18);

// Falso
console.log(result);
```

#### Método some()

Testa se ao menos um dos elementos no Array passa na condição e retorna um valor de true ou false

```js
const ages = [15,30,39,29];
const result = ages.some((age) => age < 18)
console.log(result);
```

#### Método reduce()

Utilizando para Reduzir a Array a um único vetor 

Parâmetros
- Array Original (values)
- Acumulador (accumaltor)
- Valor da interação (currentValue)
- Valor inicial (0)
- Index (index da iteração atual - opcional)

```js
[const values = [1,2,3,4,5,6]
const sum = values.reduce((acc,currentValue,index) => {

console.log(acc);
console.log(currentValue);
console.log(index);
console.log(acc + currentValor);

return acc = acc + d
}, 0)

console.log("Result", sum);](<const values = [1,2,3,4,5,6]
const sum = values.reduce((acc,currentValue,index) =%3E {

console.log("Accumlator:",acc);
console.log("CurrentValue:",currentValue);
console.log("Index:",index);
console.log(`Accumlator (${acc}) + CurrentValue (${currentValue})`)
console.log("Sum:",acc + currentValue);
console.log("###################")

return acc = acc + currentValue
}, 0)

console.log("Result", sum);>)

```