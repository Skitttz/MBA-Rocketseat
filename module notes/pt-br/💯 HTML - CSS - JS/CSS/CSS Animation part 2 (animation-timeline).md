## Animações com CSS: Linhas do Tempo (⚠️ Suporte limitado ao Chrome e IE)

### Propriedades de `animation-timeline`
#### scroll()
Inicia e finaliza a animação com base no deslocamento do scroll. Quanto maior o scroll, maior o tempo da animação.
- **Argumentos:**
  - Direção do scroll: `x` ou `y`
  - Bloqueio: `block` ou `inline`

**Exemplo:**
```css
div {
  animation-timeline: scroll(y);
}
/* Deixando no padrao */
div {
  animation-timeline: scroll();
}
```

#### view()
Inicia e finaliza a animação com base na visibilidade do elemento na viewport.
- **Argumentos:**
  - Deslocamento do topo (inicia ou finaliza a animação quando o elemento atinge X pixels do topo)
  - Deslocamento do fundo (inicia ou finaliza a animação quando o elemento atinge X pixels do fundo)
  - Unidade: `px`, `rem`, `percentage`

**Exemplo:**
```css
div {
  animation-timeline: view(100px);
}
```

### animation-range
Define o intervalo de animação com base na visibilidade do elemento.
- **Subpropriedades:**
  - `animation-range-start`: Define o início da animação.
  - `animation-range-end`: Define o fim da animação.

#### Valores:
- `px`, `rem`, `percentage`
- `contain`: A animação começa quando o elemento está completamente na viewport e para quando sai.
- `cover`: A animação começa assim que o elemento aparece na viewport.
- `entry`: Inicia a animação assim que o elemento entra na viewport e finaliza quando está totalmente visível.
- `exit`: Inicia a animação quando o elemento começa a sair da viewport e finaliza quando sai completamente.

**Exemplo:**
```css
div {
  animation-range: 100px 200px;
}
```

### Exemplos de Uso:

#### Contain com Offset de 100px
```css
div {
  animation-range: contain 100px;
}
```

#### Offset de 100px (Início) e Finaliza Quando Sair da Viewport
```css
div {
  animation-range: 100px;
}
```

#### Offset de 200px (Início) e 300px (Fim)
```css
div {
  animation-range: 200px 300px;
}
```

### Exemplo Completo:
**Definindo uma Animação com Linha do Tempo:**
```css
@keyframes mover {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

div {
  animation-name: mover;
  animation-duration: 2s;
  animation-timeline: view(100px);
}
```

Neste exemplo, a animação `mover` será aplicada a um elemento `div`, movendo-o horizontalmente com base na sua visibilidade na viewport e com um offset de 100px do topo. 