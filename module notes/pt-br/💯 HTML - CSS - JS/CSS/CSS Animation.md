### Mudança de Propriedade Baseada numa Linha do Tempo

### Como Criar Animações
#### @keyframes
Define uma linha do tempo para a animação, com nome e pontos específicos de animação.
- **Sintaxe:**
  - `@keyframes nome-da-animacao { ... }`
  - Pontos na linha do tempo: `0%` a `100%`, `from` a `to`

**Exemplo:**
```css
@keyframes exemplo {
 `` from { opacity: 0; }
  to { opacity: 1; }``
}
```

### Propriedades de Animação

#### animation-name
Define o nome da linha do tempo (`@keyframes`) utilizada.
- **Exemplo:**
  ```css
  div {
    animation-name: exemplo;
  }
  ```

#### animation-duration
Define a duração da animação.
- Unidade: `s` (segundos) ou `ms` (milissegundos)
- **Exemplo:**
  ```css
  div {
    animation-duration: 2s;
  }
  ```

#### animation-delay
Define o tempo de espera antes de iniciar a animação.
- Unidade: `s` ou `ms`
- **Exemplo:**
  ```css
  div {
    animation-delay: 1s;
  }
  ```

#### animation-fill-mode
Define como os estilos aplicados pela animação são aplicados antes e depois da execução.
- Valores:
  - `backwards`: Mantém as propriedades iniciais
  - `forwards`: Mantém as propriedades finais
  - `both`: Mantém as propriedades iniciais e finais
- **Exemplo:**
  ```css
  div {
    animation-fill-mode: forwards;
  }
  ```

#### animation-direction
Define a direção da linha do tempo da animação.
- Valores:
  - `normal`: Normal
  - `reverse`: Reverso
  - `alternate`: Alternado
  - `alternate-reverse`: Alternado e reverso
- **Exemplo:**
  ```css
  div {
    animation-direction: alternate;
  }
  ```

#### animation-iteration-count
Define quantas vezes a animação será executada.
- Valores:
  - Número específico (ex.: `2`)
  - `infinite`: Infinita
- **Exemplo:**
  ```css
  div {
    animation-iteration-count: infinite;
  }
  ```

#### animation-play-state
Define se a animação está ativa ou pausada.
- Valores:
  - `running`: Ativa (padrão)
  - `paused`: Pausada
- **Exemplo:**
  ```css
  div {
    animation-play-state: paused;
  }
  ```

#### animation-timing-function
Define a curva de aceleração da animação.
- Valores:
  - `linear`
  - `ease`, `ease-in`, `ease-out`, `ease-in-out`
  - `steps()`
  - `cubic-bezier()`
- **Exemplo:**
  ```css
  div {
    animation-timing-function: ease-in-out;
  }
  ```

#### animation
Propriedade abreviada para definir todas as propriedades de animação em uma única linha.
- **Exemplo:**
  ```css
  div {
    animation: exemplo 2s ease-in-out 1s infinite alternate;
  }
  ```

### Múltiplas Animações
É possível aplicar mais de uma animação a um elemento.

**Exemplo:**
```css
div {
  animation: exemplo1 2s ease, exemplo2 1s linear;
}
```

