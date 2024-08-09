### Transform
`transform:`
- Movimentação - Rotação - Tamanho
- **translate()** - Desloca um elemento de sua posição original.
```css
transform: translate(50px, 100px);
```
- **rotate()** - Rotaciona um elemento em torno de um ponto fixo.
```css
transform: rotate(45deg);
```
- **scale()** - Redimensiona um elemento, aumentando ou diminuindo suas proporções.
```css
transform: scale(1.5);
```

### Math
`math:`
- **Basic Arithmetic**
  - `calc` - Realiza cálculos matemáticos com diferentes unidades.
```css
width: calc(100% - 50px);
```
- **Comparison**
  - **min()** - Retorna o menor valor dentre os valores fornecidos.
```css
width: min(50vw, 300px);
```
  - **max()** - Retorna o maior valor dentre os valores fornecidos.
```css
width: max(50vw, 300px);
```
  - **clamp()** - Define um valor dentro de um intervalo mínimo e máximo.
```css
font-size: clamp(1rem, 4vw, 4rem);
```
  - Exemplo: `font-size: clamp(1rem, 4vw, 4rem)` - O texto terá um tamanho mínimo de 1rem, crescerá proporcionalmente até um limite de 4vw e não ultrapassará 4rem.

### Filter
`filter:`
- **blur()** - Aplica um desfoque gaussiano.
  ```css
filter: blur(5px);
  ```
- **brightness(x)** - Ajusta o brilho da imagem.
  ```css
filter: brightness(0.5);
  ```
- **contrast(x)** - Ajusta o contraste da imagem.
  ```css
filter: contrast(200%);
  ```
- **drop-shadow(x,y, valorEspairecer)** - Aplica uma sombra de descaimento à imagem.
  ```css
filter: drop-shadow(10px 10px 5px black);
  ```
- **opacity(x)** - Define a opacidade da imagem.
  ```css
filter: opacity(0.5);
  ```
- **invert()** - Inverte as cores da imagem.
  ```css
filter: invert(100%);
  ```
- **hue-rotate()** - Ajusta a tonalidade da imagem.
  ```css
filter: hue-rotate(90deg);
  ```
- **saturate()** - Ajusta a saturação da imagem.
  ```css
filter: saturate(200%);
  ```

### Unset
- A palavra-chave CSS `unset` redefine uma propriedade para seu valor herdado se a propriedade herdar naturalmente de seu pai e para o seu valor inicial se não.
  ```css
  color: unset;
  ```

### Color
`color:`
- **rgb**
  ```css
color: rgb(255, 0, 0);
  ```
- **hsl**
  ```css
  color: hsl(120, 100%, 50%);
  ```
- **color-mix()** - Mistura duas cores.
  ```css
  color: color-mix(in hsl, hsl(10 100% 50%), hsl(60 100%));
  ```

### Gradient
`background:`
- **linear-gradient()**
  ```css
background: linear-gradient(0deg, red, blue);
  ```
- **radial-gradient()**
  ```css
  background: radial-gradient(circle, red 50%, blue);
  ```

### Shape
`clip-path:`
- **circle()**
  ```css
clip-path: circle(50%);
  ```
- **polygon()**
  ```css
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  ```
- Entender melhor os path do shape com [Bennett Feely](https://bennettfeely.com/clippy/).

### References
- **var()** - Usa uma variável CSS.
  ```css
color: var(--teste-color);
  ```
- **url()** - Define um URL como valor.
  ```css
background: url(www.image.com.br/teste.png);
  ```
- **attr()** - Retorna o valor de um atributo.
  ```css
content: attr(data-content);
  ```

### Other
- Para outros CSS functions, você pode visitar o [dev docs](https://devdocs.io/css/css_functions).