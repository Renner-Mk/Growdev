Atividade para exercitar o uso do node e utilizando o render para hospedar

post - 
https://atividade-pratica-express.onrender.com/cars
modelo:
{
    "model": "Honda",
    "brand": "Civic",
    "year": "2014 / 2015",
    "color": "branco",
    "price": "48000"
}

get com filtro
https://atividade-pratica-express.onrender.com/cars/filtered?filtro=Civic

put - 
https://atividade-pratica-express.onrender.com/cars/     (id do carro pegar no get)
modelo:
{
    "color": "roxo",
    "price": "158000"
}

delete
https://atividade-pratica-express.onrender.com/cars/      (id do carro pegar no get)



CRIAÇÃO DE USUARIO:

POST
https://atividade-pratica-express.onrender.com/user
Modelo:
{
    "name": "Patrick",
    "email": "nome@email.com",
    "password": "abc1234"
}

POST - LOGIN
https://atividade-pratica-express.onrender.com/user/login
{
    "email": "nome@email.com",
    "password": "abc1234"
}
