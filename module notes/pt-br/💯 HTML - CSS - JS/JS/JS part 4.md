## Data e Hora

### Primeiras funções 

```js

// Exibe data e hora atual
console.log(new Date());

// Mostra a primeira data que tem disponivel (31 dez 1969)
console.log(new Date(0))

// Exibe o numero em milissegundos
console.log(new Date().getTime())

// Define uma data com Ano, mes(0-11) e dia.
console.log(new Date(2024,6,3));

// Define data e hora. ( 30 jul 2024 14:30:00 )
console.log(new Date(2024, 6 , 3 , 14 , 30 , 0))
console.log(new Date("2024-07-03T14:30:00"));
console.log(new Date("July 3, 2032 13:30:33"));
```

### Buscar data

```js
let dia = new Date("2024-07-021T14:30:10");

// Dia da semana de 0 a 6
console.log(dia.getDay());

// Dia do mes de 0 a 30
console.log(dia.getDate());

// Mes
console.log(dia.getMonth());

// Horas
console.log(dia.getHours());

// Minutos
console.log(dia.getMinutes());

// Seconds
console.log(dia.getSeconds());
```

### Modificar data

```js
let dia = new Date("July 3, 2024 14:30:00");

// Modificar o ano
dia.setFullYear(2030);

// Modificar o mes (comeca com 0)
dia.setMonth(7);

// Modificar o dia
dia.setDate(10);

// Modificar a hora
dia.setHours(18);

// Modificar o minuto
dia.setMinutes(15);

// Modificar o segundo
dia.setSeconds(30);
```

### Formatar data

```js
let dia = new Date("2024-07-02T14:30:00");

// Formata para o dia sempre ter 2 digitos.
console.log(dia.getDate().toString().padStart(2,"0"));

// Formata para o mes sempre ter 2 digitos.
let mes = (dia.getMonth() + 1).toString().padStart(2,"0");
console.log(month);

let ano = dia.getFullYear();
let hora = dia.getHours();
let minutos = dia.getMinutes();

console.log(`${dia}/${mes}/${ano} as ${hora}h${minutos}`);

```

### Convertendo uma data para String

```js
let dia = new Date("2024-07-02T14:30:00");

// Converte para String
console.log(dia.toString());

// Retorna somente a data
console.log(dia.toDateString());

//Retorna somente a hora.
console.log(dia.toTimeString());
```

### Exibindo data e hora formatadas de acordo com a localidade

```js
let dia = new Date("2024-07-02T14:00:00");

// Exibe a data e hora no formato local
// em dia:mes:ano
console.log(dia.toLocaleDateString());
// em hh:mm:ss
console.log(dia.toLocaleTimeString());

// Exibe a data e hora no formato escolhido
console.log(dia.toLocaleDateString("en"));
console.log(dia.toLocaleTimeString("en"));


```

### Usando o toLocaleString()

```js
let dia = new Date("2024-07-02T14:00:00");

console.log(dia.toLocaleString());

console.log(dia.toLocaleString("en"));

// Exibe a data e hora em styles diferentes (02/07/2024)
console.log(dia.toLocaleString("pt-BR"),{
	dateStyle: "short",
	});

// Exibe a data e hora em styles diferentes (2 de julho de 2024)
console.log(dia.toLocaleString("pt-BR"),{
	dateStyle: "long",
	});

// Exibe a data e hora em styles diferentes (2 de jul. de 2024)
console.log(dia.toLocaleString("pt-BR"),{
	dateStyle: "medium",
	});

// Exibe a data e hora em styles diferentes (Terca-feira, 2 de julho de 2024)
console.log(dia.toLocaleString("pt-BR"),{
	dateStyle: "full",
	});

// Exibe a data e hora em styles diferentes (Terca-feira, 2 de julho de 2024)
console.log(dia.toLocaleString("pt-BR"),{
	day: "2-digit",
	month: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	});

let amount = 12.5;
console.log(amount.toLocaleString("pt-BR",{
	style: "currency",
	currency: "BRL",
	}))
```


### Timestamp

- Uma data e representada como um numero. Esse numero também e conhecido como timestamp(carimbo de data/hora)
- O timestamp e um valor que representa um ponto especifico do tempo.

### Conhecendo a Intl

```js
// Intl e a API de Internacionalizacao do ECMAScript.

// Obtem informacoes da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);

// Exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

const date = new Date();

// Obtem a diferenca em minutos do timezone
console.log(date.getTimezoneOffset());

// Obtem a difrenca em horas do timezone
console.log(date.getTimezoneOffset()/60);
```


### Criando uma data e hora com fuso horário

```js
const dataComFuso = new Date("2023-12-13T22:56:30.603+03:00");
console.log(dataComFuso.toISOString());
console.log(new Date().toLocaleString());


// Altera o fuso se colocar trocar a parte qu esta +03:00 da const dataComFuso
console.log(dataComFuso.toLocaleString()); ));

```





## Classe

-  Classes e uma forma de criar objeto, e uma maneira de criar objeto e definir comportamento utilizando construtores e métodos

### Exemplo Classe

```js
class Animal {
	constructor(name) {   // Construtor
		this.name = name;
	}

	// Método
	makeSound() {
		console.log("Some generic sound");
	}
}
```

### Exemplo Herança

```js
class Dog extends Animal {
	// Sobrescrevendo o método makeSound
	makeSound() {
		console.log("Woof Woof");
	}

	// Novo método específico para a classe Dog
	fetch() {
		console.log("Fetching the ball");
	}
}
```

