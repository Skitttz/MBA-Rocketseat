### Condicional
- Telas
  - Desktop
  - Mobile
  - Largura / Altura
  - Landscape / Portrait

### Meta name="viewport"
- Criado pela Apple para iPhone
- Adapta ao tamanho da tela
  - Sem ela:
    - w = 980px
    - Zoom out pelo usuário
- content
  - width
    - largura da página
    - device-width: largura do dispositivo
  - initial-scale
    - numérico: multiplica pela largura
    - Escala inicial

### Syntax
- in link tags
- on @import
- @media screen and (min-width:576px)
  - optional: screen, print
```css
@media screen min-width:576px {
  body {
    background-color: lightblue;
  }
}
```
  
  - breakpoints
    - pixel
    - rem
    - named
  
  - rules
    - min-width / max-width
    - prefers-color-scheme: dark
    - orientation: landscape / portrait
  
  - and
    - define limites
    - Exemplo: (min-width:576px) and (max-width:800px)```
```
@media screen and (min-width:576px) {
  body {
    background-color: lightblue;
  }
}
```
### Range
  - range
    - sinais de ">" ou "<"
    - Exemplo: width > 600
    - Exemplo: 600px > width > 800px
  - not
    - inverter a lógica
    - Exemplo: not screen
    -    
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- [W3 Media Queries](https://www.w3.org/TR/mediaqueries-5/)

### Dicas
- Mobile First / Desktop First
- Unidade de Medida Relativa **(font-size: 62.5%)**
- Arquivos Separados
  - Afeta o carregamento da página
  - Bundler (resolve problema e faz apenas uma chamada, tornando a página mais leve)
- Link Útil: [Responsive App](https://responsively.app/)