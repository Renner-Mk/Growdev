import express from "express";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid'
import { validateUserLogin, validateUserRestration } from "../middlewares/validation";

const router = express.Router();

export const users = []

router.post('/signup', validateUserRestration, async (request, response) =>{
    try {
        const {name, email, password} = request.body

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            idUser: uuidv4(),
            name,
            email,
            password: hashedPassword
        }

        users.push(newUser)

        response.status(201).json(`Seja bem vindo ${name}! Pessoa usuária registrada com sucesso!`)

    } catch {
        response.status(500).json({
            message: 'Erro ao entrar na pagina.'
        });
    }
})

router.post('/login', validateUserLogin, async (request, response) =>{
    try{
        const {email, password} = request.body

        const user = users.find(user => user.email === email)

        if(!user){
            return response.status(404).send("Email não encontrado no sistema, verifique ou crie uma conta")
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch){
            return response.status(404).send("Credenciais invalidas")
        }

        response.status(200).send(`Seja bem vindo ${user.name} ! Pessoa usuária logada com sucesso!`)
    }catch{
        response.status(500).json({
            message: 'Erro ao entrar na pagina.'
        });
    }
})



export default router