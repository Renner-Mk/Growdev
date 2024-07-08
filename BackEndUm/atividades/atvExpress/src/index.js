import express, { response } from 'express';
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
        return response.status(404).json({message: 'Nenhum usuário encontrado'})
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