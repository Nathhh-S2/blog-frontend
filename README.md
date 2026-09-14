# 🌸 Blog Escolar - Front-end

## 📌 Sobre o projeto

Projeto desenvolvido para o **Tech Challenge da FIAP - Full Stack Development**.

O Blog Escolar é uma aplicação para publicação e consulta de conteúdos educacionais.

O front-end foi desenvolvido em **React** e integrado a uma API REST em **Node.js**.

## 🚀 Tecnologias

- React
- Vite
- JavaScript
- React Router
- Styled Components
- Node.js
- MongoDB
- JWT
- Docker
- GitHub Actions

## ✨ Funcionalidades

### Para estudantes
- Visualizar posts
- Pesquisar posts
- Ler uma publicação completa

### Para professores
- Fazer login
- Criar posts
- Editar posts
- Excluir posts
- Acessar a área administrativa

## 🔐 Autenticação

O sistema utiliza **JWT** para autenticação dos professores.

As páginas administrativas são protegidas pelo componente `ProtectedRoute`.

Rotas protegidas:

- `/admin`
- `/criar-post`
- `/editar-post/:id`

## 🌐 Principais rotas

| Página | Rota |
|---|---|
| Início | `/` |
| Visualizar post | `/posts/:id` |
| Login | `/login` |
| Área administrativa | `/admin` |
| Criar post | `/criar-post` |
| Editar post | `/editar-post/:id` |

## 🔗 API

O front-end utiliza a API localizada em:

`http://localhost:3000`

A URL da API é configurada no arquivo `.env`:

`VITE_API_URL=http://localhost:3000`

## 📱 Responsividade

A interface foi desenvolvida para funcionar em:

- Computadores
- Tablets
- Celulares

## 🐳 Docker

Para criar a imagem:

`docker build -t blog-frontend .`

Para executar:

`docker run -p 5173:5173 --name blog-frontend-container blog-frontend`

A aplicação ficará disponível em:

`http://localhost:5173`

## ▶️ Executar localmente

Instalar as dependências:

`npm install`

Executar o projeto:

`npm run dev`

## 🔗 Repositórios

**Front-end:**  
https://github.com/Nathhh-S2/blog-frontend

**Back-end:**  
https://github.com/Nathhh-S2/blog-api

## 👩‍💻 Autoria

**Natália**

Tech Challenge — FIAP  
Full Stack Development