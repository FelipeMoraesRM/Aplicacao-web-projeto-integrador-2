# Organizador de Tarefas Diárias

Este projeto consiste em uma aplicação web desenvolvida para auxiliar no gerenciamento de tarefas diárias, promovendo organização, produtividade e usabilidade em diferentes dispositivos.

## 📌 Tecnologias Utilizadas

### Frontend
- [Vue.js 3](https://vuejs.org/)
- HTML5 semântico
- CSS3 com estilo responsivo
- Bootstrap 5

### Backend
- Node.js
- Express
- JSON (como armazenamento de dados)

---

## 📁 Estrutura do Projeto

```
Aplicacao-web-projeto-integrador-2/
├── frontend/            # Aplicação Vue.js
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/             # Servidor Node + Express
│   ├── server.js
│   ├── tarefas.json
│   └── package.json
├── versao-antiga/       # Versão inicial em HTML puro
│   └── index.html
└── README.md            # Este arquivo
```

---

## 🚀 Funcionalidades

- Adicionar, excluir e marcar tarefas como concluídas
- Ordenação por prioridade
- Animações e responsividade
- Armazenamento persistente com backend (JSON)
- Interface simples, clara e funcional

---

## 🔧 Executando o Projeto Localmente

### Pré-requisitos

- Node.js instalado
- Git instalado

### Passos

#### 1. Clone o repositório

```bash
git clone https://github.com/FelipeMoraesRM/Aplicacao-web-projeto-integrador-2.git
cd Aplicacao-web-projeto-integrador-2
```

#### 2. Inicie o backend

```bash
cd backend
npm install
node server.js
```

Servidor estará rodando em: `http://localhost:3000`

#### 3. Inicie o frontend

```bash
cd ../frontend
npm install
npm run serve
```

Aplicação será acessada em: `http://localhost:8080`

---

## 📝 Relatório e Requisitos Atendidos

Este projeto cumpre todos os critérios exigidos no Módulo 2:

- ✔️ Uso de framework moderno (Vue.js)
- ✔️ HTML semântico e acessível
- ✔️ Estilo CSS responsivo
- ✔️ Backend funcional com Node.js + Express
- ✔️ Código publicado neste repositório no GitHub
- ✔️ Documentação técnica com decisões de implementação

---

## 📅 Última atualização

26/06/2025
