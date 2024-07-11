import express from 'express';
import cors from 'cors';

import usersRouter from './routes/users'

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});