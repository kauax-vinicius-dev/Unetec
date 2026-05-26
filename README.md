# UNETEC - Sistema de Comunicação Escolar

![Preview do Projeto](./public/imagens/TCC%20Prot%C3%B3tipo-Desktop.svg)

## 📚 Sobre o Projeto

O **UNETEC** foi desenvolvido como Trabalho de Conclusão de Curso (TCC) durante o Ensino Médio com Habilitação Profissional Técnica em Desenvolvimento de Sistemas na Etec de Itaquera.

O projeto nasceu com o objetivo de resolver problemas reais enfrentados diariamente dentro da escola, principalmente relacionados à comunicação entre alunos, administração e compartilhamento de informações importantes.

A proposta foi criar uma plataforma centralizada para comunicação escolar, oferecendo funcionalidades úteis para o ambiente acadêmico e melhorando a experiência dos estudantes.

O sistema foi idealizado, arquitetado e desenvolvido majoritariamente por mim, além de eu também ter atuado como líder da equipe, responsável pela organização do projeto e distribuição de tarefas.

O projeto recebeu reconhecimento dentro da instituição e foi considerado um dos projetos de maior destaque do ano.

---

# ✨ Funcionalidades

## 📢 Sistema de Avisos

* Criação de avisos administrativos
* Diferentes níveis de urgência
* Visualização organizada para alunos
* Gerenciamento completo pelo administrador

## 💬 Chat em Tempo Real

* Comunicação instantânea entre usuários
* Implementação utilizando Socket.IO
* Atualização em tempo real

## 🍽️ Cardápio Escolar

* Exibição do cardápio semanal
* Sistema de curtidas para refeições
* Controle de quantidade de alunos que irão comer
* Monitoramento para reduzir desperdício de alimentos

## 🚌 Visitas Técnicas

* Cadastro de visitas técnicas
* Exibição da localização no mapa
* Informações completas da visita
* Download da autorização via link

## 🔐 Sistema de Autenticação

* Login e cadastro de usuários
* Autenticação utilizando JWT
* Controle de permissões
* Área administrativa e área do aluno

## 🌙 Interface Moderna

* Dark mode
* Layout responsivo
* Interface intuitiva
* Separação entre área pública, aluno e administrador

---

# 🛠️ Tecnologias Utilizadas

## Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT
* Socket.IO
* Cookie Parser
* Dotenv

## Frontend

* EJS
* JavaScript
* CSS3
* HTML5

## Arquitetura

* MVC
* Services Layer
* Middlewares
* WebSockets

---

# 📂 Estrutura do Projeto

```bash
src
├── config
├── controllers
│   ├── adminControllers
│   ├── alunoControllers
│   └── publicControllers
├── middlewares
├── models
├── routes
├── service
├── socket
├── validators
└── views
```

---

# 🚀 Como Rodar o Projeto

## 1️⃣ Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

---

## 2️⃣ Instale as dependências

```bash
npm install
```

---

## 3️⃣ Configure o arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```env
DB_USER=your_user
DB_PASS=your_password
JWT_SECRET=your_secret
JWT_SECRET_ADMIN=your_admin_secret
JWT_SECRET_ALUNO=your_student_secret
PORT=3000
```

---

## 4️⃣ Configure a conexão MongoDB

O projeto utiliza MongoDB Atlas.

Exemplo de URI:

```env
mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mongodb.net/?retryWrites=true&w=majority
```

---

## 5️⃣ Execute o projeto

```bash
npm start
```

ou

```bash
node src/app.js
```

---

# 🔐 Estrutura de Permissões

O sistema possui três níveis principais:

## 👤 Público

* Home
* Login
* Cadastro

## 🎓 Aluno

* Visualização de avisos
* Chat
* Cardápio
* Visitas técnicas

## 🛠️ Administrador

* Gerenciamento de avisos
* Gerenciamento de cardápio
* Gerenciamento de visitas técnicas
* Controle geral do sistema

---

# 📡 Funcionalidades Técnicas

## Socket.IO

Implementação de comunicação em tempo real para o chat da aplicação.

## JWT Authentication

Sistema de autenticação utilizando JSON Web Token.

## MongoDB

Banco de dados NoSQL utilizado para armazenamento das informações.

## Middleware de Autenticação

Controle de acesso baseado em permissões de usuário.

---

# 📸 Preview do Sistema

## Tela Inicial

* Página pública da aplicação
* Navegação intuitiva
* Interface moderna

## Dashboard Administrativo

* Controle completo do sistema
* Gerenciamento de avisos
* Cadastro de cardápios
* Gerenciamento de visitas técnicas

## Dashboard do Aluno

* Visualização simplificada
* Comunicação centralizada
* Interação com cardápio

---

# 🎯 Objetivos do Projeto

* Melhorar a comunicação escolar
* Centralizar informações importantes
* Reduzir falhas de comunicação
* Melhorar o controle do consumo alimentar
* Facilitar o acesso às visitas técnicas
* Criar uma experiência mais moderna para os alunos

---

# 🧠 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conhecimentos de:

* Arquitetura MVC
* Desenvolvimento Full Stack
* Banco de dados NoSQL
* Autenticação JWT
* Comunicação em tempo real
* Organização de projeto
* Liderança técnica
* Trabalho em equipe
* Desenvolvimento de interfaces

---

# 👨‍💻 Autor

Desenvolvido por Kauã Vinicius Alves da Silva.

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) do curso técnico de Desenvolvimento de Sistemas da Etec de Itaquera.

---

# 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
