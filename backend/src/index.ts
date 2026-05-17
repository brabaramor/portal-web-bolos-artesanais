import express from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});