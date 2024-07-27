import express from "express";
import { v4 as uuidv4} from 'uuid'

import { users } from './users'

const router = express.Router()

const notes = []

router.post ('/', (request, response) =>{
    const {title, description, userId} = request.body

    const user = users.find(user => user.id === userId)

    if(!user){
        return response.status(404).json({
            message: 'Usuario não encontrado'
        })
    }

    const newNote = {
        id: uuidv4(),
        title,
        description,
        userId
    }

    notes.push(newNote)

    response.status(201).json({message: 'Recado criado com sucesso.', newNote})
})

router.put('/:id', (request, response) => {
    const { id } = request.params
    const {title, description} = request.body

    const note = notes.find(note => note.id === id)

    if(!notes){
        return response.status(404)
    }

    note.title = title
    note.description = description

    response.status(200).json({
        message: 'Recado alterado com sucesso',
        note
    })
    
})

router.delete('/:id', (request, response) => {
    const { id } = request.params

    const note = notes.findIndex(note => note.id === id)

    if(note === -1){
        return response.status(404).json({
            message: "Nota não encontrada"
        })
    }

    notes.splice(note, 1)

    response.status(200).json({
        message: "nota deletada com sucesso."
    })
})

router.get('/:id', (request, response) =>{
    const { id } = request.params

    const user = users.find(user => user.id === id)

    if(!user){
        return response.status(404)
    }

    const userNote = notes.filter(note => note.userId === id)

    response.status(200).json({
        message: "Recados do usuario solicitado:",
        userNote
    })
})

// Rota para listar recado por id
router.get("/details/:id", (request, response) => {
    const { id } = request.params
  
    const note = notes.find(note => note.id === id)
  
    if (!note) {
      return response.status(404).json({
        message: "Recado não encontrado."
      })
    }
  
    response.status(200).json(note)
  })


export default router