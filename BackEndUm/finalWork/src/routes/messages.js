import express from "express";
import { v4 as uuidv4} from 'uuid'
import { validateCreateMessage } from "../middlewares/validation";

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


export default router