# 🌸 Blog Escolar - Front-end

## 📚 Sobre o projeto

O **Blog Escolar** é uma aplicação desenvolvida como parte do **Tech Challenge da FIAP**, no curso de **Full Stack Development**.

O projeto tem como objetivo oferecer uma plataforma tecnológica para auxiliar professores e estudantes no compartilhamento e acesso a conteúdos educacionais.

Este repositório corresponde ao **Front-end da aplicação**, desenvolvido utilizando **React**, responsável pela interface de interação com os usuários e pela comunicação com a API REST desenvolvida em Node.js.

A aplicação possui uma área pública para visualização dos conteúdos e uma área administrativa destinada aos professores autenticados.

---

## 🎯 Objetivo

O objetivo do Front-end é disponibilizar uma interface:

- Simples e intuitiva;
- Responsiva;
- Acessível;
- Fácil de utilizar;
- Adaptada para computadores, tablets e celulares;
- Integrada ao Back-end através de uma API REST.

A aplicação foi desenvolvida pensando em dois principais tipos de usuários:

- 👩‍🎓 Estudantes;
- 👩‍🏫 Professores.

---

# 🚀 Tecnologias utilizadas

### Front-end

- React
- JavaScript
- Vite
- React Router DOM
- Styled Components
- HTML5
- CSS3

### Comunicação com a API

- Fetch API
- REST API
- JSON
- JWT (JSON Web Token)

### Desenvolvimento e versionamento

- Node.js
- npm
- Git
- GitHub

### DevOps

- Docker
- GitHub Actions

---

# 📋 Funcionalidades

## 👩‍🎓 Área do estudante

O estudante pode:

- Visualizar todos os posts disponíveis;
- Pesquisar publicações;
- Visualizar o título das publicações;
- Visualizar o autor;
- Visualizar uma breve descrição do conteúdo;
- Acessar uma publicação;
- Ler o conteúdo completo de um post.

---

## 👩‍🏫 Área do professor

O professor pode realizar autenticação na aplicação e acessar funcionalidades administrativas.

Após o login, o professor pode:

- Acessar a área administrativa;
- Visualizar todos os posts;
- Criar novos posts;
- Editar posts existentes;
- Excluir posts;
- Encerrar a sessão.

---

# 🔐 Autenticação e autorização

A aplicação utiliza **JWT (JSON Web Token)** para autenticação dos professores.

Após realizar o login corretamente, o token recebido pela API é armazenado no navegador.

As páginas administrativas possuem proteção de acesso através do componente `ProtectedRoute`.

Quando um usuário não autenticado tenta acessar uma área protegida, ele é automaticamente direcionado para a página de login.

As principais rotas protegidas são:

