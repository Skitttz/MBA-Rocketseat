### Imutabilidade

Uma vez algo imutável e criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma copia modificada para manter o original.

```js
const adress1 = {
	street: "Av Brazil",
	number: "40",
}

// adress 2 nao e uma copia do adress1
// O adress2 vai modificar o adress1.
// Porque o adress2 faz referencia a
// adress1 e nao um novo objeto na memoria
const adress2 = adress1;
adress2.number = 30;
```

A estrategia geralmente são feitas de duas maneiras, a primeira e mutar o dado alterando diretamente seu valor, e a segunda maneira e substituir o dado antigo por uma nova copia com alterações a desejar.

```js
const adress1 = {
	street: "Av Brazil",
	number: "40",
}

// const adress2 = adress1;
// Cria um novo objeto na memoria chamado adress2 com as propriedades e valores do adress1
const adress2 = {...adress1};
adress2.number = 30;
```

#### Aplicando imutabilidade

```js
const adress1 = {
	street: "Av Brazil",
	number: "40",
}

// Isso nao e uma Copia e sim auma Referencia
const addres2 = adress1;

const adress1Copy = {...adrdres1};
adress1Copy.number = 10;
// ou
const adress2Copy = {...adrdres1, number:10};
console.log(adress1,adress2Copy)


// Exemplo Array
const list = ["Apple","Orange"];
const list2 = list1;

list2.push("Water");
// Mesmo output para as duas Array, pois list2 faz referencia a list
// ["Apple","Orange","Water"],  ["Apple","Orange","Water"]
console.log(list,list2);


// Jeito correto de fazer uma copia da list
const list3 = [...list];
list3.push("Water");
// ou
const list4 = [...list,"Water"];

// Apenas list3,list4 agora tem o Water
// ["Apple","Orange"],  ["Apple","Orange","Water"]
console.log(list,list3);
console.log(list,list4);

```
### Shallow e Deep Copy

Shallow Copy (copia superficial): não pega os itens aninhados.
```js
const htmlCourse = {
	course: "HTML",
	students: [{name:"Carlos", email: "skittz@gmail.com"}],
}

const jsCourse = {
	...htmlCourse,
	course:"Javascript":,
}

jsCOurse.students.push({name:"Joao",email:"joao@email.com"});

console.log(htmlCourse,jsCourse);](<const htmlCourse = {
	course: "HTML",
	students: [{name:"Carlos", email: "skittz@gmail.com"}],
}

const jsCourse = {
	...htmlCourse,
	course:"Javascript",
}

// Isso nao eh uma copia, jsCourse eh uma referencia htmlCourse
// Se insiro um dado em jsCourse o htmlCourse tambem se altera
jsCourse.students.push({name:"Joao",email:"joao@email.com"});

console.log(htmlCourse);
console.log("########")'
console.log(jsCourse);

```

Deep Copy (copia profunda)
```js
const htmlCourse = {
	course:"HTML",
	students:[{name:"Rodrigo",email:"rodrigo99@gmail.com",}]
}

const jsCourse = {
	...htmlCourse,
	course: "Javascript",
}

jsCourse.students = [
	...htmlCourse.students,
	{name:"Joao",email:"joao@gmail,com"},
]
```


### Shallow freezing

```js
const book = {
	title: "Titanic",
	category: "romance",
	author:{
	name:"Ronaldinho",
	email: "ronaldinho99@gmail.com",
	},
}

// O javascript em si nao impoe restricoes a modificacao do objetos
// book.category = "HTML";


// Congela o objeto e impede a modificacao
Object.freeze(book);
book.category = "CSS"; // Nao modifica

// Object.freeze() nao impede modificacaoes profundas em objetos aninhados (Shallow freezing)
book.author.name = "Joao"
console.log(book);
```

### Deep freeze

```js
const book = {
	title: "Titanic",
	category: "romance",
	author:{
	name:"Ronaldinho",
	email: "ronaldinho99@gmail.com",
	},
}

function deepFreeze(object){
	// Obtem uma array com todas as propriedades do objeto
	const props = Reflect.ownKeys(object);
	console.log(props);

	// Itera sobre todas as propriedades do Objeto
	for(const prop of props){
		const value = object[prop];
		console.log(value);
		// Verifica se o valor e um objeto ou funcao para continuar aplicando o Deep Freeze em objetos aninhados
		if(value && (typeof value === "object" || typeof value === "function")){
			deepFreeze(value);
		}

	// Retorna o objeto congelado
	return Object.freeze(object);
	}
}

// Chama a funcao para congelar o bojeto com Deep Freeze
deepFreeze(book);
book.category = "Comedy"; // Nao vai funcionar pois o objeto esta congelado
console.log(book);
```

### Manipulação de Objetos Imutáveis 


```js
const book = {
	title: "Titanic",
	category: "romance",
	author:{
	name:"Ronaldinho",
	email: "ronaldinho99@gmail.com",
	},
}


const updatedBook = {
	...book,
	title: "Quem e voce Alaska?",
	category: "Drama",
}

// Original Intacto
console.log(book);
console.log("### BOOK UPDATE ####");
// Modificado
console.log(updatedBook);
console.log("## Desestruturando para remover propriedade Category ##");
const {category, ...bookWithoutCategory} = book;
console.log(bookWithoutCategory);

```