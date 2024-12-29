## Padrão Adapter

### O que é?
O padrão Adapter é um padrão de design estrutural que permite que interfaces incompatíveis trabalhem juntas. Ele converte a interface de uma classe em outra interface esperada pelos clientes, permitindo que classes com interfaces incompatíveis colaborem.

### O que temos aqui
Este projeto demonstra o uso do padrão Adapter para permitir que classes com interfaces incompatíveis trabalhem juntas. Existem dois exemplos principais:

1. **Exemplo 1: Adapter de Tomada**
    - **Client**: O arquivo `client.js` demonstra como o cliente interage com o adapter.
    - **Adapter**: O arquivo `adapter.js` implementa a adaptação da interface do adapter.
    - **Adaptee**: O arquivo `adaptee.js` representa o adapter com a interface incompatível.

### Quando usar?
Você pode usar o padrão Adapter quando:
- Seguir os princípios SOLID, como o Princípio da Responsabilidade Única (SRP), que sugere que uma classe deve ter apenas um motivo para mudar. Isso ajuda a manter o código mais organizado e fácil de manter.
- Usar o Princípio da Inversão de Dependência (DIP) para depender de abstrações em vez de implementações concretas, facilitando a adaptação de diferentes interfaces.
- Aplicar o Princípio da Substituição de Liskov (LSP) para garantir que as subclasses possam ser usadas no lugar das classes base sem alterar o comportamento esperado do programa.
- Implementar o Princípio da Segregação de Interface (ISP) para criar interfaces específicas e evitar interfaces "inchadas" que forçam as classes a implementar métodos que não utilizam.
- Respeitar o Princípio da Aberto/Fechado (OCP) para permitir que o código seja estendido sem ser modificado, facilitando a adição de novos Adapters sem alterar o código existente.

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
