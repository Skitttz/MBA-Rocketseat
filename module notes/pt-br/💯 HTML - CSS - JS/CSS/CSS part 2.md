### Box Sizing

- **Por padrão:** O valor padrão do box-sizing é `content-box`.

  ![[content-box.png]]

- **border-box:** O valor `border-box` inclui o padding e a borda dentro das dimensões definidas (width e height) do elemento.

  ![[border-box.png]]

### Position

As propriedades de posicionamento no CSS permitem controlar a localização de um elemento na tela. As principais propriedades são `top`, `bottom`, `left`, `right`, `inset`, e `z-index`.

- **static:** Este é o valor padrão. Os elementos seguem o fluxo normal do documento e não são afetados pelas propriedades `top`, `bottom`, `left` e `right`.

- **relative:** O elemento é posicionado em relação à sua posição original no fluxo normal. Você pode usar `top`, `bottom`, `left` e `right` para ajustar sua posição a partir dessa posição original.

- **absolute:** O elemento é removido do fluxo normal do documento e é posicionado em relação ao seu "containing block" mais próximo que não tenha posição `static`. Ele cria um novo contexto de empilhamento.

- **fixed:** O elemento é posicionado em relação ao viewport (a janela de visualização). Ele permanece fixo na tela mesmo quando o usuário rola a página.

- **sticky:** O elemento alterna entre `relative` e `fixed` com base na posição de rolagem do usuário. Ele é posicionado de forma relativa até que seu container pai atinja um determinado ponto de rolagem, momento em que ele se torna fixo.

### Variáveis CSS

As variáveis CSS permitem armazenar valores que podem ser reutilizados em todo o documento. Isso facilita a manutenção e a consistência.

- **Exemplo:**
  ```css
  :root {
      --cor-principal: blue;
  }

  .elemento {
      color: var(--cor-principal);
  }
  ```

### Pseudo-classes & Pseudo-elementos

#### Pseudo-classes

- **hover:** Aplica estilos quando o usuário passa o mouse sobre um elemento.
  ```css
  a:hover {
      color: red;
  }
  ```

- **functional:**
  - `:not()`: Seleciona elementos que não correspondem a um seletor especificado.
    ```css
    div:not(.classeA) {
        /* Propriedades aplicadas a todas as divs que não têm a classeA */
    }
    ```

  - `:has()`: Seleciona elementos que contêm um elemento especificado.
    ```css
    div:has(.classeA) {
        /* Propriedades aplicadas a todas as divs que contêm um elemento com a classeA */
    }

    div:has(div:hover) {
        /* Propriedades aplicadas a todas as divs que contêm uma div que está sendo sobrevoada */
    }
    ```

- **structural:**
  - `:root`: Seleciona o elemento raiz do documento. Tem mais peso do que a tag `html`.
    ```css
    :root {
        --cor-principal: blue;
    }
    ```

  - `:nth-child(n)`: Seleciona o n filho de um elemento pai.
    ```css
    div:nth-child(3) {
        /* Propriedades aplicadas ao terceiro filho */
    }

    div:nth-child(odd) {
        /* Propriedades aplicadas aos filhos ímpares */
    }

    div:nth-child(even) {
        /* Propriedades aplicadas aos filhos pares */
    }
    ```

#### Pseudo-elementos
- `frist-letter`: 
```css
    div::frist-letter {
	    font-size:40px;
     /* Propriedades aplicadas para a primeira letra*/
    }
    ```

- `after/before`: 
```css
    div::before {
	    content:"";
	    width:2px;
	    background-color: red;
	    display:block;
	    top:0;
	    bottom:0;
     /* Aplicando before para todas as div*/
    }
    ```