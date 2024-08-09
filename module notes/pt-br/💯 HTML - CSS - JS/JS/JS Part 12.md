
#### Tipagem Explicita
	
```typescript
// Tipagem Explicita e quando na funcao ja e indicado quais sao os tipos indicados
function showTicker(user: string, ticket: number){
	console.log(`User ${user} show ticket number ${ticket}`)
}

showTicker("Tiny",20);
```

#### Any
	
```typescript
// Tipo "any" aceita qualquer valor. No entanto, o uso excessivo desse tipo pode causar problemas, indo contra o propósito do TypeScript de evitar erros.

let info:any;

info = [1,2,3];
info = 2;
info = true;
info = "Um nome";

```

#### Inferência de Tipos (type inference)
	
```typescript
// TypeScript reconhece automaticamente alguns tipo da variável com base no conteúdo atribuído a ela permitindo que não seja necessário declarar explicitamente o tipo.

let nome = "Wendel";
user = 10; // Dara erro pois essa declaracao e explicita que e uma String
```

#### Tipos primitivos
	
```typescript
// Tipos primitivos no TypeScript

// Tipo primitivo booleano
let loading: boolean;
loading = false;

// Tipo primitivo string
let email: string;
email = "teste@gmail.com";

let price = 10; // Tipo primitivo number

```

#### Matrizes
	
```typescript

// Pode ser declado de duas formas a Array com tipo[]
let numbers: number[];
numbers = [1,2,3,4,5,6];

// ou Array<tipo>
let users: Array<string>;
users = ["Jorgin","Marvin","Tikin"];

```

#### Funções
	
```typescript
// Uma função pode ter ou não um retorno, sendo void quando não há retorno
// Pode declarar explicitamente o tipo de retorno de uma função
function showMeHow(message:string) : void{
	console.log(`nao retorna nada ${message}`);
}

function showText(message:string) : string{
	const messageExtend : string = `A mensagem que voce inseriu foi ${message}`;
	return messageExtend;

}

showMeHow("sendo void");
console.log(showText("Uma frase qualquer ai"));
```

#### Union
	
```typescript
// Podemos indicar que uma variável pode aceitar mais de um tipo de dado permitindo maior flexibilidade
function printUserId(id: number | string){
	console.log(`O ID do usuario e: ${id}`)
}

printUserId("101");
```

#### Generics
	
```typescript
/** Algumas convencoes do Typescript
* S => state
* T => type
* K => key
* V => value
* E => element
*/

// O "=" define tipo padrao se nada for declarado, nao significa igual
// function useState<T extends number | string = string>() 

// Outro exemplo definindo string como padrao: 
// function useState<T extends string | number = string>()

function useState<T extends number | string = number>(){
	let state: number | string;
	
	function get(){
		return state;
	}
	
	function set(newValue : T){
		state = newValue;
	}
	
	return {get,set};
}

// Generics declara o tipo na hora de chamar a variavel
let newState = useState<string>();
newState.get();
newState.set("Wendel");
// Ao declarar o tipo como string dara erro se colocar numero e vice-versa
// newState.set(1);
console.log(newState.get());


let newStateNoDeclar = useState();
// Quando nada for declarado o tipo definido sera um number
// newStateNoDeclar.set("teste");
newStateNoDeclar.set(10);
console.log(newStateNoDeclar.get());
```

#### Type
	
```typescript
// Criando uma tipagem facilita a manutenção do código, permitindo alterações em um único lugar para atualizar em todos os locais onde o tipo é utilizado.
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;
```

#### Type Assertions
	
```typescript
// Recurso fundamental para lidar com situações em que o TypeScript não consegue inferir automaticamente o tipo de dados, por exemplo uso da acertação ao consumir uma API com seus retornos

type UserResponse = {
	ui: number,
	name: string,
	avatar: string,
}

let userResponse = {} as UserResponse;

```

#### Objetos
	
