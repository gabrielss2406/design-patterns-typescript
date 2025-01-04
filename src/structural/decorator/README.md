## Decorator Pattern

### O que é?
O padrão Decorator é um padrão de design estrutural que permite adicionar comportamentos a objetos individuais, dinamicamente, sem afetar o comportamento de outros objetos da mesma classe. Ele fornece uma alternativa flexível ao uso de subclasses para estender funcionalidades.

### Exemplo de Produto: Camisa e Camisa Estampada

Vamos considerar um exemplo prático para entender melhor o padrão Decorator. Suponha que temos um produto básico, como uma camisa, e queremos adicionar funcionalidades extras a ela, como uma estampa.

Primeiro, temos a camisa básica, que é um produto simples com uma descrição e um preço. Em seguida, queremos adicionar uma estampa à camisa, mas sem modificar a classe original da camisa. Para isso, usamos o padrão Decorator, que nos permite "decorar" a camisa básica com uma nova funcionalidade, neste caso, a estampa.

Ao usar o padrão Decorator, podemos criar uma nova classe que adiciona a funcionalidade de estampa à camisa básica, mantendo a flexibilidade de adicionar ou remover essa funcionalidade conforme necessário. Isso nos permite ter uma camisa básica e uma camisa estampada, sem a necessidade de criar subclasses específicas para cada combinação de funcionalidades.

### Quando usar?
Você pode usar o padrão Decorator quando:
- Precisa adicionar responsabilidades a objetos de forma dinâmica e transparente.
- Deseja evitar a criação de uma hierarquia de subclasses para cada combinação possível de comportamentos.
- Precisa estender a funcionalidade de uma classe de forma flexível e reutilizável.

### Exemplos de casos de uso
- **Notificações**: O Decorator pode ser usado para adicionar diferentes tipos de notificações (email, SMS, Slack) a um sistema de notificação existente.
- **Formatação de Texto**: O Decorator pode ser usado para adicionar formatações de texto (negrito, itálico, sublinhado) de forma dinâmica.
- **Streams de Entrada/Saída**: Em bibliotecas de I/O, o Decorator pode ser usado para adicionar funcionalidades como buffering, compressão e criptografia a streams de dados.

### Prós:
- **Flexibilidade**: Permite adicionar ou remover responsabilidades a objetos de forma dinâmica.
- **Reutilização**: Promove a reutilização de código ao permitir a combinação de diferentes decoradores.
- **Simplicidade**: Evita a criação de uma hierarquia complexa de subclasses para cada combinação possível de comportamentos.

### Contras:
- **Complexidade Adicional**: Pode adicionar complexidade ao código, especialmente se houver muitos decoradores.
- **Dificuldade de Depuração**: Pode ser difícil depurar e entender o fluxo de execução quando muitos decoradores são combinados.
- **Sobrecarga de Performance**: Pode introduzir uma sobrecarga de performance devido à composição de múltiplos decoradores.
