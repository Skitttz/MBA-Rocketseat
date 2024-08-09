
#### Tabela Font Weight

| Value | Common weight name        |
| ----- | ------------------------- |
| 100   | Thin (Hairline)           |
| 200   | Extra Light (Ultra Light) |
| 300   | Light                     |
| 400   | Normal                    |
| 500   | Medium                    |
| 600   | Semi Bold (Demi Bold)     |
| 700   | Bold                      |
| 800   | Extra Bold (Ultra Bold)   |
| 900   | Black (Heavy)             |

#### Recorte de fundo ao texto e suaviza a renderização das fontes

- Recorte de fundo para o texto em navegadores WebKit (Chrome, Safari)
```css
-webkit-background-clip: text;
```

- Recorte de fundo para o texto em navegadores que suportam a propriedade background-clip 
```css
background-clip: text;
```

- Suavização de fonte em navegadores WebKit (Chrome, Safari)
```css
-webkit-font-something: antialiased;
```

- Suavização de fonte em navegadores Firefox no sistema operacional OSX
```css
-moz-osx-font-something: grayscale;
```


