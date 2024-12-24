# Padrões de Projeto Criacionais

Os padrões de projeto criacionais são padrões que lidam com mecanismos de criação de objetos, tentando criar objetos de uma maneira adequada à situação. A forma básica de criação de objetos pode resultar em problemas de design ou complexidade adicional ao design. Os padrões de projeto criacionais resolvem esse problema controlando o processo de criação de objetos.

## Tipos de Padrões de Projeto Criacionais

1. **Singleton**
    - Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

2. **Factory Method**
    - Define uma interface para criar um objeto, mas permite que subclasses alterem o tipo de objetos que serão criados.

3. **Abstract Factory**
    - Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

4. **Builder**
    - Separa a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.

5. **Prototype**
    - Especifica os tipos de objetos a serem criados usando uma instância prototípica e cria novos objetos copiando esse protótipo.

## Benefícios dos Padrões de Projeto Criacionais

- **Encapsulamento**: Encapsula o conhecimento sobre quais classes concretas o sistema utiliza.
- **Flexibilidade**: Fornece flexibilidade na decisão de quais objetos precisam ser criados para um determinado caso de uso.
- **Reutilização**: Promove a reutilização de código ao desacoplar o processo de criação da implementação real.
