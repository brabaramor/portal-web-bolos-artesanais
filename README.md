# Portal Web Bolos Artesanais

Projeto desenvolvido para a cadeira de Projeto Integrador - Portal Web no curso de Sistemas Para Internet da Universidade do Vale do Rio dos Sinos (Unisinos).

## Tecnologias

**Frontend**
- React 18 + TypeScript
- Tailwind CSS 4
- Vite

**Backend**
- Node.js 22 + TypeScript
- Express
- Prisma ORM
- PostgreSQL 16

## Estrutura de Pastas

```
portal-web-bolos-artesanais/
├── frontend/
│   └── src/
│       ├── components/   # componentes React reutilizáveis
│       ├── pages/        # páginas da aplicação
│       ├── services/     # chamadas à API do backend
│       └── types/        # tipos TypeScript compartilhados
└── backend/
    ├── src/
    │   ├── controllers/  # lógica de cada rota
    │   ├── routes/       # definição das rotas da API
    │   └── middlewares/  # autenticação, validação, etc
    └── prisma/           # schema e migrations do banco
```

## Como rodar localmente

### Pré-requisitos
- Node.js 22 LTS
- PostgreSQL (local ou Supabase)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# edite o .env com as credenciais do seu banco
npx prisma generate
npm run dev
```
