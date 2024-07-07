import express, { response } from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors());
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

app.listen(3000, () => {
    console.log("Servidor Iniciado");
});


