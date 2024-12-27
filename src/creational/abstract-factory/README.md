## Padrão Abstract Factory

### O que é?
O padrão Abstract Factory é um padrão de design criacional que fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Ele permite que você crie diferentes objetos de uma família de produtos sem acoplar o código a suas classes concretas.

### O que temos aqui?
Neste projeto, demonstramos o uso do padrão Abstract Factory para criar famílias de objetos relacionados sem depender de suas classes concretas. A implementação inclui interfaces, fábricas concretas e produtos concretos que permitem ao cliente criar objetos de maneira desacoplada.

### Quando usar?
Você pode usar o padrão Abstract Factory quando:
- O sistema deve ser independente de como seus produtos são criados, compostos e representados.
- O sistema deve ser configurado com uma ou várias famílias de produtos.
- Uma família de produtos relacionados foi projetada para ser usada em conjunto e você precisa garantir essa restrição.
- Você deseja fornecer uma biblioteca de classes de produtos e revelar apenas suas interfaces, não suas implementações.

### Exemplos de casos de uso
- **Sistemas de Interface Gráfica (GUI)**: Diferentes temas ou estilos de interface gráfica podem ser criados usando fábricas abstratas.
- **Sistemas de Banco de Dados**: Diferentes tipos de conexões de banco de dados (por exemplo, SQL, NoSQL) podem ser criados usando fábricas abstratas.
- **Sistemas de Documentação**: Diferentes tipos de documentos (por exemplo, texto, PDF, HTML) podem ser criados usando fábricas abstratas.

### Prós:
- **Princípio da Responsabilidade Única**: O padrão Abstract Factory permite que uma classe delegue a responsabilidade de criar famílias de produtos para fábricas especializadas.
- **Princípio Aberto/Fechado**: Você pode introduzir novas famílias de produtos no programa sem quebrar o código do cliente existente.
- **Baixo Acoplamento**: O código do cliente é desacoplado das classes concretas de produtos que precisa instanciar.

### Contras:
- **Complexidade**: O código pode se tornar mais complicado devido à introdução de muitas novas interfaces e classes de fábrica.
- **Sobrecarga**: Pode ser exagero usar o padrão Abstract Factory para tarefas simples de criação de objetos.
