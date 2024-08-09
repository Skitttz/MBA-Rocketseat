### Propriedades Auto do Grid

As propriedades "auto" no CSS Grid Layout são usadas para controlar como os elementos são automaticamente colocados no grid quando não são explicitamente posicionados. 
#### **grid-auto-flow**
A propriedade `grid-auto-flow` controla como os itens são automaticamente colocados no grid. Pode ter os seguintes valores:

- **row** (padrão): Coloca os itens em linhas consecutivas. Quando uma linha está cheia, os itens continuam na próxima linha.
    ```css
    .container {
        display: grid;
        grid-auto-flow: row;
    }
    ```
- **column**: Coloca os itens em colunas consecutivas. Quando uma coluna está cheia, os itens continuam na próxima coluna.
    ```css
    .container {
        display: grid;
        grid-auto-flow: column;
    }
    ```
- **dense**: Preenche automaticamente os espaços vazios no grid, tentando usar o espaço de forma mais eficiente.
    ```css
    .container {
        display: grid;
        grid-auto-flow: dense;
    }
    ```
- **row dense** ou **column dense**: Combina a direção de colocação dos itens (linhas ou colunas) com a tentativa de preencher espaços vazios.
    ```css
    .container {
        display: grid;
        grid-auto-flow: row dense;
    }
    ```

#### **grid-auto-rows**
A propriedade `grid-auto-rows` define a altura das linhas que são criadas automaticamente para acomodar os itens que ultrapassam o número de linhas definidas pelo `grid-template-rows`.

- Define a altura das linhas automáticas.
    ```css
    .container {
        display: grid;
        grid-auto-rows: 100px;
    }
    ```
- Pode utilizar unidades relativas e absolutas.
    ```css
    .container {
        display: grid;
        grid-auto-rows: minmax(100px, auto);
    }
    ```

#### **grid-auto-columns**
A propriedade `grid-auto-columns` define a largura das colunas que são criadas automaticamente para acomodar os itens que ultrapassam o número de colunas definidas pelo `grid-template-columns`.

- Define a largura das colunas automáticas.
    ```css
    .container {
        display: grid;
        grid-auto-columns: 200px;
    }
    ```
- Pode utilizar unidades relativas e absolutas.
    ```css
    .container {
        display: grid;
        grid-auto-columns: minmax(100px, auto);
    }
    ```

Estas propriedades são essenciais para criar layouts dinâmicos e responsivos.