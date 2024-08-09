### API
Uma API (Application Programming Interface) e uma interface que disponibiliza um conjunto de funcionalidade
- Exemplos: API de CEP, previsão do tempo, cotação de moedas, etc.

![[cliente-servidor.png]]


### Métodos HTTP utilizados em requisições, como 
- GET
- POST
- PUT
- DELETE
- PATCH

![[metodos-http.png]]

#### Exemplo de um retorno de dados da API

```js
{
	chave: valor
}
```

```js
{
	"user":{
		"id": 3838,
		"nome": "Skittz"
		"adress": {
			"street": "Rua Ali",
			"country": "Brazil"
		}
	}
	"books":[
		{
			"id": 123,
			"title": "Javascript"
			"price": 90
		},
		{
			"id": 444,
			"title" : "HTML",
			"price" : 40,
		}
	]
}
```

### Criando JSON Server

- Versão 
```
npm install json-server@0.17.4
```

- Dados Mockados (**server.json**)
```js
"products":[
	{"id": "1", "name":"Mouse", "price": 150},
	{"id": "2", "name":"Teclado", "price": 90},
	{"id": "3", "name":"Monitor", "price": 500},
],
"users" : [],
```

- package-json 
```json
"server" : "json-server server.json --port=3333"
```

- Testando **(main.js)**
```js

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.getElementById("form");

// Postando Produto
addEventListener("submit", async (event) => {
	event.preventDefault();
	
	await fetch("http://localhost:3333/products", {
		method: "POST",
		headers: {
			"Content-Type" : "application/json",
		},
		body: JSON.stringify({
			id: new Date().getTime().toString(),
			name: productName.value,
			price: productPrice.value,
		})
	
	})

})


fetch("http://localhost:3333/products")
.then((response) => response.json())
.then((data) => console.log(data));

// Utilizando o fetch com async/await
async function fetchProducts(){
	const response = await fetch("http://localhost:3333/products")
	const data = await response.json();
	console.log(data);
}

async function fecthProductsById(id){
	const response = await fetch(`http://localhost:3333/product/${id}`);
	const data = await response.json();
	console.log(data);
}

fetchProducts();
fecthProductsById("2");
```


![[xml-vs-json.png]]