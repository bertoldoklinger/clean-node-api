API em NodeJs usando Typescript, TDD, Clean Architecture, Design Patterns e SOLID principles

# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/signup**
2. ✅ Valida dados obrigatórios **name**, **email**, **password** e **passwordConfirmation**
3. ✅ Valida que **password** e **passwordConfirmation** são iguais
4. ✅ Valida que o campo **email** é um e-mail válido
5. ✅ **Valida** se já existe um usuário com o email fornecido
6. ✅ Gera uma senha **criptografada** (essa senha não pode ser descriptografada)
7. ✅ **Cria** uma conta para o usuário com os dados informados, **substituindo** a senha pela senha criptorafada
8. ✅ Gera um **token** de acesso a partir do ID do usuário
9. ✅ **Atualiza** os dados do usuário com o token de acesso gerado
10. ✅ Retorna **200** com o token de acesso e o nome do usuário

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se name, email, password ou passwordConfirmation não forem fornecidos pelo client
3. ✅ Retorna erro **400** se password e passwordConfirmation não forem iguais
4. ✅ Retorna erro **400** se o campo email for um e-mail inválido
5. ✅ Retorna erro **403** se o email fornecido já estiver em uso
6. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
7. ✅ Retorna erro **500** se der erro ao tentar criar a conta do usuário
8. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso
9. ✅ Retorna erro **500** se der erro ao tentar atualizar o usuário com o token de acesso gerado> 

## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

> ## Metodologias e Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Jest
* MongoDb
* Travis CI
* Swagger
* Bcrypt
* JsonWebToken
* Faker
* Coveralls
* Validator
* Express
* Supertest
* Eslint
* Standard Javascript Style
* Sucrase
* Nodemon
* Rimraf
* In-Memory MongoDb Server
* MockDate
* Module-Alias
* Copyfiles
* Npm Check
* Bson ObjectId

> ## Features do Node
* API Rest com Express
* Log de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares
> ## Features do Git

* Alias
* Log Personalizado
* Branch
* Reset
* Amend
* Tag
* Stash
* Rebase
* Merge

> ## Features do Typescript

* POO Avançado
* Interface
* TypeAlias
* Namespace
* Utility Types
* Modularização de Paths
* Configurações
* Build
* Deploy
* Uso de Breakpoints

> ## Features de Testes

* Testes Unitários
* Testes de Integração (API Rest)
* Cobertura de Testes
* Test Doubles
* Mocks
* Stubs
* Spies
* Fakes

> ## Features do MongoDb

* Connect e Reconnect
* Collections
* InsertOne e InserMany
* Find, FindOne e FindOneAndUpdate
* DeleteMany
* UpdateOne
* Aggregation (Match, Group, Unwind, Lookup, AddFields, Project, Sort)
* ObjectId
* Upsert e ReturnOriginal
* Push, Divide, Multiply, ArrayElemAt, Cond, Sum
* Filter, Map, Reduce, MergeObjects, ConcatArrays
