# Portal Web Bolos Artesanais

Projeto desenvolvido para a cadeira de Projeto Integrador - Portal Web no curso de Sistemas Para Internet da Universidade do Vale do Rio dos Sinos (Unisinos).

## Tecnologias

### Frontend

- React 18 + TypeScript
- Tailwind CSS 4
- Vite
- Axios

### Backend

- Node.js 22 + TypeScript
- Express
- Prisma ORM
- PostgreSQL 16 (via Supabase)

---

## Estrutura de Pastas

```
portal-web-bolos-artesanais/
├── frontend/
│   └── src/
│       ├── components/   # componentes React reutilizáveis
│       ├── pages/        # páginas da aplicação
│       ├── services/
│       │   └── api.ts    # configuração do axios (conexão com o backend)
│       └── types/        # tipos TypeScript compartilhados
└── backend/
    ├── src/
    │   ├── index.ts      # ponto de entrada do servidor Express
    │   ├── controllers/  # lógica de cada rota
    │   ├── routes/       # definição das rotas da API
    │   └── middlewares/  # autenticação, validação, etc
    └── prisma/
        └── schema.prisma # schema e migrations do banco
```

---

## Como rodar localmente

### Pré-requisitos

- Node.js 22 LTS
- Conta no [Supabase](https://supabase.com) com um projeto criado

### Backend
 
```bash
cd backend
npm install
```
 
Crie o arquivo `.env` na pasta `backend/` com as seguintes variáveis:
 
```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@db.XXXX.supabase.co:5432/postgres"
PORT=3333
JWT_SECRET="uma-string-longa-e-aleatoria"
```
 
> A `DATABASE_URL` é obtida no painel do Supabase em **Project Settings → Database → Connection string → URI**.
> Substitua `[YOUR-PASSWORD]` pela senha definida na criação do projeto.
 
Continue com os comandos:
 
```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```
 
### Frontend
 
```bash
cd frontend
npm install
npm run dev
```
 
---
 
## Como testar
 
O frontend e o backend rodam em portas diferentes e precisam estar **rodando ao mesmo tempo**, cada um em um terminal separado.
 
| Parte | Endereço | Como iniciar |
|---|---|---|
| Frontend | `http://localhost:5173` | `cd frontend && npm run dev` |
| Backend | `http://localhost:3333` | `cd backend && npm run dev` |
 
**Terminal 1 — backend:**
```bash
cd backend
npm run dev
```
 
**Terminal 2 — frontend:**
```bash
cd frontend
npm run dev
```
 
Para confirmar que o backend está rodando, acesse `http://localhost:3333` no navegador — deve retornar:
```json
{ "message": "API rodando!" }
```
 
---
 
## Integração Frontend ↔ Backend
 
### Axios
 
O frontend usa [Axios](https://axios-http.com) para fazer requisições HTTP ao backend. A configuração está em `frontend/src/services/api.ts`:
 
```typescript
import axios from 'axios';
 
const api = axios.create({
  baseURL: 'http://localhost:3333',
});
 
export default api;
```
 
Para usar em uma página:
 
```typescript
import api from '../services/api';
 
const response = await api.get('/produtos');
console.log(response.data);
```
 
### CORS
 
O backend está configurado para aceitar requisições do frontend. No `src/index.ts`:
 
```typescript
import cors from 'cors';
 
app.use(cors({
  origin: 'http://localhost:5173'
}));
```
 
> Sem essa configuração, o browser bloquearia todas as requisições do frontend para o backend.
 
---
 
## Arquivos de configuração do backend
 
| Arquivo | Descrição |
|---|---|
| `src/index.ts` | Ponto de entrada do servidor Express |
| `prisma/schema.prisma` | Schema do banco de dados |
| `prisma.config.ts` | Configuração do Prisma |
| `tsconfig.json` | Configuração do TypeScript para o backend |
| `package.json` | Dependências e scripts do projeto |
| `.gitignore` | Arquivos ignorados pelo Git (inclui `.env` e `node_modules`) |
 
### Scripts disponíveis
 
```bash
npm run dev    # inicia o servidor em modo desenvolvimento com hot reload
npm run build  # compila o TypeScript para JavaScript
npm start      # inicia o servidor a partir do build compilado
```
 
---
 
## Variáveis de Ambiente
 
O arquivo `.env` **não deve ser versionado**. Use o exemplo abaixo como referência:
 
```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@db.XXXX.supabase.co:5432/postgres"
PORT=3333
JWT_SECRET="sua-chave-secreta-aqui"
```
 
> `JWT_SECRET` é usado para assinar e verificar tokens de autenticação JWT.