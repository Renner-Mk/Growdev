import { response } from "express"
import {users} from '../routes/users'

export function validateUserRestration(request, response, next){
    const {name, email, password} = request.body
    const user = users.find(user => user.email === email)

    if(!name){
        return response.status(400).json({
            message: 'Por favor, verifique se passou o nome.'
        })
    }
    if(!email){
        return response.status(400).json({
            message: 'Por favor, verifique se passou o email.'
        })
    }
    
    if(user){
        return response.status(400).json({
            message: 'Email já cadastrado, insira outro.'
        })
    }

    if(!password){
        return response.status(400).json({
            message: 'Por favor, verifique se passou a senha.'
        })
    }

    next()
}