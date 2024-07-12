import express from 'express';
import cors from 'cors';

import usersRouter from './routes/users'
import notesRouter from './routes/notes'

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.use('/users', usersRouter)
app.use('/note', notesRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

