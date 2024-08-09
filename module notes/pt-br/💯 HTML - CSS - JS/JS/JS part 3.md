
### Métodos de Texto

- `toUpperCase()`: Converte uma string para maiúsculas.
  
- `toLowerCase()`: Converte uma string para minúsculas.
  
- `length`: Propriedade que retorna o número de caracteres em uma string.
  
- `replace()`: Método que substitui parte de uma string por outra.
  
- `slice()`: Método que extrai uma parte de uma string e retorna uma nova string.
  
- `join()`: Método que junta todos os elementos de um array em uma string, usando um separador especificado.

Exemplo:

```js
const creditCard = "123456812344928";
const lastDigits = creditCard.slice(-4);

const maskedNumber = lastDigits.padStart(creditCard.length, "X");

const number = "123";
console.log(number.padEnd(10, "#"), number.length);

let message = "Estou estudando os fundamentos de js";

console.log(message.indexOf("fundamentos"));

console.log(message.includes("js"));
```

### Arrays

- `new Array()`: Cria um novo array vazio.
  
- `.length`: Propriedade que retorna o número de elementos em um array.
  
- `.push()`: Adiciona um ou mais elementos ao final do array.
  
- `.unshift()`: Adiciona um ou mais elementos no início do array.
  
- `.shift()`: Remove o primeiro elemento do array e retorna esse elemento.
  
- `.pop()`: Remove o último elemento do array e retorna esse elemento.
  
- `.indexOf()`: Retorna o primeiro índice em que um elemento pode ser encontrado no array.
  
- `.splice()`: Modifica o conteúdo de um array removendo ou substituindo elementos existentes.
  
- `.includes()`: Método que verifica se um array contém um determinado elemento.
  
- `.some()`: Método que verifica se pelo menos um elemento no array satisfaz a condição especificada por uma função.

Exemplo:

```js
const newArray = new Array();
console.log(newArray);
console.log("Carlos".length); // 6 (contando os caracteres)
console.log(newArray.length); // 0

const newArraySized = new Array(10); // Array com 10 espaços vazios

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length); // 3
console.log(fruits[0]); // Apple
console.log(fruits[8]); // undefined
console.log(fruits[fruits.length - 1]); // Orange

let fullName = "Carlos Vinicius";
console.log(fullName.split(" "));
console.log(Array.from(fullName));

let users = [];
users.push("teste 1");
users.push("teste 2");
users.push("teste 3");
users.unshift("teste 0");

users.shift();
users.pop();

let fruitsV2 = ["Apple", "Banana", "Orange"];
let position = fruitsV2.indexOf("Banana");
console.log(position);

fruitsV2.splice(1, 2);
console.log(fruitsV2);

let fruitsV3 = ["Apple", "Banana", "Orange"];
let positionFruit = fruitsV3.indexOf("Banana");
fruitsV3.splice(positionFruit, 1);
console.log(fruitsV3);

let userNames = ["Antonio", "Felipe", "Carlos"];
console.log(userNames.includes("Felipe"));

const existName = (name) => name === "Carlos";
console.log(userNames.some(existName));
```

### Repetição e Iteração

#### While

- `while`: Loop que executa um bloco de código enquanto uma condição específica for verdadeira.

Exemplo:

```js
let executeLoop = true;

while (executeLoop) {
  let response = window.prompt("Deseja continuar: 1(SIM) ou 2(NAO)");
  if (response === "2") {
    executeLoop = false;
  }
}

console.log("Segue o fluxo...");
```

#### Do While

- `do while`: Semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição inicial for falsa.

Exemplo:

```js
let value = 0;

do {
  value++;
  console.log(value);
} while (value < 10);

console.log("Segue o fluxo...");
```

#### Loop For

- `for`: Loop que repete um bloco de código um número específico de vezes.

Exemplo:

```js
let number = 7;

for (let step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${step * number}`);
}
```

#### For in

- `for...in`: Itera sobre as propriedades enumeráveis de um objeto, em ordem arbitrária.

Exemplo:

```js
let person = {
  name: "Carlos",
  sobrenome: "Vinicius",
  email: "carlos@gmail.com",
};

for (let property in person) {
  console.log(property); // Nome da propriedade
  console.log(person[property]); // Conteúdo da propriedade
}

let students = ["Skittz", "Carlos", "Vinicius"];

for (let index in students) {
  console.log(students[index]);
}
```

#### For of

- `for...of`: Itera sobre os elementos iteráveis (como arrays), retornando os valores dos elementos.

Exemplo:

```js
let students = ["Skittz", "Carlos", "Vinicius"];

for (let student of students) {
  console.log(student);
}


// Outro jeito de fazer
let users = [
  {
    name: "Carlos",
    sobrenome: "Vinicius",
    email: "carlos@gmail.com",
  },
  {
    name: "João",
    sobrenome: "Silva",
    email: "joao.silva@example.com",
  },
  {
    name: "Maria",
    sobrenome: "Santos",
    email: "maria.santos@example.com",
  },
];

for (let value of users) {
  console.log(value.name);
}
```

#### Break

- `break`:  é uma palavra-chave usada dentro de loops (for, while, do...while) e estruturas de controle (switch) para interromper a execução do loop ou sair de uma estrutura de controle condicional.

Exemplo:

```js

for (let i = 0; i < 10, i++){
	if(i === 5){
		break
	}
	
	console.log(i);
}
```


#### Continue

- `Continue`: é usado dentro de loops (for, while, do...while) para pular a iteração atual do loop e continuar com a próxima iteração.

Exemplo:

```js

for (let i = 0; i < 10, i++){
	if(i === 5){
		continue
	}
	
	console.log(i);
}
```


