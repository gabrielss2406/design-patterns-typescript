## Padrão Adapter

### O que é?
O padrão Adapter é um padrão de design estrutural que permite que interfaces incompatíveis trabalhem juntas. Ele converte a interface de uma classe em outra interface esperada pelos clientes, permitindo que classes com interfaces incompatíveis colaborem.

### O que temos aqui
Este projeto demonstra o uso do padrão Adapter para permitir que classes com interfaces incompatíveis trabalhem juntas. O exemplo contém o seguinte:

1. **Exemplo**
    - **Client**: O arquivo `index.js` demonstra como o cliente interage com o adapter.
    - **Adapter**: Implementação com classes.
    - **FnAdaptee**: Implementação com funções.

### Quando usar?
- Quando você precisa integrar classes ou sistemas com interfaces incompatíveis.
- Quando você deseja reutilizar uma classe existente sem modificar seu código.
- Quando você precisa adaptar uma interface de uma biblioteca de terceiros para seu sistema.
- Quando você quer simplificar a interface de um sistema complexo para o cliente.

### Exemplos de casos de uso
- **Integração de Sistemas**: O Adapter pode ser usado para integrar sistemas legados com novos sistemas, convertendo interfaces antigas em interfaces novas.
- **Bibliotecas de Terceiros**: O Adapter pode ser usado para adaptar bibliotecas de terceiros para que possam ser usadas em um sistema existente.
- **Sistemas de Pagamento**: O Adapter pode ser usado para integrar diferentes sistemas de pagamento com interfaces incompatíveis.

### Prós:
- **Desacoplamento**: Promove o desacoplamento entre classes, permitindo que elas trabalhem juntas sem depender diretamente das interfaces umas das outras.
- **Reutilização**: Permite reutilizar classes existentes mesmo que suas interfaces não sejam compatíveis.
- **Flexibilidade**: Facilita a integração de classes com interfaces incompatíveis.
- **Simplicidade**: Simplifica a interface para o cliente, escondendo a complexidade da adaptação.

### Contras:
- **Complexidade Adicional**: Pode adicionar complexidade ao código, especialmente se houver muitos Adapters.
- **Desempenho**: Pode impactar o desempenho se a adaptação envolver muitas conversões de interface.
- **Manutenção**: Pode ser difícil de manter se houver muitas classes e interfaces a serem adaptadas.
