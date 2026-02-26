# API REST - Gerenciamento de Usuários

## Descrição

API REST monolítica desenvolvida com Node.js, Express e SQLite para gerenciamento de usuários.

A aplicação permite operações completas de CRUD com exclusão lógica.

---

## Tecnologias Utilizadas

- Node.js (LTS)
- Express
- SQLite3

---

## Estrutura de Pastas
api-usuarios/

└── src/

├── app.js

├── routes/

│ └── user.routes.js

├── controllers/

│ └── user.controller.js

├── services/

│ └── user.service.js

└── database/

└── db.js

## Instalação e Execução

1. Clonar o repositório:

git clone <[API-Monolitico_CP3025586](https://github.com/DeboraVicente/API-Monolitico_CP3025586.git)>
cd api-usuarios

2. Instalar dependências:

npm install

3. Executar aplicação:

npm start

Servidor disponível em:

http://localhost:3000/


---

## Endpoints

### Criar usuário
POST /users

### Listar usuários
GET /users

### Buscar usuário por ID
GET /users/:id

### Atualizar usuário
PUT /users/:id

### Desativar usuário (delete lógico)
DELETE /users/:id

---

## Estrutura do Banco de Dados

Tabela: usuarios

| Campo      | Tipo      | Restrição                     |
|------------|-----------|-------------------------------|
| id         | INTEGER   | PRIMARY KEY AUTOINCREMENT     |
| nome       | TEXT      | NOT NULL                      |
| email      | TEXT      | NOT NULL UNIQUE               |
| status     | TEXT      | NOT NULL DEFAULT 'ativo'      |
| created_at | DATETIME  | DEFAULT CURRENT_TIMESTAMP     |

---

## Requisitos Atendidos

- CRUD completo
- Exclusão lógica
- Tratamento de erros
- Códigos HTTP corretos
- Separação em camadas (routes, controllers, services, database)
- Banco SQLite local
