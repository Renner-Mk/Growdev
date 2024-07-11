import express, { request, response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { validateUserRestration } from '../middlewares/validation'

const router = express.Router() // para interligar e poder usar em outro arquivo

const users = []

router.post('/singup', validateUserRestration, async (request, response) => {
    const {name, email, password} = request.body
    
    const emailUser = users.find( user => user.email === email)
    
    if(emailUser){
        return response.status(400).json({message: 'Email já cadastrado'})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUser = {
        id: uuidv4,
        name,
        email,
        password: hashedPassword
    }
    
    users.push(newUser)
    
    response.status(201).json({message: 'Conta criada com sucesso!', user: newUser})
})

router.post('/login', async (request, response) => {
    const {email, password} = request.body

    const user = users.find(user => user.email === email)

    if(!user){
        return response.status(404).send("Usuario não encontrado")
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch){
        return response.status(404).send("Credenciais invalidas")
    }

    response.status(200).json({
        message: "Login feito com sucesso!",
        userId: user.id
    })
})


export default router