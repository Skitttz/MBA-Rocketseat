### Flex

#### Container
- Define o contêiner flexível.
- Contém os elementos filhos que serão dispostos pelo modelo Flexbox.

#### Children
- Elementos filhos do contêiner flexível.
- Podem ser flexíveis ou fixos.

---

### Conceitos

#### Container
- Elemento pai que utiliza display flex.

#### Item
- Elementos filhos dentro de um contêiner flex.

---

### Direção (container)

#### Flex Direction
- Define a direção dos itens dentro do contêiner flex.
  - **row**: Linha horizontal (padrão).
  - **column**: Coluna vertical.
  - **row-reverse**: Linha horizontal invertida.
  - **column-reverse**: Coluna vertical invertida.

---

### Alinhamento & Espaçamento (container)

#### Justify-Content
- Alinhamento dentro do contêiner e distribuição dos elementos no eixo principal.
  - **flex-start**: Alinhamento no início.
  - **flex-end**: Alinhamento no fim.
  - **space-evenly**: Espaçamento igual entre todos os elementos.
  - **space-around**: Espaçamento igual ao redor dos elementos.
  - **space-between**: Espaçamento igual entre os elementos.

#### Align-Items
- Alinhamento dos itens no eixo cruzado.
  - **stretch**: Itens esticam para preencher o contêiner.
  - **flex-start**: Alinhamento no início.
  - **flex-end**: Alinhamento no fim.
  - **center**: Alinhamento ao centro.
  - **baseline**: Alinhamento pela linha base.

#### Gap
- Espaço entre os elementos.
  - Pode ser relativo, fixo ou flexível.
  - row gap
  - column gap

#### Margin
- Define o espaçamento externo dos elementos.
  - **auto**: Distribuição automática de margem.

---

### Multi-Line (container)

#### Flex-Wrap
- Define o comportamento dos itens quando não cabem em uma linha.
  - **wrap-reverse**: Quebra de linha invertida.
  - **wrap**: Quebra de linha padrão.

#### Align-Content
- Funciona apenas quando o flex-wrap está aplicado.
  - **flex-start**: Alinhamento no início.
  - **flex-end**: Alinhamento no fim.
  - **center**: Alinhamento ao centro.
  - **space-around**: Espaçamento igual ao redor dos elementos.
  - **space-between**: Espaçamento igual entre os elementos.
  - **space-evenly**: Espaçamento igual entre todos os elementos.

---

### Dimensionamento (filhos)

#### Flex-Basis
- Tamanho inicial dos itens no eixo principal.
  - Padrão: auto.
  - Pode ser fixo (px/%) ou relativo.

#### Flex-Grow
- Crescimento automático dos itens.
  - Distribui o espaço disponível proporcionalmente.

#### Flex-Shrink
- Encolhimento automático dos itens.
  - Por padrão, é 1 (para evitar transbordamento).

#### Flex
- Shorthand para definir flex-grow, flex-shrink e flex-basis.
  - **initial**: 0 1 auto.
  - **auto**: 1 1 auto.
  - **none**: 0 0 auto.
  - **Um valor**: flex: 1 (grow 1, shrink 0) | flex: 120px (basis 120px).
  - **Dois valores**: Primeiro valor é sempre grow | Dois valores numéricos: shrink | Dois valores com unidade de medida: basis.
  - **Três valores**: Ordem importa: grow, shrink, basis.

---

### Ordenação

#### Order
- Define a ordem visual dos itens.
  - Aceita valores numéricos negativos ou positivos.
  - Afeta apenas a apresentação visual, não a estrutura.
  - !Importante para acessibilidade.