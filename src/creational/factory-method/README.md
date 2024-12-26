## Padrão Factory Method

### O que é?
O padrão Factory Method é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que subclasses alterem o tipo de objetos que serão criados. Ele promove o baixo acoplamento ao eliminar a necessidade de vincular classes específicas da aplicação no código.

### O que temos aqui?
Este projeto demonstra o uso do padrão Factory Method no contexto da criação de diferentes tipos de veículos. Tendo uma implementação padrão, seguindo o UML definido, além de um exemplo de múltiplas criações aleatórios aplicando as factorys.

### Quando usar?
Você pode usar o padrão Factory Method quando:
- Uma classe não pode antecipar a classe de objetos que deve criar.
- Uma classe deseja que suas subclasses especifiquem os objetos que cria.
- Você deseja localizar o conhecimento de qual classe é criada.

### Exemplos de casos de uso
- **Kits de Ferramentas GUI**: Diferentes botões, caixas de seleção e outros elementos de interface do usuário podem ser criados usando métodos de fábrica.
- **Criação de Documentos**: Diferentes tipos de documentos (por exemplo, texto, PDF, HTML) podem ser criados usando métodos de fábrica.
- **Criação de Veículos**: Diferentes tipos de veículos (por exemplo, carros, bicicletas) podem ser criados usando métodos de fábrica.

### Prós:
- **Princípio da Responsabilidade Única**: O padrão Factory Method permite que uma classe delegue a responsabilidade de criar instâncias para suas subclasses.
- **Princípio Aberto/Fechado**: Você pode introduzir novos tipos de produtos no programa sem quebrar o código do cliente existente.
- **Baixo Acoplamento**: O código do cliente é desacoplado das classes concretas que precisa instanciar.

### Contras:
- **Complexidade**: O código pode se tornar mais complicado devido à introdução de muitas novas subclasses.
- **Sobrecarga**: Pode ser exagero usar o padrão Factory Method para tarefas simples de criação de objetos.
