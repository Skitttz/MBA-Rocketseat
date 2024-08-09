#### Desestruturação de Array

**Destructuring assignment** (desestruturação) permite extrair dados de Arrays ou Objetos em variáveis distintas 
```js
const data = ["Skittz","skittz@gmail.com"];
const [username,email] = data;

console.log("username: ",username); // Skittz
console.log("email: ",email); // skittz@gmail.com

const frutas = ['Manga','Laranja','Abacaxi'];

// Desestrutura somente o primeiro, qualquer valor nome de valor sera referencia para o primeira posicao
const [posicao1] = frutas;
const [manga] = frutas;

// Esses dois casos vao imprimir 'Manga'
console.log(posicao1);
console.log(manga);

//Ignorando a primeira desestruturacao
const [_, segundaFruta] = frutas;


// Imprimi 'Laranja'
console.log(segundaFruta);


// Ignorando o primeiro e o segundo na desestruturacao
const [, , terceiraFruta] = frutas;

console.log(terceiraFruta);
```


#### Desestruturação de Objeto

**Destructuring assignment** (desestruturação) permite extrair dados de Arrays ou Objetos em variáveis distintas 
```js
const product = {
	description: "Keyboard",
	price: 150
}

// Desestrutura ja deixando separado
const {description, price}  = product;


console.log("Description: ", description);
console.log("Price: ", price);



function newProduct({description,price}){
	console.log("###NEW PRODUCT###");
	console.log("Description:", description);
	console.log("Price: $",price);
}

newProduct({description: "Mouse", price:50});
```


#### Rest Params

**Rest params (...)** permite representar um numero indefinido de argumentos como Array

```js
function values(...args){
	// Mostra quantidade de parametros
	console.log(args.length);
	
	// Exibindo conteudo da Array (percorre)
	console.log(...args);
	
	// Exibe conteudo do rest que e um Array
	console.log(args)
}

values(2,1,3);  // Imprime 3
				// 2 1 3
				// (3) [2,1,3]
```


#### Spread

Spread (espalhar) permite que um objeto iterável, como uma expressão de Array ou uma string seja expandido e usado onde zero ou mais argumentos

```js
const numbers = [1,2,3];
console.log(numbers);  // (3) [1,2,3]

// Spread
console.log(...numbers); // 1 2 3


const data = [
 {
	name: "Skittz",
	email: "skittz@gmail.com",
	avatar: "avatar.png",
 },
 {
	name: "Vinicius",
	email: "vinicius@gmail.com",
	avatar: "vinicius.png",
 }
];

console.log(data); // (2) [{...}, {...}]

// Utilizando o spread no Array com objetos
console.log(...data);
// {name: "Skittz", email"skittz@gmail.com", avatar:"avatar.png"}
// {name:"Vinicius",email:"vinicius@gmail.com",avatar:"vinicius.png"}
```