## Proxy Pattern

### O que é?
O padrão Proxy é um padrão de design estrutural que fornece um substituto ou marcador para controlar o acesso a um objeto. Ele permite que você crie um objeto que represente outro objeto e controle o acesso a ele.

### O que temos aqui
Este projeto demonstra o uso do padrão Proxy para controlar o acesso a objetos.

O exemplo mostra um proxy que implementa cache em uma função assíncrona de retorno de endereço de usuários, simulando uma interação com um banco de dados externo.

### Quando usar?
Você pode usar o padrão Proxy quando:
- Precisa controlar o acesso a um objeto.
- Deseja adicionar funcionalidades adicionais a um objeto sem modificar seu código.
- Precisa atrasar a criação ou inicialização de um objeto até que ele seja realmente necessário.

### Exemplos de casos de uso
- **Controle de Acesso**: O Proxy pode ser usado para controlar o acesso a um objeto, adicionando autenticação e autorização.
- **Cache**: O Proxy pode ser usado para implementar um cache, armazenando resultados de operações caras e retornando-os rapidamente quando necessário.
- **Lazy Initialization**: O Proxy pode ser usado para atrasar a criação ou inicialização de um objeto até que ele seja realmente necessário, economizando recursos.

### Prós:
- **Controle de Acesso**: Permite controlar o acesso a um objeto, adicionando autenticação, autorização e outras funcionalidades.
- **Desempenho**: Pode melhorar o desempenho ao implementar cache e lazy initialization.
- **Flexibilidade**: Permite adicionar funcionalidades adicionais a um objeto sem modificar seu código.

### Contras:
- **Complexidade Adicional**: Pode adicionar complexidade ao código, especialmente se houver muitos proxies.
- **Sobrecarga de Performance**: Pode introduzir uma sobrecarga de performance devido à camada adicional de indireção.
- **Manutenção**: Pode ser difícil de manter se houver muitos proxies e objetos reais a serem gerenciados.
