import express, { json } from "express";
import { v4 as uuidv4} from 'uuid'
import { validateCreateMessage, validateUpdateMessage } from "../middlewares/validation";

import { users } from './users'

const router = express.Router()

const messages = []

router.post('/message', validateCreateMessage, (request, response) =>{
    const {email, title, description} = request.body

    const newMessage = {
        email,
        title,
        description,
        idMessage: uuidv4()
    }

    messages.push(newMessage)

    response.status(201).json({
        message: "Mensagem criada com sucesso!",
        newMessage
    })

})

router.get('/message/:email', (request, response) => {
    const { email } = request.params

    const messag = messages.filter(msm => msm.email === email)

    if(!messag){
        return response.status(404).send("Email não encontrado, verifique ou crie uma conta")
    }

    response.status(200).json({
        message: "Seja bem-vindo!",
        messagesUser: messag
    })



})

router.put('/message/:id', validateUpdateMessage, (request, response) => {
    const { title, description} = request.body
    const { id } = request.params

    const mensag = messages.find(msm => msm.idMessage === id)

    if(!mensag){
        return response.status(404).send("Por favor, informe um id válido da mensagem")
    }

    mensag.title = title
    mensag.description = description
    
    response.status(200).json({
        message: 'Mensagem atualizada com sucesso !',
        mensag
    })

})

router.delete('/message/:id', (request, response) =>{
    const { id } = request.params

    const messag = messages.findIndex(msm => msm.idMessage === id)

    if(messag === -1){
        return response.status(404).send("Mensagem não encontrada, verifique o identificador em nosso banco")
    }

    messages.slice(messag, 1)

    response.status(200).send("Mensagem apagada com sucesso")
})

export default router