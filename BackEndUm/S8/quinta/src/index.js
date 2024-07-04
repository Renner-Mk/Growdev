import express, { response } from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors()) // pedindo pra usar o midwhere
app.listen(3000, () => {
    console.log("Servidor rodando, porta 3000")
})

