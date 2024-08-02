import express, { request, response } from "express";
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

// router.get('/:id', (request, response) =>{
//     const { id } = request.params

//     const user = users.find(user => user.id === id)

//     if(!user){
//         return response.status(404)
//     }

//     const userNote = notes.filter(note => note.userId === id)

//     response.status(200).json({
//         message: "Recados do usuario solicitado:",
//         userNote
//     })
// })

// rota com paginação

router.get('/:id', (request, response) => {
    const { id } = request.params
    const {page, perPage} = request.query

    const currentPage = parseInt(page) || 1 // valor padrao se nao for passado nada
    const itemsPerPage = parseInt(perPage) || 10

    const user = users.find(user => user.id === id) // buscando usuario

    if(!user){ // se nao encontrar
        return response.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    const userNotes = notes.filter(note => note.userId === id) // pegango todas as notas do usuario encontrado

    const startIndex = (currentPage - 1) * itemsPerPage // descobre o index que vai começar a pegar as notas no caso de começar 1 - 1) *0 = 0
    const endIndex = startIndex + itemsPerPage // ponto final do corte 

    const paginatedNotes = userNotes.slice(startIndex, endIndex)// atentar que no slice ele nao pega o item de endIndex mas sai vai até ele ou seja nao pega o item do index 3 mas sim pega como item final o 2 no caso pega o 0 1 2 totalizando 3 por pagina como definido no front

    const totalItems = userNotes.length // quantidade de notas no arrey

    const totalPages = Math.ceil(totalItems / itemsPerPage) // faz o calculo quantas paginas vai ter, mas é sempre arredondado para cima mesmo se a ultima pagina nao tenha o total de itens que ela suporta

    response.status(200).json({
        userNotes: paginatedNotes,
        totalPages,
        currentPage
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