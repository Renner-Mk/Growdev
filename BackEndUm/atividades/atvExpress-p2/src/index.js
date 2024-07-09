import express, { request, response } from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors());
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

app.listen(3000, () => {
    console.log("Servidor Iniciado");
});

const carDealership = [];

// criar carro e adicionar a lista
app.post('/cars', (request, response) => {
    const {model, brand, year, color, price} = request.body;
    if(!model || !brand || !year || !color || !price){
        return response.status(400).json({message: "Dados insuficientes"});
    };

    const car = {
        id: uuidv4(),
        model,
        brand,
        year,
        color,
        price
    };

    carDealership.push(car);
    response.status(201).json({message: 'Carro cadastrado com sucesso.'})
}) 

app.get('/cars', (request, response) => {
    if(carDealership.length === 0){
        return response.status(404).json({message: 'Nenhum veiculo encontrado'})
    }

    response.json(carDealership)
})

app.get('/cars/filtered', (request, response) => {
    const { filtro } = request.query;
    let filteredCars = carDealership
    filteredCars = filteredCars.filter(car => car.brand === filtro)
    if(filteredCars.length === 0){
        return response.status(404).json({message: 'Marca não encontrada'})
    }
    response.status(200).json({message: `Todos os veiculos da marca ${filtro}`, filteredCars})
})

app.put('/cars/:id', (request, response) =>{
    const { id } = request.params
    const {color, price} = request.body


    const carsId = carDealership.find( carId => carId.id === id);
    console.log(carsId);
    if(!carsId){
        return response.status(404).json({message: "Veículo, não encontrado."});
    }

    carsId.color = color;
    carsId.price = price;
    response.status(200).json({message: "Preço e cor alterado com sucesso"})
})

app.delete('/cars/:id', (request, response) =>{
    const { id } = request.params

    const carId = carDealership.findIndex( car => car.id === id)

    if(carId === -1){
        return response.status(404).json({message: "Veículo, não encontrado."});
    }

    carDealership.splice(carId, 1)
    response.status(201).json({message: "Carro deletado com sucesso"})
})

const users = []

app.post('/user', async (request,response) =>{
    try {
        const { name, email, password} = request.body
        const hashedPassword = await bcrypt.hash(password, 10)

        if(!name || !email || !password ){
            return response.status(400).json({message: 'Nome, email e senha são obrigatórios'})
        }
        
        const existingUser = users.find(user => user.email === email)
    
        if(existingUser){
            return response.status(400).json({message: 'Usuário já existe.'})
        }
    
        const newUser = {
            name,
            email,
            password: hashedPassword
        }
    
        users.push(newUser)
        response.status(201).json({message: 'Usuário criado com sucesso.'})
    }catch{
        response.status(500).json({message: 'Erro ao cadastrar Usuário.'})
    }
})

app.post('/user/login', async (request, response) =>{
    try{
        const {email, password} = request.body

        if(!email || !password){
            return response.status(400).json({message: 'Email e senha são obrigatórios'})
        }

        const user = users.find( user => user.email === email)

        if(!user){
            return response.status(404).json({message: "Email não encontrado"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return response.status(400).json({message: 'Senha incorreta'})
        }

        response.status(200).json({message: 'Login Foi um sucesso'})
    }catch{
        response.status(500).json({message: 'Erro ao efetuar login do Usuário.'})
    }
})
