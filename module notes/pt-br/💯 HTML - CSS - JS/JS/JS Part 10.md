### setTimeout

- `setTimeout` executa uma função após um intervalo de tempo especificado
```js
setTimeout(() => {
	console.log("Teste"),
	1000})
```


### setInterval

- `setInterval` executa uma função **repetidamente** após um intervalo de especificado ao contrário do `setTimeout` que executa a função após um determinado tempo.

```js
let value = 10;

const interval = setInterval(() => {
console.log("Oi")
value--;

if(value === 0){
	console.log(Feliz ano novo!!);
	// Interrompe o intervalo de execucoes
	clearInterval(interval);
	}
}, 1000)
```


### Funções Assíncronas 

Uma função assíncrona pode conter uma expressão `await` , que **pausa a execução** da função assíncrona e `espera pela resolução da Promise` passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.

- Quando uma **função assíncrona** é chamada, ela retorna uma promisse;
- Quando a **função assíncrona** retorna um valor, a promise será resolvida com o valor de retorno;
- Quando a **função assíncrona** lança uma exceção ou algum valor, a promise será rejeitada com o valor lançado.


### Promises

```js
// Funcao retorna uma promisse
function asyncFunction(){
	return new Promise((resolve,reject) => {
		// Simula uma operacao assincrona
		setTimeout(() => {
			const isSuccess = true;
			if(isSuccess){
				resolve("A operacao foi concluida");
			} else{
				reject("Algo deu errado");
			}
		},3000) // Simula uma operacao de 3s
	})
}

// Visualizando que o retorno e uma promise
console.log("Executando func async");
asyncFunction()
	.then((response) => {
		console.log("Sucesso");
	}).catch((error) => {
		console.log("Error:",error);
	}).finally(() => {
		console.log("Fim da execucao");
	});
console.log("######");
console.log("Executando func async sem resolver promisse");
const response = asyncFunction();
 // Assim nao sera visualizado o return, a promisse ficara pendente
console.log(response);
```


### Async e Await

```js
// Funcao retorna uma promisse
function asyncFunction(){
	return new Promise((resolve,reject) => {
		// Simula uma operacao assincrona
		setTimeout(() => {
			const isSuccess = true;
			if(isSuccess){
				resolve("A operacao foi concluida");
			} else{
				reject("Algo deu errado");
			}
		},3000) // Simula uma operacao de 3s
	})
}

async function fetch(){
	const response = await asyncFunction();
	console.log(response);
	console.log("Fim da execucao fetchV1\n");
	console.log("######## \n");

}

const fetchV2 = async() => {
	const response = await asyncFunction();
	console.log(response);
	console.log("Fim da execucao fetchV2\n");
	console.log("######## \n");

}

async function fetchV3(){
	try{
		const response = await asyncFunction();
		console.log("Sucesso:", response);
	}catch(error){
		console.log("Error", error);
	} finally {
		console.log("Fim da execucao fetchV3\n");
	}
}


fetch();
fetchV2();
fetchV3();
```


### Event Loop

##### Características
`single threaded`
- Executa uma coisa por vez.

`no-blocking`
- Não trava o contexto da execução.

`asynchronous`
- Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.

`concurrent`
- As tarefas que executam assincronamente concorrem uma com as outras pelo processamento.

##### Concorrência e Event Loop
- O JavaScript possui um `modelo de concorrencia` baseado em um `event loop` response por gerenciar a execução de código assíncrono e eventos em um `unico thread`, permitindo que o JavaScript seja `não bloqueante`. 

![[event-loop.png]]

##### Micro e Macro Tasks
Existem dois tipos principais de tarefas na fila de callback:
- Microtasks:
	São tarefas de alta propriedade que são executadas antes das Macrotasks (temporizadores e promises)
- Macrotasks:
	São tarefas de menor prioridade, como callbacks de eventos, setTimeout e setInterval.


##### Resumo
1. **Execução de Código:** O código síncrono e executado de cima para baixo, empilhando e desempilhando funções conforme o necessário
2. **Eventos Assíncronos:** Quando ocorrem eventos assíncronos, como uma requisição concluída, o callback correspondente e enfileirado na fila de callback.
3. **Verificação do Event Loop:** o `Event Loop` verifica a pilha de chamadas e a fila de callback. Se apilha estiver vazia, ele move um callback da fila de callback para pilha de chamadas.
4. **Microtasks:** Antes de verifica novamente a fila de callback, o `Event loop` executa todas as microtasks pendentes.

### Ordem Execução

```js

// (1) Executa o codigo de forma sincrona e o valor 1 e impresso imediatamente
console.log(1);

// (3) Microtasks sao executadas antes do temporizador
queueMicrotask(() => {
	console.log(2);
})

// (5) Macrotasks que aguarda o evento do temporizador acionado
setTimeout(() => {
	console.log(3);
},1000)

// (2) Execucao sincrona;
console.log(4);

// (4) Adiciona uma microtask.
Promise.resolve(true).then(() => {
	console.log(5);
})

```