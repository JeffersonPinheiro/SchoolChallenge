# SchoolChallenge

Uma API simples para gerenciar Estudantes de uma Escola.

## Descrição

Esta API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) os estudantes da base de dados. Cada estudante possui um nome, idade e endereço.

## Recursos

- Listar todas os estudantes
- Obter um estudante específica pelo ID
- Criar um novo estudante
- Atualizar um estudante existente
- Deletar um estudante existente

## Rotas

### Login/Autorização JWT
POST /api/Auth/login

### Listar todas as tarefas

GET /Student

### Obter uma tarefa pelo ID

GET /Student/id

### Criar uma nova tarefa

POST /Student

### Atualizar Tarefa

PUT /Student/id
