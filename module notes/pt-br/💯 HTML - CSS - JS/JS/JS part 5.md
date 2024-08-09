###### O que e o `"use strict"`?

 É uma diretiva do JavaScript que permite que você coloque seu código em um modo "estrito". Esse modo tem como objetivo ajudar a escrever um código mais robusto, evitando algumas ações propensas a erros e ajudando a encontrar problemas mais rapidamente.

##### 1. **Variáveis não declaradas**:
   - No modo estrito, você deve declarar todas as variáveis com `var`, `let` ou `const` antes de usá-las. Caso contrário, um erro será lançado.

   ```js
   // Sem 'use strict'
   x = 10; // Isso funciona, mas não é uma boa prática

   // Com 'use strict'
   "use strict";
   y = 10; // Isso lançará um erro: y is not defined
   ```

##### 2. **Propriedades de objetos não configuráveis**:
   - No modo estrito, você não pode adicionar, excluir ou modificar propriedades em objetos que não são configuráveis.

   ```js
   // Sem 'use strict'
   var obj = {};
   Object.defineProperty(obj, 'prop', { value: 42, writable: false });
   obj.prop = 77; // Isso falha silenciosamente

   // Com 'use strict'
   "use strict";
   var obj = {};
   Object.defineProperty(obj, 'prop', { value: 42, writable: false });
   obj.prop = 77; // Isso lançará um erro: Cannot assign to read only property 'prop'
   ```

##### 3. **Parâmetros duplicados**:
   - No modo estrito, funções com parâmetros duplicados não são permitidas.

   ```js
   // Sem 'use strict'
   function sum(a, a, c) {
     return a + a + c; // Isso funciona, mas não é uma boa prática
   }

   // Com 'use strict'
   "use strict";
   function sum(a, a, c) {
     // Isso lançará um erro: Duplicate parameter name not allowed in this context
     return a + a + c;
   }
   ```

##### 4. **Uso do `this` em funções**:
   - No modo estrito, `this` em funções chamadas no contexto global retorna `undefined` em vez de `window` ou `global`.

   ```javascript
   // Sem 'use strict'
   function f() {
     return this; // Retorna o objeto global (window no navegador)
   }

   // Com 'use strict'
   "use strict";
   function f() {
     return this; // Retorna undefined
   }
   ```

##### 5. **Palavras reservadas**:
   - O modo estrito reserva palavras futuras do JavaScript para evitar conflitos.

   ```javascript
   // Sem 'use strict'
   var public = 1; // Funciona, mas pode causar conflitos futuros

   // Com 'use strict'
   "use strict";
   var public = 1; // Isso lançará um erro: Unexpected strict mode reserved word
   ```

Para habilitar o modo estrito em um arquivo inteiro

```javascript
"use strict"; // Modo estrito em todo o script

function myFunction() {
  // Código em modo estrito aqui
}
```

Ou apenas dentro de uma função:

```javascript
function myFunction() {
  "use strict"; // Modo estrito apenas nesta função
  // Código em modo estrito aqui
}
```
