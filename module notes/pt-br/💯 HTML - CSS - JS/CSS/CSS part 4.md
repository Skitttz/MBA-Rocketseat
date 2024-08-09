### Grid Layout

![Grid Layout](grid-image.png)

O sistema de grid é composto por dois principais grupos:

1. **Container (pai)**
2. **Itens (filhos)**

### Container (pai)

O container é o elemento que define um grid e controla como os itens dentro dele são organizados. Abaixo estão as principais propriedades do container, juntamente com exemplos:

- **Display**
  - `display: grid`: Define o elemento como um grid container.
    ```css
    .container {
        display: grid;
    }
    ```

- **Grid Template**
  - `grid-template-columns`: Define as colunas do grid.
    ```css
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    ```
  - `grid-template-rows`: Define as linhas do grid.
    ```css
    .container {
        display: grid;
        grid-template-rows: 100px 200px;
    }
    ```
  - `grid-template-areas`: Define as áreas do grid, permitindo a nomeação de seções específicas do layout.
    ```css
    .container {
        display: grid;
        grid-template-areas: 
            "header header"
            "sidebar main"
            "footer footer";
    }
    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .main { grid-area: main; }
    .footer { grid-area: footer; }
    ```

- **Gap**
  - `gap`: Define o espaço entre as linhas e colunas.
    ```css
    .container {
        display: grid;
        gap: 10px;
    }
    ```
  - `row-gap`: Define o espaço entre as linhas.
    ```css
    .container {
        display: grid;
        row-gap: 15px;
    }
    ```
  - `column-gap`: Define o espaço entre as colunas.
    ```css
    .container {
        display: grid;
        column-gap: 20px;
    }
    ```

- **Alinhamentos** (**eixo y:** align-content & **eixo x:** justify-content)
  - `align-content`: Alinha o conteúdo do grid verticalmente.
    ```css
    .container {
        display: grid;
        align-content: center;
    }
    ```
  - `justify-content`: Alinha o conteúdo do grid horizontalmente.
    ```css
    .container {
        display: grid;
        justify-content: space-between;
    }
    ```
  - `place-content`: Combina `align-content` e `justify-content`.
    ```css
    .container {
        display: grid;
        place-content: center space-around;
    }
    ```

  - `align-items`: Alinha os itens do grid verticalmente dentro de suas células.
    ```css
    .container {
        display: grid;
        align-items: start;
    }
    ```
  - `justify-items`: Alinha os itens do grid horizontalmente dentro de suas células.
    ```css
    .container {
        display: grid;
        justify-items: center;
    }
    ```
  - `place-items`: Combina `align-items` e `justify-items`.
    ```css
    .container {
        display: grid;
        place-items: center stretch;
    }
    ```

### Itens (filhos)

Os itens dentro do grid container podem ser controlados individualmente para ajustar seu posicionamento e alinhamento. Abaixo estão as principais propriedades dos itens, juntamente com exemplos:

- **Grid Column**
  - `grid-column-start`: Define o início da coluna onde o item será colocado.
    ```css
    .item {
        grid-column-start: 2;
    }
    ```
  - `grid-column-end`: Define o final da coluna onde o item será colocado.
    ```css
    .item {
        grid-column-end: 4;
    }
    ```

- **Grid Row**
  - `grid-row-start`: Define o início da linha onde o item será colocado.
    ```css
    .item {
        grid-row-start: 1;
    }
    ```
  - `grid-row-end`: Define o final da linha onde o item será colocado.
    ```css
    .item {
        grid-row-end: 3;
    }
    ```

- **Alinhamento**
  - `align-self`: Alinha individualmente um item do grid verticalmente dentro de sua célula.
    ```css
    .item {
        align-self: end;
    }
    ```
  - `justify-self`: Alinha individualmente um item do grid horizontalmente dentro de sua célula.
    ```css
    .item {
        justify-self: center;
    }
    ```
  - `place-self`: Combina `align-self` e `justify-self`.
    ```css
    .item {
        place-self: start stretch;
    }
    ```

Com essas propriedades, é possível criar layouts de grid complexos e flexíveis, ajustando tanto o container quanto os itens conforme necessário para obter o design desejado.