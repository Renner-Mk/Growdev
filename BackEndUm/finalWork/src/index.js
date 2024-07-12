import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

import mainPage from './routes/mainPage'
import singup from './routes/users'

app.use('/', mainPage);
app.use('/', singup);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
