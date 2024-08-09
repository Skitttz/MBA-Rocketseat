# CommonJS

E uma especificação de módulos em JS, ele define um formato padrão para organizar e estruturar o código em módulos, permitindo a modularizarão e reutilização de código em ambientes que suportam essa especificação. 

A ideia era criar um "Common" (comum) especificação que poderia ser adotada de forma consistente em diferentes ambientes e projetos (como no lado do servidor com Node.js), promovendo a interoperabilidade e reusabilidade do código.

Resumidamente o CommonJS entra com a intenção de criar uma abordagem comum para tratar os módulos do JavaScript.

## Principais Características do CommonJS
- Módulos: encapsulamento de código em módulos, permitindo a separação de responsabilidades e reutilização de código.
- Import: usado para incluir módulos.
- Export: usado para expor funcionalidades de um modulo de outros

# Versionamento semântico: 9 . 1 . 3		

#### 9 
- **Major** (versão principal)
	Aumenta quando são feitas alterações incompatíveis. Isso significa que, se você atualizar para uma nova versão principal, pode haver alterações que quebrarão a compatibilidade com versões anteriores
#### 1
- **Minor** (versão menor)
	Aumenta quando são adicionadas novas funcionalidades de maneira compatível com versões anteriores. As atualizações de versão menor não devem introduzir alterações que quebram a compatibilidade com o código existente
#### 3
- **Patch** (versão de Correção)
	Aumenta quando são feitas correções de bugs compatíveis com versões anteriores. Isso significa que essas correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade.