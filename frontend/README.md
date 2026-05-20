# Portal Web - Bolos Artesanais 🍰

Portal web desenvolvido para facilitar o gerenciamento de pedidos de bolos artesanais da Doce Encanto.

## 🎨 Funcionalidades Implementadas

### Área Pública (Cliente)
- ✅ **Home**: Página inicial com destaques da semana e call-to-action
- ✅ **Catálogo**: Listagem de produtos com filtros (sabor, tamanho, ocasião)
- ✅ **Encomenda**: Formulário completo para realizar pedidos
- ✅ **Confirmação**: Tela de confirmação com número do pedido

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.2.5** com TypeScript
- **Vite 8.0** (requer Node.js 20.19+ ou 22.12+)
- **React Router DOM** para roteamento
- **Tailwind CSS 4.2** para estilização
- **Axios** para comunicação com API

### Design System
- **Fontes**: Poppins (principal) e Inter (secundária)
- **Cores**:
  - Rosa principal: `pink-600` (#ec4899)
  - Roxo principal: `purple-600` (#a855f7)
  - Gradientes: `from-pink-600 to-purple-600`
- **Componentes Reutilizáveis**:
  - Button
  - Header (responsivo com menu hambúrguer)
  - Footer
  - ProductCard

## 📱 Responsividade

O projeto foi desenvolvido com breakpoints para:
- **Mobile**: < 768px (design mobile-first)
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

### Características Responsivas:
- Menu hambúrguer no mobile que expande em drawer
- Grid de produtos adaptável (1 coluna mobile, 2 tablet, 3 desktop)
- Filtros em painel expansível no mobile
- Formulários otimizados para touch em dispositivos móveis

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 20.19+ ou 22.12+
- npm ou yarn

### Instalação
```bash
cd frontend
npm install
```

### Execução em Desenvolvimento
```bash
npm run dev
```

O servidor será iniciado em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

## 📂 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Catalog.tsx
│   │   ├── Order.tsx
│   │   └── Confirmation.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── package.json
```

## 🎯 Especificações Técnicas

### Requisitos Funcionais Implementados
- RF01: Visualizar catálogo ✅
- RF02: Filtrar produtos ✅
- RF03: Realizar encomenda ✅
- RF04: Confirmação de pedido ✅

### Requisitos Não-Funcionais
- RNF07: Design responsivo (mobile, tablet, desktop) ✅
- RNF08: Formulário simples em uma única página ✅
- RNF09: Linguagem acessível sem jargão técnico ✅

## 🔄 Rotas Implementadas

- `/` - Home
- `/catalogo` - Catálogo de produtos
- `/encomenda` - Formulário de encomenda
- `/confirmacao/:orderId` - Confirmação de pedido

## ⚠️ Nota sobre Versão do Node.js

Este projeto utiliza Vite 8.0 que requer:
- Node.js versão 20.19+ ou 22.12+

Se você estiver usando Node.js 18.x, precisará atualizar para uma versão mais recente.

## 👥 Equipe

- **Tainná Andryelli Ribeiro** - Back-end e Arquitetura
- **Bárbara Mór da Mata** - Back-end e Banco de Dados
- **Ígor Haag Rodrigues** - Front-end e Design

## 📝 Licença

© 2026 Doce Encanto - Bolos Artesanais. MIT License.

