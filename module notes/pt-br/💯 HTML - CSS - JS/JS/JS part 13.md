# Compiladores
### Transpiração 
A transpiração também e um termo utilizado para se referir a compilação para versões anteriores
#### Parser
- Mapeia todos os elementos do código js
#### Transformer 
- Manipula os elementos js para gerar o código compatível
#### Generator 
- Gera o código Javascript

![[transpilacao.png]]


### Transpilador Babel

- Como qualquer transpilador, o Babel permite aos desenvolvedores escrever código em sintaxe JavaScript moderna (ES6/ES7 e além) e transpilar esse código para uma versão mais antiga do JavaScript (ES5) que é suportada por navegadores mais antigos. 

#### Benefícios do Uso

1. **Compatibilidade**: Garante que o código moderno funcione em navegadores mais antigos.
2. **Produtividade**: Permite aos desenvolvedores utilizar as mais recentes funcionalidades do JavaScript sem se preocupar com a compatibilidade.
3. **Manutenção**: Facilita a adoção de padrões modernos de código, tornando-o mais fácil de manter e evoluir.

#### Instalando e Configurando o Babel
Antes de tudo crie um arquivo principal chamado `main.js` ou se preferir outro lembre de trocar o nome no script do `package.json` do script build.

1.  Instalar o babel `npm install --save-dev @babel/core @babel/cli @babel/preset-env` e criar seu arquivo config com o target
	
- **babel.config.json**
```js

const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]

module.exports = { presets }
```

2.  Criar Script build no package.json
	
- **package.json**
```js
"scripts": {
	"build": "babel main.js --watch --out-dir ./dist"	
},
```

3. Iniciar o projeto pelo comando `npm run build` irá gerar uma pasta dist contendo a versão compilada do projeto. Ao salvar uma modificação no projeto, um novo build será gerado automaticamente devido à flag `--watch`, que monitora continuamente as alterações.



# Bundlers (Empacotador)

Agrupa (empacota) diversos arquivos e suas dependências em um ou mais pacotes com o objetivo de otimizar o carregamento de paginas web 

- O bundler agrupa (empacota) os arquivos e suas dependências em um único arquivo.

```js
<script type="module" src="fetchProduct.js"></script>
<script type="module" src="addProduct.js"></script>
<script type="module" src="updateProduct.js"></script>
<script type="module" src="removeProduct.js"></script>
```
	
	
```js
<script type="module" src="bundle.js"></script>
```

### Funcionamento
 No geral, a operação de um empacotamento e dividido em duas etapas:
 - Geração do Gráfico de Dependência
 - Empacotamento 
#### Mapeando um gráfico de dependência 
1.  A primeira coisa que um empacotador de modulo faz e gerar um mapa de relacionamento de todos os arquivos servidos. Este processo e denominado **Resolução de Dependência**
2.  O empacotador requer um arquivo de entrada (geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependências.
3. Depois disso, ele percorre as dependências para determinar as dependências dessas dependências

![[dependecias.png]]
#### Agrupamento 

Depois de receber entradas e passar por suas dependências durante a fase de resolução de dependências, um bundler entrega **ativos estáticos** que o navegador pode processar com êxito

Este estagio de saída e denominado **Packing**. Durante esse processo, o empacotador aproveitara a resolução de dependências para integrar nossos vários arquivos de código e retornar um único pacote para o navegador carregar.

### Instalando e Configurando Webpack

1. `npm install webpack webpack-cli --save-dev`  
	 `npm install style-loader css-loader --save-dev`
		`npm install @babel/core @babel/preset-env babel-loader --save-dev
			`npm install webpackl-dev-serve --save-dev`
- **webpack.config.js**
```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname,"src","js","index.js"),
	output: {
		filename: "main.js",
		path: path.resolve(__dirname,"dist"),
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist", "index.html"),
		},
		port: 3000,	
		open: true,
	},
	plugins: [new HTMLWebpackPlugin()],
	module: {
		rules: [
			{   
				test: /\.css$/i,
				use: ["style-loader","css-loader"],
				exclude: "/node_modules",
			},
		    {
			    test: /\.js$/i,
			    exclude: /node_modules/,
			    use: {
				    loader: 'babel-loader',
					options: {
				        presets: ['@babel/preset-env'],
				        plugins: ['@babel/plugin-transform-runtime'],
					},
				},
		    },
		],
	},
}
```

2.  Criar Script build no package.json
	
- **package.json**
```js
"scripts": {
	"build": "webpack ./src/js/index.js",
	"dev": "webpack serve"
},
```
