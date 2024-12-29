## Bridge Pattern

### O que é?
O padrão Bridge é um padrão de design estrutural que desacopla uma abstração da sua implementação, permitindo que ambas variem independentemente. Ele é útil quando você deseja evitar um vínculo forte entre uma abstração e sua implementação.

### Diferença entre Bridge e Adapter

Embora os padrões Bridge e Adapter possam parecer semelhantes, pois ambos lidam com a interface de classes, eles têm propósitos e usos distintos:

- **Bridge**:
    - **Propósito**: Desacoplar uma abstração de sua implementação para que ambos possam variar independentemente.
    - **Uso**: É usado desde o início do design para permitir que abstrações e implementações evoluam separadamente.
    - **Estrutura**: Envolve duas hierarquias de classes - uma para abstrações e outra para implementações.
    - **Exemplo**: Controles remotos e dispositivos, onde a interface de controle remoto é desacoplada dos dispositivos que controla.

- **Adapter**:
    - **Propósito**: Permitir que classes com interfaces incompatíveis trabalhem juntas.
    - **Uso**: É usado para integrar classes existentes em um novo sistema sem modificar seu código.
    - **Estrutura**: Envolve uma única classe que atua como um adaptador entre duas interfaces incompatíveis.
    - **Exemplo**: Adaptador de tomada, onde um adaptador permite que um plugue de um tipo seja conectado a uma tomada de outro tipo.

Em resumo, o Bridge é usado para separar abstrações e implementações desde o início, enquanto o Adapter é usado para fazer com que classes existentes funcionem juntas sem alterar suas interfaces.

### O que temos aqui
Nesta pasta, você encontrará uma implementação do padrão Bridge aplicada a controles remotos e dispositivos. A ideia é desacoplar a interface de controle remoto dos dispositivos que ela controla, permitindo que novos dispositivos e controles remotos sejam adicionados de forma independente.

- **Dispositivos**: A interface `Device` define as operações que todos os dispositivos devem implementar. As classes concretas como `TV` e `Radio` implementam essa interface.
- **Controles Remotos**: A classe `RemoteControl` atua como a abstração, enquanto `AdvancedRemoteControl` estende essa abstração para adicionar funcionalidades adicionais. Ambas as classes utilizam a interface `Device` para operar nos dispositivos.

### Quando usar?
Você pode usar o padrão Bridge quando:
- Deseja evitar um vínculo forte entre uma abstração e sua implementação.
- Precisa que as abstrações e implementações possam variar independentemente.
- Deseja dividir uma classe grande ou uma hierarquia de classes em duas hierarquias separadas, mas relacionadas.

### Exemplos de casos de uso
- **Dispositivos e Controles Remotos**: O Bridge pode ser usado para desacoplar dispositivos (TVs, rádios) de seus controles remotos, permitindo que novos dispositivos e controles sejam adicionados independentemente.
- **Formas e Cores**: O Bridge pode ser usado para desenhar formas com diferentes cores, permitindo que novas formas e cores sejam adicionadas independentemente.
- **Interfaces Gráficas**: O Bridge pode ser usado para desacoplar a interface gráfica de sua implementação, permitindo que novas interfaces e implementações sejam adicionadas independentemente.

### Prós:
- **Desacoplamento**: Promove o desacoplamento entre abstrações e implementações, permitindo que ambas variem independentemente.
- **Flexibilidade**: Facilita a adição de novas abstrações e implementações sem modificar o código existente.
- **Reutilização**: Promove a reutilização de código ao permitir que abstrações e implementações sejam combinadas de várias maneiras.

### Contras:
- **Complexidade Adicional**: Pode adicionar complexidade ao código, especialmente se houver muitas abstrações e implementações.
- **Manutenção**: Pode ser difícil de manter se houver muitas abstrações e implementações a serem gerenciadas.