```text
/admin
/criar-post
/editar-post/:id
🖥️ Páginas da aplicação
🏠 Página inicial

Rota:

/

A página inicial apresenta os posts disponíveis na plataforma.

Também possui um campo de pesquisa que permite localizar publicações pelo:

Título;
Conteúdo;
Autor.
📖 Página de leitura do post

Rota:

/posts/:id

Apresenta o conteúdo completo de uma publicação específica.

🔑 Página de login

Rota:

/login

Permite que professores realizem login na plataforma.

Após a autenticação, o usuário pode acessar a área administrativa.

📋 Área administrativa

Rota:

/admin

Permite ao professor visualizar e gerenciar as publicações cadastradas.

Nessa área estão disponíveis ações como:

Editar;
Excluir;
Criar uma nova publicação.
✏️ Criar post

Rota:

/criar-post

Permite que o professor cadastre uma nova publicação.

O formulário possui campos para:

Título;
Conteúdo;
Autor.

Os dados são enviados para a API através de uma requisição POST.

📝 Editar post

Rota:

/editar-post/:id

Permite que o professor altere uma publicação existente.

Ao acessar essa página, os dados atuais do post são carregados e apresentados no formulário.

Após a edição, as alterações são enviadas para a API através de uma requisição PUT.

🔗 Integração com o Back-end

O Front-end se comunica com uma API REST desenvolvida em Node.js e Express.

A API é responsável pelo processamento dos dados, autenticação e comunicação com o banco de dados MongoDB.

A URL da API é definida através de uma variável de ambiente:

VITE_API_URL=http://localhost:3000
📡 Endpoints utilizados

O Front-end utiliza os seguintes endpoints da API:

Listar posts
GET /posts

Retorna todas as publicações disponíveis.

Buscar um post
GET /posts/:id

Retorna os dados completos de uma publicação específica.

Criar post
POST /posts

Cria uma nova publicação.

Essa operação exige autenticação.

Editar post
PUT /posts/:id

Atualiza uma publicação existente.

Essa operação exige autenticação.

Excluir post
DELETE /posts/:id

Exclui uma publicação.

Essa operação exige autenticação.

Login
POST /auth/login

Realiza a autenticação do professor.

Cadastro
POST /auth/cadastro

Realiza o cadastro de um novo usuário.

📁 Estrutura do projeto
blog-frontend/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Post.jsx
│   │   ├── Login.jsx
│   │   ├── Admin.jsx
│   │   ├── CreatePost.jsx
│   │   └── EditPost.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
🧩 Organização do Front-end

O projeto foi dividido em componentes, páginas e serviços para facilitar a organização e manutenção do código.

Components

A pasta components contém elementos reutilizáveis da interface.

Exemplos:

Header.jsx
ProtectedRoute.jsx

O Header é responsável pelo cabeçalho e pela navegação da aplicação.

O ProtectedRoute controla o acesso às páginas que exigem autenticação.

Pages

A pasta pages contém as principais telas da aplicação:

Home.jsx
Post.jsx
Login.jsx
Admin.jsx
CreatePost.jsx
EditPost.jsx

Cada arquivo representa uma página acessível através das rotas do React Router.

Services

A pasta services contém funcionalidades relacionadas à comunicação com a API.

O arquivo:

api.js

centraliza as requisições realizadas pelo Front-end.

⚙️ Como executar o projeto
1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js
npm
Git

Para verificar se o Node.js está instalado:

node --version

Para verificar o npm:

npm --version
2. Clonar o repositório

Clone o projeto utilizando:

git clone https://github.com/Nathhh-S2/blog-frontend.git

Depois, entre na pasta:

cd blog-frontend
3. Instalar as dependências

Execute:

npm install

Esse comando instala todas as dependências necessárias para executar o projeto.

4. Configurar as variáveis de ambiente

Na raiz do projeto, crie um arquivo chamado:

.env

Adicione:

VITE_API_URL=http://localhost:3000

Essa variável informa ao Front-end o endereço onde a API está sendo executada.

O arquivo .env não deve ser enviado para o GitHub, pois pode conter informações de configuração que não devem ser versionadas.

5. Executar o projeto

Execute:

npm run dev

O Vite iniciará o servidor de desenvolvimento.

A aplicação poderá ser acessada em:

http://localhost:5173
🐳 Executando com Docker

O projeto possui um Dockerfile para facilitar a execução da aplicação em um container.

Criar a imagem

Na pasta do projeto, execute:

docker build -t blog-frontend .
Executar o container

Depois de criar a imagem:

docker run -p 5173:5173 blog-frontend

A aplicação estará disponível em:

http://localhost:5173
🔄 Integração Contínua - GitHub Actions

O projeto utiliza GitHub Actions para realizar verificações automáticas no código.

O workflow está localizado em:

.github/workflows/ci.yml

A execução ocorre quando há alterações na branch main ou quando é aberto um Pull Request.

O processo realiza:

Download do código do repositório;
Configuração do Node.js;
Instalação das dependências;
Build do projeto React.

O build permite verificar se o projeto consegue ser compilado corretamente.

📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

O projeto possui adaptações para:

💻 Desktop;
📱 Smartphones;
📲 Tablets.

Os componentes possuem regras de estilo responsivo para melhorar a experiência de navegação em dispositivos menores.

♿ Acessibilidade

Durante o desenvolvimento foram utilizados recursos para melhorar a acessibilidade da aplicação.

Entre eles:

Estrutura organizada da interface;
Campos de formulário identificados;
Navegação por links;
Indicadores visuais de foco;
Contraste adequado;
Adaptação para diferentes tamanhos de tela.

Também foram adicionados indicadores de foco para elementos interativos, facilitando a navegação utilizando teclado.

🔄 Fluxo da aplicação

O funcionamento geral da aplicação pode ser representado da seguinte forma:

                    ┌─────────────────┐
                    │     Usuário     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ React Front-end │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
       ┌─────────────┐               ┌─────────────┐
       │  Estudante  │               │  Professor  │
       └──────┬──────┘               └──────┬──────┘
              │                             │
              ▼                             ▼
       Visualizar posts              Fazer login
       Pesquisar posts               Área administrativa
       Ler publicações               Criar / editar / excluir
                                            │
                                            ▼
                                     ┌─────────────┐
                                     │   API REST  │
                                     │   Node.js   │
                                     └──────┬──────┘
                                            │
                                            ▼
                                     ┌─────────────┐
                                     │   MongoDB   │
                                     └─────────────┘
🏗️ Arquitetura

A aplicação segue uma arquitetura dividida entre Front-end e Back-end.

┌───────────────────────────────┐
│          FRONT-END            │
│                               │
│ React + Vite                  │
│ React Router                  │
│ Styled Components             │
└───────────────┬───────────────┘
                │
                │ HTTP / REST
                ▼
┌───────────────────────────────┐
│           BACK-END            │
│                               │
│ Node.js + Express             │
│ JWT                           │
│ Mongoose                      │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│          BANCO DE DADOS       │
│                               │
│ MongoDB Atlas                 │
└───────────────────────────────┘
👥 Usuários

A aplicação possui dois principais tipos de utilização:

Estudante

Pode:

Visualizar publicações;
Pesquisar conteúdos;
Ler posts completos.
Professor

Pode:

Fazer login;
Criar publicações;
Editar publicações;
Excluir publicações;
Gerenciar os conteúdos através da área administrativa.
🛠️ Desenvolvimento

O projeto foi desenvolvido utilizando componentes funcionais do React e Hooks.

A comunicação com o back-end é realizada através de requisições HTTP para a API REST.

A autenticação utiliza JWT, permitindo controlar o acesso às funcionalidades administrativas.

A aplicação utiliza React Router para gerenciamento das rotas e Styled Components para organização dos estilos dos componentes.

🔒 Segurança

As operações administrativas da aplicação exigem autenticação.

O Front-end utiliza o token JWT recebido durante o login para realizar requisições protegidas.

Informações sensíveis, como variáveis de ambiente, não são armazenadas diretamente no código-fonte.

O arquivo .env é ignorado pelo Git através do .gitignore.

🧪 Build do projeto

Para gerar uma versão de produção do Front-end, execute:

npm run build

O Vite irá gerar os arquivos otimizados para produção.

O comando também pode ser utilizado para verificar se o projeto consegue ser compilado corretamente.

📚 Repositórios do projeto
Front-end

https://github.com/Nathhh-S2/blog-frontend

Back-end

https://github.com/Nathhh-S2/blog-api

🎓 Projeto acadêmico

Este projeto foi desenvolvido como parte do Tech Challenge da FIAP, com o objetivo de aplicar conhecimentos de desenvolvimento Full Stack, criação de APIs, desenvolvimento de interfaces, autenticação, banco de dados e práticas de DevOps.

👩‍💻 Autoria

Projeto desenvolvido como parte do Tech Challenge da FIAP.

Curso: Full Stack Development

Projeto: Blog Escolar

Front-end: React

Back-end: Node.js

Banco de dados: MongoDB