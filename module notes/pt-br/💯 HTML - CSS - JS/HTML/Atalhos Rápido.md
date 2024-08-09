
### Criar Múltiplas Tags de Divs ja com label e input
Atalho:
```
div.input-wrapper>label[for=fullname]{Nome Completo}+input#fullname[type=text placeholder="Qual nome da cada criança"]
```
Output:
```html
<div class="input-wrapper">
<label for="fullname">Nome Completo</label>
<input id="fullname" type="text" placeholder="Qual nome da cada criança">
</div>
```

### Criar Múltiplas Tags de Imagem por Ordem de 1 a 10
**Atalho:**
```plaintext
img[src="./assets/imagem-$@.png"]*10
```
**Output:**
```html
<img src="./assets/imagem-1.png">
<img src="./assets/imagem-2.png">
<img src="./assets/imagem-3.png">
<img src="./assets/imagem-4.png">
<img src="./assets/imagem-5.png">
<img src="./assets/imagem-6.png">
<img src="./assets/imagem-7.png">
<img src="./assets/imagem-8.png">
<img src="./assets/imagem-9.png">
<img src="./assets/imagem-10.png">
```

### Criar Múltiplas Tags de Parágrafos com Classe
**Atalho:**
```plaintext
p.paragrafo-$@*5
```
**Output:**
```html
<p class="paragrafo-1"></p>
<p class="paragrafo-2"></p>
<p class="paragrafo-3"></p>
<p class="paragrafo-4"></p>
<p class="paragrafo-5"></p>
```

### Criar Múltiplas Tags de Lista com Itens Numerados
**Atalho:**
```plaintext
ul>li#item-$@*10
```
**Output:**
```html
<ul>
    <li id="item-1"></li>
    <li id="item-2"></li>
    <li id="item-3"></li>
    <li id="item-4"></li>
    <li id="item-5"></li>
    <li id="item-6"></li>
    <li id="item-7"></li>
    <li id="item-8"></li>
    <li id="item-9"></li>
    <li id="item-10"></li>
</ul>
```

### Criar Múltiplas Divs com IDs Sequenciais
**Atalho:**
```plaintext
div#box-$@*6
```
**Output:**
```html
<div id="box-1"></div>
<div id="box-2"></div>
<div id="box-3"></div>
<div id="box-4"></div>
<div id="box-5"></div>
<div id="box-6"></div>
```

### Criar Múltiplas Tags de Imagem com Alt e Título
**Atalho:**
```plaintext
img[src="imagem-$@.jpg" alt="imagem $@" title="imagem $@"]*8
```
**Output:**
```html
<img src="imagem-1.jpg" alt="imagem 1" title="imagem 1">
<img src="imagem-2.jpg" alt="imagem 2" title="imagem 2">
<img src="imagem-3.jpg" alt="imagem 3" title="imagem 3">
<img src="imagem-4.jpg" alt="imagem 4" title="imagem 4">
<img src="imagem-5.jpg" alt="imagem 5" title="imagem 5">
<img src="imagem-6.jpg" alt="imagem 6" title="imagem 6">
<img src="imagem-7.jpg" alt="imagem 7" title="imagem 7">
<img src="imagem-8.jpg" alt="imagem 8" title="imagem 8">
```

### Criar Múltiplas Tags de Âncora com Texto e Href
**Atalho:**
```plaintext
a[href="https://example.com/link-$@"]{Link $@}*4
```
**Output:**
```html
<a href="https://example.com/link-1">Link 1</a>
<a href="https://example.com/link-2">Link 2</a>
<a href="https://example.com/link-3">Link 3</a>
<a href="https://example.com/link-4">Link 4</a>
```

### Criar Múltiplas Tags de Botão com IDs e Texto
**Atalho:**
```plaintext
button#btn-$@{Button $@}*5
```
**Output:**
```html
<button id="btn-1">Button 1</button>
<button id="btn-2">Button 2</button>
<button id="btn-3">Button 3</button>
<button id="btn-4">Button 4</button>
<button id="btn-5">Button 5</button>
```

### Criar Múltiplas Tags de Seção com Classe e Conteúdo
**Atalho:**
```plaintext
section.section-$@{Section $@ Content}*3
```
**Output:**
```html
<section class="section-1">Section 1 Content</section>
<section class="section-2">Section 2 Content</section>
<section class="section-3">Section 3 Content</section>
```

### Criar Múltiplas Tags de Artigo com Cabeçalhos
**Atalho:**
```plaintext
article>h2{Article $@}*4
```
**Output:**
```html
<article>
    <h2>Article 1</h2>
</article>
<article>
    <h2>Article 2</h2>
</article>
<article>
    <h2>Article 3</h2>
</article>
<article>
    <h2>Article 4</h2>
</article>
```

### Criar Múltiplas Tags de Input com IDs e Placeholders
**Atalho:**
```plaintext
input#input-$@[placeholder="Enter value $@"]*3
```
**Output:**
```html
<input id="input-1" placeholder="Enter value 1">
<input id="input-2" placeholder="Enter value 2">
<input id="input-3" placeholder="Enter value 3">
```

### Uso da Sequência Numérica em Divs com Contadores Internos
**Atalho:**
```plaintext
div{Counter $@}*5
```
**Output:**
```html
<div>Counter 1</div>
<div>Counter 2</div>
<div>Counter 3</div>
<div>Counter 4</div>
<div>Counter 5</div>
```

Esses atalhos são ferramentas poderosas do Emmet para gerar rapidamente estruturas HTML repetitivas com variações sistemáticas, economizando tempo e esforço no desenvolvimento.