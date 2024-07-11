import express from 'express';
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(cors());
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

const port = 3000

app.listen(port, () =>{
    console.log("Servidor rodando")
})

const users = []

app.post('/user', async (request, response) => {
    const {name, email, password} = request.body
    const hashedPassword = await bcrypt.hash(password, 10)

    if(!name || !email || !password){
        return response.status(400).json({message: "Campos insuficiente preencha todos"})
    }

    const userVerify = users.find( user => user.email === email)

    if(userVerify){
        return response.status(400).json({message: "Usuario Já existente, tente outro email"})
    }
    
    const newUser = {
        id: uuidv4(),
        name,
        email,
        password: hashedPassword
    }

    users.push(newUser)
    response.status(201).json({message: "Usuario criado com sucesso!"})
}) 