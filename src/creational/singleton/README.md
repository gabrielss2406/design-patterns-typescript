## Singleton Pattern

### O que é?
O padrão Singleton é um padrão de design criacional que permite garantir que uma classe tenha apenas uma instância em todo o ciclo de vida da aplicação. Ele também fornece um ponto global de acesso a essa instância.

### O que temos aqui
Duas maneiras de ser usar um singleton: a primeira é a "Classic", que implementa um singleton com Orientação a Objetos de maneiras tradicional. Já a segunda, que chamei de "Module", usa dos modules da linguagem para simplificar o código, mas mantendo o mesmo comportamento.

### Quando usar?
Você pode usar o padrão Singleton quando:
- Precisa de exatamente uma instância de uma classe para controlar o acesso a recursos compartilhados, como uma conexão de banco de dados ou um gerenciador de configuração.
- Deseja ter um ponto global de acesso a uma instância única, facilitando o gerenciamento de estados globais.

### Exemplos de casos de uso
- **Gerenciamento de Configurações**: Uma classe Singleton pode ser usada para gerenciar configurações de aplicação, garantindo que todas as partes da aplicação acessem as mesmas configurações.
- **Conexão com Banco de Dados**: Um Singleton pode ser usado para gerenciar a conexão com o banco de dados, garantindo que apenas uma conexão seja aberta durante o ciclo de vida da aplicação.
- **Logger**: Um Singleton pode ser usado para implementar um sistema de logging, garantindo que todas as partes da aplicação utilizem o mesmo logger.
- **Cache**: Um Singleton pode ser usado para implementar um sistema de cache, garantindo que todas as partes da aplicação acessem o mesmo cache.
- **Gerenciamento de Sessão**: Um Singleton pode ser usado para gerenciar a sessão do usuário, garantindo que todas as partes da aplicação acessem a mesma sessão.

### Prós:
- **Controle de acesso a uma única instância:** Garante que apenas uma instância da classe seja criada, evitando problemas de inconsistência de estado.
- **Ponto global de acesso:** Facilita o acesso à instância única de qualquer lugar do código.
- **Economia de recursos:** Pode economizar recursos ao evitar a criação de múltiplas instâncias desnecessárias.

### Contras:
- **Dificuldade de teste:** Pode ser difícil testar classes Singleton, pois elas introduzem estado global que pode interferir em outros testes.
- **Aumento do acoplamento:** Pode aumentar o acoplamento entre classes, já que muitas partes do código podem depender da instância Singleton.
- **Problemas de concorrência:** Em ambientes multithread, é necessário garantir que a criação da instância seja thread-safe, o que pode adicionar complexidade ao código.
