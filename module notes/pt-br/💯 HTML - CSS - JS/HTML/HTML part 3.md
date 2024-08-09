### Formulários HTML

#### Form

- **action**
  - Especifica para onde o formulário será enviado. Por padrão, manda o formulário para a mesma página.
  
- **method**
  - Define o método HTTP a ser usado:
    - `GET`
    - `POST`

#### Button

- **type**
  - `submit`: Padrão quando dentro de um formulário, envia o formulário.
  - `reset`: Reseta todos os campos do formulário.
  - `button`: Botão sem comportamento padrão.
  
- **autofocus**
  - Define que o botão deve receber foco automaticamente ao carregar a página.
  
- **disabled**
  - Desativa o botão.
  
- **name**
  - Nome do botão, usado para identificar no envio do formulário.
  
- **value**
  - Valor do botão, enviado junto com o formulário.

#### Input

- **value**
  - Valor inicial do campo.
  
- **autocomplete**
  - Habilita/desabilita a autocompletar para o campo.
  
- **size**
  - Tamanho (largura) do campo de entrada.

- **autofocus**
  - Foco automático ao carregar a página.

- **disabled**
  - Desativa o campo de entrada.

- **readonly**
  - Campo é somente leitura.

- **required**
  - Campo obrigatório.

- **placeholder**
  - Texto exibido quando o campo está vazio.

### Tipos de Input

- **text**
  - Entrada de texto simples.
  
- **number**
  - Entrada para números.
  - **min**: Valor mínimo.
  - **max**: Valor máximo.
  - **step**: Intervalo entre valores permitidos.
  
- **email**
  - Entrada para endereços de email.
  - **multiple**: Permite múltiplos emails.
  - **minlength**: Comprimento mínimo.
  - **maxlength**: Comprimento máximo.
  - **pattern**: Padrão regex para validação.

- **password**
  - Entrada para senhas.
  - **minlength**: Comprimento mínimo.
  - **maxlength**: Comprimento máximo.
  - **pattern**: Padrão regex para validação.
  - **inputmode="numeric"**: Habilita teclado numérico em dispositivos móveis.

- **file**
  - Entrada para upload de arquivos.
  - **form**: Especifica o formulário ao qual o input pertence.
  - **enctype = "multipart/form-data"**: Necessário para upload de arquivos.
  - **multiple**: Aceita múltiplos arquivos.
  - **accept**: Tipos de arquivos aceitos por extensão.

- **range**
  - Controle deslizante para selecionar valores numéricos.
  - **min**: Valor mínimo.
  - **max**: Valor máximo.
  - **step**: Intervalo entre valores permitidos.
  
- **color**
  - Interface para selecionar uma cor.
  - **value**: Cor inicial.
  - **list**: Lista de cores em RGB.
    - **datalist**
      - **option**
  
- **checkbox**
  - Caixa de seleção que pode ser marcada/desmarcada.
  - **value**: Valor enviado se marcado.
  - **checked**: Define se está marcado.
  - **name**: Agrupa checkboxes com o mesmo nome.
  
- **radio**
  - Botões de rádio para selecionar uma única opção.
  - **value**: Valor enviado se selecionado.
  - **checked**: Define se está selecionado.

- **hidden**
  - Campo de entrada escondido.

- **novos inputs**
  - Podem ser encontrados na [documentação](https://devdocs.io/html/element/input).
  - Verifique a compatibilidade com o [can i use](https://caniuse.com/).

#### Label

- **for**
  - Atribui um rótulo ao campo especificado.

#### Textarea

- Área para texto de múltiplas linhas.
  - **rows**: Número de linhas.
  - **cols**: Número de colunas.
  - **maxlength/minlength**: Comprimento máximo/mínimo.
  - **wrap**: Define quebra de linha.
    - **off**
  - Outros atributos comuns ao input:
    - **placeholder**
    - **disabled**
    - **required**

#### Select

- Menu de seleção.
  - **multiple**: Permite múltiplas seleções.
  - **size**: Número de opções visíveis.

- **options**
  - **label**: Rótulo da opção.
  - **value**: Valor da opção.
  - **selected**: Define se está selecionado.
  
- **optgroup**
  - Agrupa opções dentro de um `<select>`.

#### Fieldset

- Agrupamento de campos dentro de um formulário.
  - **legend**: Nome do grupo visualmente.
  - Boa prática para acessibilidade e leitores de tela.
  - **disabled**: Desativa todos os campos dentro do agrupamento.