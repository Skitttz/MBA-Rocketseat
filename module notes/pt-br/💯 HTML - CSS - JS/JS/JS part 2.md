### Objetos

Um objeto e uma estrutura que representa algo com propriedades e comportamentos 
##### Propriedade

Imagine que voce tem um carro e esse carro e um objeto em tem varias caracteristicas(propriedades)

##### Métodos
Alem de caracteristicas(propriedade), o carro pode fazer coisas(comportamento)


objetos tem notacao de ponto e notacao de colchetes



this.name (pode acessar uma propriedade dentro do proprio objeto)

exemplo:

```js
const user ={
"name" :"Carlos",
message: function () => {
	console.log(`Ola ${this.name}`)
}
}
```

#### Atualizando objeto


```js
const procut = {
name: "Teclado",
quantity: 100,
}

console.log(procut.quantity);
product.quantity = 90;
console.log(product.quantity);


product['quantity'] = 50;
console.log(product['quantity])
```


#### Encadeamento opcional (Optional chaining)



```js
const user = {
id : 1,
name: "Rodrigo",
address: {
street: "Avenida Brasil",
city: "Sao Paulo",
geo: {
latitude : 47.808,
longitude: 17.5674
},
},
message: function () {
console.log(`Ola, ${this.name}!`);
},
}

console.log(user.adress.street);

// NAo sabe se essa propriedade existe
console.log(user?.address?.cep);

user.message?.();
```



#### Operador de coalescência nula


```js
let content = null;
// Ira exibir o conteudo padrao ja que o content apenas com 
// null ou undefined
// OBS: Se for >>false<< ele ira retornar o content normalmente
console.log(content ?? "Conteudo Padrao");

const user = {
	name: "Carlos",
	avatar: undefined
}

console.log(user.avatar ?? "default.png");


```


#### Função construtora



```js
//Exemplo 1
function Person(name){
	this.name = name;
	this.message = function(){
		console.log(`Ola, ${this.name}`);
	}
}
const person1 = new Person("Carlos");
console.log(person1.name);
person1.message();


//Exemplo 2
function createProduct(name){
	const product = {}
	product.name = name;
	product.details = function(){
		console.log(`O nome do produto e ${this.name}`);
	}

	return product
}

const product1 = new createProduct("Teclado");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Mouse");
console.log(product2.name);
product2.details();

//Exemplos de funcoes construtoras

let name = new String("Carlos");
console.log(name);

let price = "40.5".replace(".","");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);
```