import e, { response } from "express"
import {users} from '../routes/users'

export function validateUserRestration(request, response, next){
    const {name, email, password} = request.body
    const user = users.find(user => user.email === email)

    if(!name){
        return response.status(400).send('Por favor, verifique se passou o nome.'
        )
    }
    if(!email){
        return response.status(400).send('Por favor, verifique se passou o email.'
        )
    }
    
    if(user){
        return response.status(400).send('Email já cadastrado, insira outro.')
    }

    if(!password){
        return response.status(400).send('Por favor, verifique se passou a senha.')
    }

    next()
}

export function validateUserLogin(request, response, next){
    const { email, password} = request.body

    if(!email){
        response.status(400).send('Insira um e-mail válido.')
    }
    if(!password){
        response.status(400).send('Insira uma senha válida.')
    }

    next();
}

export function validateCreateMessage(request, response, next){
    const {email, title, description} = request.body

    if(!title){
        response.status(400).send('Por favor, verifique se passou o titulo.')
    }
    if(!description){
        response.status(400).send('Por favor, verifique se passou uma descrição.')
    }

    const user = users.find(user => user.email === email)

    if(!user){
        return response.status(404).send("Email não encontrado, verifique ou crie uma conta")
    }

    
    next();
}

export function validateUpdateMessage(request, response, next){
    const {title, description} = request.body

    if(!title){
        response.status(400).send('Por favor, verifique se passou o titulo.')
    }
    if(!description){
        response.status(400).send('Por favor, verifique se passou uma descrição.')
    }

    next();
}
