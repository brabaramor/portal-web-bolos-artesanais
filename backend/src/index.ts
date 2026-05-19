import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors({
  origin: 'http://localhost:5173' // porta padrão do Vite
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});