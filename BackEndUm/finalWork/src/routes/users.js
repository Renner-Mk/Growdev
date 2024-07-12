import express from "express";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid'
import { validateUserRestration } from "../middlewares/validation";

const router = express.Router();

export const users = []

router.post('/signup', validateUserRestration, async (request, response) =>{
    const {name, email, password} = request.body

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: uuidv4(),
        name,
        email,
        password: hashedPassword
    }

    users.push(newUser)

    response.status(201).json({
        message: `Seja bem vindo ${name} ! Pessoa usuária registrada com sucesso!`
    })
})

export default router