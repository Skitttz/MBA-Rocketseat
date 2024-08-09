### Atributos Globais

Atributos globais são atributos que podem ser aplicados a qualquer elemento HTML, independentemente de seu tipo. Embora não tenham efeito em alguns elementos, eles são amplamente usados para adicionar funcionalidades aos elementos HTML.

- **data-\***: Forma uma classe de atributos, conhecidos como dados personalizados, que permitem a troca de informações específicas entre o HTML e o DOM, podendo ser em um script. Os dados personalizados estão disponíveis através da interface `HTMLElement` em que o atributo está definido. A propriedade `HTMLElement.dataset`:
  ```html
  <div data-user="Mario" data-age="24"></div>
  <script>
      let div = document.querySelector('div');
      console.log(div.dataset.user); // Mario
      console.log(div.dataset.age); // 24
  </script>
  ```

- **accesskey**: Fornece uma dica para gerar um atalho de teclado para o elemento atual. Este atributo consiste em uma lista de caracteres separados por espaços. O navegador deve usar o primeiro que existe no layout do teclado do computador.
  ```html
  <button accesskey="s">Salvar</button>
  ```

- **contenteditable**: Indica se o elemento deve ser editável pelo usuário. Pode ter os seguintes valores:
  - `true` ou uma string vazia: Indica que o elemento é editável.
  - `false`: Indica que o elemento não é editável.
  ```html
  <div contenteditable="true">Este texto pode ser editado pelo usuário.</div>
  ```

- **contextmenu**: Define o `id` de um elemento `<menu>` para usar como o menu contextual para este elemento.
  ```html
  <div contextmenu="menuID">Clique com o botão direito aqui.</div>
  <menu type="context" id="menuID">
      <menuitem label="Opção 1"></menuitem>
      <menuitem label="Opção 2"></menuitem>
  </menu>
  ```

- **hidden**: Um atributo booleano que indica que o elemento não é mais relevante. O navegador não renderizará esses elementos. Este atributo não deve ser usado para ocultar conteúdo que possa ser legível.
  ```html
  <p hidden>Este parágrafo está oculto.</p>
  ```

- **title**: Contém um texto representativo sobre a informação relacionada ao elemento ao qual este atributo pertence. Tal informação pode ser apresentada através de uma dica (tooltip).
  ```html
  <button title="Clique para salvar">Salvar</button>
  ```

- **translate**: Especifica se o atributo de um elemento e os valores dos seus nós descendentes (filhos) `Text` serão traduzidos quando a página for localizada. Pode ter os seguintes valores:
  - `yes` ou uma string vazia: Indica que o elemento será traduzido.
  - `no`: Indica que o elemento não será traduzido.
  ```html
  <p translate="no">Este texto não será traduzido.</p>
  ```