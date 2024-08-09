## Transition
As transições permitem suavizar as mudanças nos valores das propriedades CSS, tornando-as mais agradáveis visualmente.

### Propriedades Principais
1. `transition-property`: Especifica a propriedade que será transicionada.
2. `transition-duration`: Define a duração da transição.
3. `transition-delay`: Determina o tempo de espera antes de iniciar a transição.
4. `transition-timing-function`: Define a curva de aceleração da transição.
5. `transition`: Shorthand para configurar todas as propriedades acima.

### Detalhes das Propriedades

#### transition-property
Define qual propriedade será transicionada.
- Valores: 
  - `property-name` (ex.: `width`, `opacity`)
  - `all` (todas as propriedades)

**Exemplo:**
```css
div {
  transition-property: width;
}
```

#### transition-duration
Especifica a duração da transição.
- Unidade: `s` (segundos) ou `ms` (milissegundos)

**Exemplo:**
```css
div {
  transition-duration: 2s;
}
```

#### transition-delay
Define o tempo de espera antes de iniciar a transição.
- Unidade: `s` ou `ms`

**Exemplo:**
```css
div {
  transition-delay: 0.5s;
}
```

#### transition-timing-function
Determina a curva de aceleração da transição.
- Valores:
  - `linear`: Transição constante
  - `ease`: Transição suave
  - `ease-in`: Entrada suave
  - `ease-out`: Saída suave
  - `ease-in-out`: Entrada e saída suaves
  - `steps(number)`: Transição em etapas
  - `cubic-bezier(x1, y1, x2, y2)`: Curva de Bézier personalizada

**Exemplo:**
```css
div {
  transition-timing-function: ease-in-out;
}
```

#### transition
Propriedade abreviada para definir todas as propriedades de transição em uma única linha.

**Exemplo:**
```css
div {
  transition: width 2s ease-in-out 0.5s;
}
```

### Múltiplas Transições
É possível configurar múltiplas transições para diferentes propriedades.

**Exemplo:**
```css
div {
  transition: width 2s ease, height 1s linear;
}
```

### Preferências de Movimento Reduzido
Respeite as preferências do usuário para reduzir movimento.

**Exemplo:**
```css
@media (prefers-reduced-motion) {
  div {
    transition: none;
  }
}
```
