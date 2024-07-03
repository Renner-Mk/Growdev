
import express, { response } from 'express';
import cors from 'cors';
import { request } from 'http';
const app = express();
app.use(express.json());
app.use(cors()) // pedindo pra usar o midwhere
app.use(express.json())


const users = [
    {id: 1, name: "Patrick", available: true},
    {id: 2, name: "Erick", available: false},
    {id: 3, name: "Adriana", available: true},
    {id: 4, name: "Paulo", available: true}
]
app.get('/', (request, response) => {
    response.send('Hello, Express!');
})

app.post('/users', (resquest, response) =>{
    // const name = resquest.body.name
    // const available = resquest.body.available
    
    const {name, available} = resquest.body
    if(!name){
        return response.status(400).json({message: "Nome de usuário é obrigatório."})
    }
    const newUser = {
        id: users.length + 1,
        name,
        available: available ?? true // se availabe for null ou undefined recere true
    }

    users.push(newUser)

    response.status(201).json({message: "Usuario adicionado com sucesso.", user: newUser})

})

app.get('/users', (resquest, response) => {
    if(users.length === 0){
        return response.status(404).json({message: 'Nenhum usuário encontrado'})
    }

    response.json(users)
})

app.put("/users/:id", (request, response) => {
    const { id } = request.params

    const {name, available} = request.body

    const user = users.find(user => user.id === parseInt(id))

    if(!user){
        return response.status(404).json({message: "Usuario nao encontrado"})
    }

    user.name = name
    user.available = available

    response.status(200).json({message: "Usuario alterado com sucesso.", user})
})

app.get('/users/filter', (request, response) => {
    const { filtro } = request.query
    
    let filterUsers = users
    if(filtro === "ativo"){
        filterUsers = filterUsers.filter(user => user.available === true)
    }else if(filtro === "inativo"){
        filterUsers = filterUsers.filter(user => user.available === false)
    }

    response.status(200).json(filterUsers)
})

app.listen(3000, () => {
    console.log("Servidor rodando, porta 3000")
})