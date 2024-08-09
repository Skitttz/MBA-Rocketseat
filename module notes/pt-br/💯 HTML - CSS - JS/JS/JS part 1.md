### O que é o DOM?

DOM (Document Object Model) é a representação dos dados dos objetos que compõem a estrutura e o conteúdo de um documento web, como uma página HTML.

O DOM representa o documento com nós e objetos (estrutura de árvore) que podem ser acessados e modificados.

### Manipulando Conteúdo

- `textContent`
- `innerText`
- `innerHTML`

### Manipulando Classes

- `classList.add`
- `classList.remove`
- `classList.toggle`

### Alterando Estilos

```javascript
const button = document.querySelector("button");
button.style.backgroundColor = "red";
```

### Criando Elementos

```javascript
const newGuest = document.createElement("li");
const guestName = document.createElement("span");
const guestSurname = document.createElement("span");

newGuest.classList.add("guest");

guestName.textContent = "Carlos";

// Adiciona após o primeiro filho
newGuest.append(guestName);

// Pode adicionar múltiplos
newGuest.append(guestName, guestSurname);

// Adiciona antes do primeiro filho
newGuest.prepend(guestSurname);

// Mais simples que o append e aceita apenas um
newGuest.appendChild(guestName);
```

### Manipulando Atributos

```javascript
const input = document.querySelector("input");

// Atualizar um atributo
input.setAttribute("disabled", true);
input.setAttribute("type", "file");

// Remover Atributo
input.removeAttribute("id");
```

### Eventos

```javascript
window.addEventListener("load", () => {
  console.log("Página foi carregada");
});

document.addEventListener("click", (event) => {
  event.preventDefault();

  // Retornar elemento clicado
  console.log(event.target);

  // Retornar textContent do elemento clicado
  console.log(event.target.textContent);
});
```

### Evento em Elemento Específico

```javascript
const ul = document.querySelector("ul");

ul.addEventListener("scroll", () => {
  if (ul.scrollTop > 300) {
    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicou!");
});
```

### Eventos de Formulário

```javascript
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit no formulário");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit no formulário");
});

// A diferença entre onsubmit e addEventListener é que onsubmit reescreve o evento anterior,
// enquanto addEventListener permite adicionar múltiplos eventos.
```

### Eventos em Input

```javascript
const input = document.querySelector("input");

// keydown - quando a tecla é pressionada (captura tudo, incluindo CTRL, SHIFT etc.)
input.addEventListener("keydown", (event) => {
  console.log(event);
});

// keypress - quando tecla do tipo caracteres é pressionada (ignora CTRL, SHIFT etc.)
input.addEventListener("keypress", (event) => {
  console.log(event);
});

input.onchange = () => {
  console.log("INPUT mudou!");
};

input.onchange = () => {
  inputChange();
};

function inputChange() {
  console.log("Mudou!");
}
```

### Compreendendo Expressões Regulares

Expressões regulares são usadas para identificar se uma ocorrência acontece ou não em uma string, sendo criadas para validação e verificação de padrões.

### Exemplos de Regex 

#### 1. Validação de Email

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "exemplo@dominio.com";

if (emailRegex.test(email)) {
  console.log("Email válido");
} else {
  console.log("Email inválido");
}
```

**Explicação**:
- `^`: Início da string.
- `[^\s@]+`: Um ou mais caracteres que não sejam espaço ou `@`.
- `@`: Um caractere `@`.
- `[^\s@]+`: Um ou mais caracteres que não sejam espaço ou `@`.
- `\.`: Um ponto literal.
- `[^\s@]+`: Um ou mais caracteres que não sejam espaço ou `@`.
- `$`: Fim da string.

#### 2. Validação de Número de Telefone (Formato: (XX) XXXX-XXXX)

```javascript
const phoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
const phone = "(12) 3456-7890";

if (phoneRegex.test(phone)) {
  console.log("Número de telefone válido");
} else {
  console.log("Número de telefone inválido");
}
```

**Explicação**:
- `^`: Início da string.
- `\(`: Um parêntese esquerdo literal.
- `\d{2}`: Dois dígitos.
- `\)`: Um parêntese direito literal.
- ` `: Um espaço.
- `\d{4}`: Quatro dígitos.
- `-`: Um hífen.
- `\d{4}`: Quatro dígitos.
- `$`: Fim da string.

#### 3. Validação de CEP Brasileiro (Formato: XXXXX-XXX)

```javascript
const cepRegex = /^\d{5}-\d{3}$/;
const cep = "12345-678";

if (cepRegex.test(cep)) {
  console.log("CEP válido");
} else {
  console.log("CEP inválido");
}
```

**Explicação**:
- `^`: Início da string.
- `\d{5}`: Cinco dígitos.
- `-`: Um hífen.
- `\d{3}`: Três dígitos.
- `$`: Fim da string.

#### 4. Validação de Data (Formato: DD/MM/YYYY)

```javascript
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const date = "31/12/2024";

if (dateRegex.test(date)) {
  console.log("Data válida");
} else {
  console.log("Data inválida");
}
```

**Explicação**:
- `^`: Início da string.
- `(0[1-9]|[12][0-9]|3[01])`: Dias de 01 a 31.
- `\/`: Um caractere `/`.
- `(0[1-9]|1[0-2])`: Meses de 01 a 12.
- `\/`: Um caractere `/`.
- `\d{4}`: Quatro dígitos (ano).
- `$`: Fim da string.

#### 5. Validação de Senha Forte

```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const password = "Aa1@1234";

if (passwordRegex.test(password)) {
  console.log("Senha forte");
} else {
  console.log("Senha fraca");
}
```

**Explicação**:
- `^`: Início da string.
- `(?=.*[a-z])`: Pelo menos uma letra minúscula.
- `(?=.*[A-Z])`: Pelo menos uma letra maiúscula.
- `(?=.*\d)`: Pelo menos um dígito.
- `(?=.*[@$!%*?&])`: Pelo menos um caractere especial.
- `[A-Za-z\d@$!%*?&]{8,}`: Pelo menos 8 caracteres de qualquer um desses tipos.
- `$`: Fim da string.



### Utilizando Regex

```javascript
const input = document.querySelector("input");

input.addEventListener("input", () => {
  const regex = /\D+/g;
  const value = input.value;
  console.log(value.match(regex));
  const isValid = regex.test(value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = /\D+/g;
  const value = input.value.replace(regex, "");
  console.log(value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = /\D+/g;
  const value = input.value;
  if (!regex.test(value)) {
    alert("Padrão não encontrado");
  }
});
```
