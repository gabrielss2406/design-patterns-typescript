## Builder Pattern

### O que é?
O padrão Builder é um padrão de design criacional que permite a construção de objetos complexos passo a passo. Ele separa a construção de um objeto da sua representação, permitindo que o mesmo processo de construção possa criar diferentes representações.

### O que temos aqui
Este projeto demonstra o uso do padrão Builder no contexto de construção de refeições. A estrutura de diretórios está organizada para separar os diferentes componentes da refeição, como bebidas, pratos principais e sobremesas. Cada componente pode ser construído passo a passo, permitindo flexibilidade na criação de diferentes tipos de refeições. A classe Director é usada para controlar o processo de construção, garantindo que os passos sejam executados na ordem correta.

### Quando usar?
Você pode usar o padrão Builder quando:
- A criação de um objeto envolve muitos passos ou configurações complexas.
- Deseja criar diferentes representações de um objeto usando o mesmo processo de construção.
- Precisa de um código de construção mais legível e fácil de manter.

### Exemplos de casos de uso
- **Construção de Objetos Complexos**: Um Builder pode ser usado para construir objetos complexos, como um objeto de configuração com muitas opções.
- **Construção de Documentos**: Um Builder pode ser usado para construir diferentes tipos de documentos, como PDFs, HTML ou DOCX, usando o mesmo processo de construção.
- **Construção de Veículos**: Um Builder pode ser usado para construir diferentes tipos de veículos, como carros, motos ou bicicletas, com diferentes configurações.

### Prós:
- **Separação de construção e representação:** Permite que o mesmo processo de construção crie diferentes representações do objeto.
- **Código mais legível:** Facilita a leitura e manutenção do código de construção.
- **Flexibilidade:** Permite a criação de objetos complexos de maneira flexível e passo a passo.

### Contras:
- **Complexidade adicional:** Pode adicionar complexidade ao código, especialmente se o objeto a ser construído não for muito complexo.
- **Mais classes:** Pode exigir a criação de mais classes, como a classe Builder e a classe de produto.
