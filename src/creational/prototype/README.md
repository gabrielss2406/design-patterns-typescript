## Prototype Pattern

### O que é?
O padrão Prototype é um padrão de design criacional que permite a criação de novos objetos a partir de uma instância existente, clonando-a. Isso é útil quando a criação de um novo objeto é cara ou complexa.

### O que temos aqui
Este projeto demonstra o uso do padrão Prototype para criar cópias de objetos. Existem três exemplos: 
- **prototype-shallow-copy**: Um exemplo de cópia superficial onde apenas as referências dos objetos são copiadas, não os próprios objetos.
- **protype-deep-copy**: Um exemplo de cópia profunda onde todos os objetos são copiados recursivamente, criando uma cópia independente do original.
- **lodash**: Outro exemplo utilizando a biblioteca Lodash para realizar cópias superficiais e profundas de objetos.

### Quando usar?
Você pode usar o padrão Prototype quando:
- A criação de um novo objeto é cara ou complexa.
- Deseja evitar a criação de subclasses para cada tipo de objeto.
- Precisa de uma cópia exata de um objeto existente, incluindo seu estado atual.

### Exemplos de casos de uso
- **Clonagem de Objetos Complexos**: Um Prototype pode ser usado para clonar objetos complexos que possuem muitos atributos e configurações.
- **Edição de Documentos**: Um Prototype pode ser usado para criar cópias de documentos para edição, mantendo o original intacto.
- **Jogos**: Em jogos, o Prototype pode ser usado para clonar personagens, inimigos ou itens com estados específicos.

### Prós:
- **Redução de complexidade:** Facilita a criação de novos objetos a partir de um protótipo existente.
- **Desempenho:** Pode melhorar o desempenho ao evitar a criação de objetos do zero.
- **Flexibilidade:** Permite a criação de objetos dinâmicos e configuráveis em tempo de execução.

### Contras:
- **Cópia profunda vs. cópia superficial:** É necessário entender a diferença entre cópia profunda e cópia superficial para evitar problemas de referência.
- **Manutenção de estado:** Pode ser difícil manter o estado correto dos objetos clonados, especialmente se eles tiverem referências complexas.
- **Complexidade adicional:** Pode adicionar complexidade ao código, especialmente se houver muitos tipos de objetos a serem clonados.
