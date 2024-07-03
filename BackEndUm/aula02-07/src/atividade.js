import express, { response } from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors()) // pedindo pra usar o midwhere
app.use(express.json())

const travels = [
    {id: 1, travel: "Rio de Janeiro", price: 3500, promotion: 15},
    {id: 2, travel: "Minas", price: 2150, promotion: 10},
    {id: 3, travel: "Bahia", price: 1500, promotion: 5},
    {id: 4, travel: "Amazonas", price: 4000, promotion: 25},
]

app.post("/travels", (request, response) => {
    const { travel, price, promotion } = request.body

    if(!travel || !price || !promotion){
        return response.status(400).json({message: "Viavem, preço e promoção é obrigatorio."})
    }
    console.log(travel)
    console.log(price)
    console.log(promotion)

    const newTravel = {
        id: travels.length + 1,
        travel,
        price,
        promotion
    }

    travels.push(newTravel)
    response.status(201).json({message: `${newTravel.travel} criado com sucesso! Seu identificador é ${newTravel.id}, seu preço é: ${newTravel.price} e temos ${newTravel.promotion} em promoção`})
})

app.get("/travels", (request, response) => {
    if(travels.length === 0){
        return response.status(404).json({message: 'Nenhuma viagem encontrada'})
    }
    response.status(200).json(travels)
})

app.put("/travels/:id", (request, response) => {
    const { id } = request.params
    const {travel, price, promotion} = request.body

    const travl = travels.find(trav => trav.id === parseInt(id))
    console.log(id)
    if(!travl){
        return response.status(404).json({message: "Usuario nao encontrado"})
    }
        travl.travel = travel ?? travl.travel
        travl.price = price ?? travl.price
        travl.promotion = promotion ?? travl.promotion
        travels[id] = travl

    response.status(201).json({message: `${travl.travel} alterado com sucesso!, seu preço é: ${travl.price} e temos ${travl.promotion} em promoção`})
})

app.listen(3000, () => {
    console.log("Servidor rodando, porta 3000")
})