### Adicionando métodos nas classes
```js
class User {
	constructor(name,email){
	  this.name  = name;
	  this.email = email;
	}

	sendEmail(){
		console.log("E-mail enviado para", this.name, "para o endereco ",this.email);
	}
}

const user = new User("Carlos","carlos@gmail.com");
user.sendEmail();
```

### Método estático
```js
class User {
	static showMessage(message){
		console.log(message);
	}
}

const user = new User();
 // Ele e passado pro proprio metodo sem instanciar a classe
user.showMessage("A mensagem");

```

### Herança na classe

```js
class Animal {
	constructor(name){
		this.name = name;
	}
	makeNoise() {
		console.log("sound generic animal");
	}
}


class Dog extends Animal {
	// Sobrescrevendo o método makeSound
	makeNoise() {
		console.log("Woof Woof");
	}

	// Novo método específico para a classe Dog
	run() {
		console.log("Run the ball");
	}
}


class Cat extends Animal {
	// Sobrescrevendo o método makeSound
	makeNoise() {
		console.log("Miau miau");
	}

	// Novo método específico para a classe Cat
	fetching() {
		console.log("Fetching the ball");
	}
}

const cat = new Cat("Emo");
const dog = new Dog("Bruce");

cat.makeNoise(); // Miau miau
dog.makeNoise(); // Woof Woof

cat.fetching(); // Fetching the ball
dog.run(); // Run the ball

```



### Classes x Prototype

JavaScript e dinâmico e não dispõe de uma implementação de uma class (palavra-chave class foi introduzida no ES2015 mas e syntax sugar), o javascript ainda permanece baseado em prototype.

#### O que e prototype?
E um objeto chamado prototype que podem chamar outros objetos prototype ate que o valor seja null, significa no final da corrente, o null age como um link final nesta cadeia de prototypes (prototype chain) 


```js
const array = ["Carlos", "Vinicius", "Skittz"];
// O próprio array herda de Array.prototype
```

#### Conceitos de Herança de Prototypes em JavaScript

Em JavaScript, todos os objetos herdam propriedades e métodos de um protótipo. Vamos entender como isso funciona com arrays.

1. **Array Prototype Chain**:
    - Quando criamos um array, como `const array = ["Carlos", "Vinicius", "Skittz"];`, esse array herda propriedades e métodos de `Array.prototype`.
    - `Array.prototype` é um objeto que contém métodos como `push`, `pop`, `forEach`, etc., que estão disponíveis para todos os arrays.

2. **Object Prototype Chain**:
    - `Array.prototype` por sua vez herda de `Object.prototype`.
    - `Object.prototype` é o protótipo raiz de quase todos os objetos em JavaScript. Ele contém métodos como `toString`, `hasOwnProperty`, etc.
    - `Object.prototype` não herda de nenhum outro objeto. Portanto, seu protótipo é `null`.

#### Cadeia de Prototype (Prototype Chain)

A cadeia de prototype de um array em JavaScript pode ser visualizada assim:

```js
array.__proto__ === Array.prototype; // true
Array.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true
```

#### Visualização da Cadeia de Prototype

1. `array` (o array que criamos):
    - Herda de `Array.prototype`.

2. `Array.prototype`:
    - Herda de `Object.prototype`.

3. `Object.prototype`:
    - Seu protótipo é `null`, significando que não herda de nenhum outro objeto.

#### Resumo

Podemos resumir a cadeia de prototypes do array da seguinte forma:

```
array -%3E Array.prototype -> Object.prototype -> null
```

Isso é o que chamamos de **cadeia de prototype** (prototype chain).

#### Código Reformulado

```js
const array = ["Carlos", "Vinicius", "Skittz"];

// O próprio array herda de Array.prototype
// E Array.prototype herda de Object.prototype
// Object.prototype é a base e não herda de ninguém (seu protótipo é null)

// Então a cadeia de prototypes do array fica assim:
array.__proto__ === Array.prototype;           // true
Array.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null;            // true

// Isso é chamado de uma cadeia de prototype (prototype chain)
```

#### Explicação Adicional

- **array.__proto__**: é o protótipo do array que aponta para `Array.prototype`.
- **Array.prototype.__proto__**: é o protótipo do `Array.prototype` que aponta para `Object.prototype`.
- **Object.prototype.__proto__**: é `null`, indicando que não herda de nenhum outro objeto.


### Classes lidando com exceções

```js
let objeto = []

try{
	objeto.execute();

	if(!objeto.includes(17)){
		throw new Error("O numero 17, nao esta disponive");
	}

	if(index > 99){
		throw new RangeError("Numero esta fora do intervalo. Escolha um numero de 0 a 99");
	}

} catch(error){
	if(error instanceof TypeError){
		console.log("Metodo indisponivel"); 
	}
	else if(error instanceof RangeError){
		console.log(error.message);
	}
	else{
		console.log(error);
	}
}
```

### Classe para criar Erro Customizado

```js
class myCustomError{
	constructor(message){
	this.message = "Class Error Custom" + message;
	}
	try {
		throw new Error("generic error");
		throw new MyCustomError("Throw Custom New Error");
	catch (error){
		if(error instanceof MyCustomError){
			console.log(error.message)'
		}
		else{
			console.log("Unable to execute");
		}
	
	}
	
	
	}

}
```