```typescript
// Criando tipagens para objetos
type Point = {
	x: number;
	y: number;
}


function printCoord(points: Point){
	console.log(`O eixo x e: ${point.x}`);
	console.log(`O eixo y e: ${point.y}`);
}

printCoord({x:101,y:200})


type UserProps = {
	name: string
	email: string;
	age: number;
	isAdmin: boolean;
}

const newUser: UserProps;

```

#### Opcional
	
```typescript 
// É possível definir propriedades que não precisam ser preenchidas ao criar um objeto. Para isso, basta adicionar um ponto de interrogação.

type UserProps = {
	name: string
	email: string;
	age: number;
	isAdmin?: boolean;
}

const newUser: UserProps;
```

#### Intersecção Tipos
	
```typescript
// Intersecção entre tipos
type User = {
	id:number;
	name: string;
}

type Char = {
	nickname: string;
	level: number;
}

type PlayerInfo = User & Char;

let info: PlayInfo = {
	id: 1,
	name: "Wendell",
	nickname: "Euphoria",
	level: 20,
}


// Outro jeito de fazer
type PlayerInfoV2 = User & {
	nickname: string;
	level: number;
};

let infoV2: PlayInfoV2 = {
	id: 1,
	name: "Wendell",
	nickname: "Euphoria",
	level: 20,
}
```

#### Interface
	
```typescript
// Interfaces podem ser utilizadas nao apenas para o objetos,
// Para garantir a consistência e a tipagem dos dados no código

interface User {
	id: number;
	name: string;
}

function registerNewUser(newUser: User){
  const {id,name} = newUser;
	return {id,name};
}

const newUser = registerNewUser({id: 1,name: "Wendy"});
console.log(newUser.id,newUser.name);
```

#### Type x Interface

##### Types
- São utilizados para definir tipos de dados que podem ser primitivos (como `number`, `string`) ou complexos (como objetos, arrays).
- **União e Interseção**: Os tipos suportam a união (`|`) e interseção (`&`), permitindo compor novos tipos a partir de tipos existentes.
- **Aliases**: São frequentemente usados como aliases para tipos complexos ou combinações de tipos.
- **Implementação**: Podem ser usados para descrever a forma de qualquer valor, incluindo tipos primitivos, objetos, funções e arrays.
	
```typescript
type TUser = {
	id:number;
	name: string;
}

type TPayment = {
	method: string;
}

type TAccount = TUser & TPayment;
```

##### Interfaces
- São usadas principalmente para descrever a forma de um objeto.
- **Extensibilidade**: As interfaces são mais facilmente estendidas, podendo ser "reabertas" e estendidas em diferentes partes do código.
- **Herança**: Suportam herança múltipla, permitindo que uma interface estenda múltiplas outras interfaces.
- **Implementação**: São mais específicas para descrever objetos, o que as torna ideais para definir contratos para classes e objetos.
	
```typescript
interface IUser {
	id:nunber;
	name: string;
}

interface IPayment {
	method: string;
}

interface IAccount extends IUser, IPayment {};
```

##### Comparação e Uso

1. **Extensibilidade**: Se você precisa estender uma estrutura de dados em diferentes partes do código, as interfaces são mais apropriadas devido à sua capacidade de serem estendidas de forma incremental.
2. **Composição de Tipos**: Se você precisa combinar diferentes tipos ou usar operações de união/interseção, os tipos (types) são mais adequados.
3. **Classes e Implementação**: As interfaces são geralmente preferidas para definir contratos para classes, pois oferecem uma maneira clara de definir quais propriedades e métodos uma classe deve implementar.

#### Tsconfig
 - O arquivo `tsconfig` para configurar as regras do projeto, como tipagem de parâmetros de funções. é possível ajustar as configurações do `tsconfig`, como desabilitar alertas de tipos implícitos. É importante definir explicitamente os tipos para evitar erros. O `tsconfig` permite configurar várias opções, como linguagem, versão do JavaScript e frameworks como React. Focar em entender a importância e funcionalidades do `tsconfig` é fundamental para configurar projetos em TypeScript.