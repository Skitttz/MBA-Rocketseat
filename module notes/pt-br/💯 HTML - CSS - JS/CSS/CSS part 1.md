### Folha de Estilo em Cascata (CSS)

CSS (Cascading Style Sheets) é uma linguagem utilizada para descrever a apresentação de documentos HTML. O termo "cascata" refere-se à forma como as regras de estilo são aplicadas, com base na ordem e na especificidade dos seletores.

### Estilos para HTML

CSS permite aplicar estilos aos elementos HTML, controlando aparência e layout. Isso inclui cores, fontes, espaçamentos, alinhamentos, tamanhos, e muito mais.

### Propriedades e Valores

As propriedades CSS são atributos que controlam aspectos específicos de um elemento, como `color`, `font-size`, `margin`, entre outros. Cada propriedade é associada a um valor que define o estilo a ser aplicado.

```css
elemento {
    propriedade: valor;
}
```

### Seletores

Seletores são usados para especificar quais elementos HTML devem ser estilizados.

- **id:** Seleciona um elemento com um id específico.
  ```css
  #meuId {
      color: red;
  }
  ```

- **class:** Seleciona todos os elementos com uma classe específica.
  ```css
  .minhaClasse {
      color: blue;
  }
  ```

- **type | element | tag:** Seleciona todos os elementos de um determinado tipo.
  ```css
  p {
      font-size: 16px;
  }
  ```

- **atributo:** Seleciona elementos com um atributo específico.
  ```css
  input[type="text"] {
      border: 1px solid #000;
  }
  ```

- **universal:** Seleciona todos os elementos.
  ```css
  * {
      margin: 0;
      padding: 0;
  }
  ```

### Combinators

Combinators são usados para definir a relação entre os seletores.

- **Descendant (Descendente):** Seleciona elementos que são descendentes de um elemento específico.
  ```css
  article p {
      color: gray;
  }
  ```

- **List (Lista):** Aplica o estilo a múltiplos seletores.
  ```css
  span, mark {
      background-color: yellow;
  }
  ```

- **Next sibling (Irmão seguinte):** Seleciona o elemento que é imediatamente seguido por outro elemento específico.
  ```css
  h2 + p {
      margin-top: 0;
  }
  p + p {
      margin-top: 10px;
  }
  ```

- **Child (Filho):** Seleciona elementos que são filhos diretos de um elemento específico.
  ```css
  aside > ul {
      list-style-type: none;
  }
  ```

### Box Model

O modelo de caixa (Box Model) é um conceito fundamental no CSS, que trata cada elemento como uma caixa retangular.

- **Todos os elementos são caixas:** Cada elemento HTML é representado como uma caixa retangular.
- **Propriedades das caixas:** Incluem conteúdo, largura, altura, borda, preenchimento (padding) e margem (margin).

### Display

A propriedade `display` define como um elemento é exibido na página.

- **Block:** Elementos de bloco ocupam a largura total disponível e começam em uma nova linha.
  ```css
  div {
      display: block;
  }
  ```

- **Inline:** Elementos inline ocupam apenas a largura necessária e não começam em uma nova linha.
  ```css
  span {
      display: inline;
  }
  ```

- **Flex:** Usado para criar layouts flexíveis e responsivos.
  ```css
  .container {
      display: flex;
  }
  ```

- **Grid:** Usado para criar layouts de grade.
  ```css
  .container {
      display: grid;
  }
  ```

### Border

A propriedade `border` define a borda ao redor de um elemento.

- **dotted:** Borda pontilhada.
  ```css
  .borda {
      border: 1px dotted black;
  }
  ```

- **solid:** Borda sólida.
  ```css
  .borda {
      border: 1px solid black;
  }
  ```

- **double:** Borda dupla.
  ```css
  .borda {
      border: 3px double black;
  }
  ```

- **dashed:** Borda tracejada.
  ```css
  .borda {
      border: 1px dashed black;
  }
  ```

### Margin

A propriedade `margin` define o espaçamento externo ao redor de um elemento. Os valores são aplicados no sentido horário, começando pelo topo.

- **Exemplo:**
  ```css
  .margem {
      margin: 12px 10px 8px 6px; /* topo, direita, baixo, esquerda */
  }
  ```

### Padding

A propriedade `padding` define o espaçamento interno dentro de um elemento. Os valores são aplicados no sentido horário, começando pelo topo.

- **Exemplo:**
  ```css
  .padding {
      padding: 12px 10px 8px 6px; /* topo, direita, baixo, esquerda */
  }
  ```