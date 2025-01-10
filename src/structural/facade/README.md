## Facade Pattern

### O que é?
O padrão Facade é um padrão de design estrutural que fornece uma interface simplificada para um subsistema complexo. Ele oculta a complexidade do sistema e fornece uma interface mais fácil de usar para os clientes.

### O que temos aqui
O exemplo foi desenvolvidos com base no exemplo da pasta `src/creational/builder`.

No caso apenas um facade para simplificar a interação do cliente com esse sistema.

### Quando usar?
Você pode usar o padrão Facade quando:
- Deseja fornecer uma interface simples para um subsistema complexo.
- Precisa desacoplar um cliente de um subsistema complexo.
- Deseja reduzir a dependência entre o cliente e as classes do subsistema.

### Exemplos de casos de uso
- **Sistemas de Home Theater**: O Facade pode ser usado para simplificar a interação com um sistema de home theater, ocultando a complexidade das várias partes do sistema.
- **Sistemas de Pedidos**: O Facade pode ser usado para simplificar a interação com um sistema de pedidos, ocultando a complexidade das operações de criação, processamento e envio de pedidos.
- **APIs Complexas**: O Facade pode ser usado para fornecer uma interface simplificada para APIs complexas, facilitando o uso por parte dos clientes.

### Prós:
- **Simplicidade**: Fornece uma interface simples e fácil de usar para um subsistema complexo.
- **Desacoplamento**: Reduz a dependência entre o cliente e as classes do subsistema.
- **Manutenção**: Facilita a manutenção do código ao ocultar a complexidade do subsistema.

### Contras:
- **Funcionalidade Limitada**: Pode limitar a funcionalidade disponível para o cliente, pois a fachada fornece uma interface simplificada.
- **Sobrecarga de Abstração**: Pode introduzir uma camada adicional de abstração, o que pode adicionar complexidade ao sistema.
- **Dependência da Fachada**: Pode criar uma dependência excessiva da fachada, dificultando a modificação do subsistema sem afetar o cliente.
