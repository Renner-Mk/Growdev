const pessoa = {
    id: 1,
    primeiroNome: "Patrick",
    ultimoNome: "Miranda",
    idade: 12
}


console.log(pessoa.id)//Objeto.atributo chama o valor do atributo, se ele nao existe retorna undefined

const uno = {}
uno.carta = 4
uno.jogada = "Uno"
uno.ganhador = "Ninguem"

console.log(uno.jogada)

let nome = "oi"

const asdf = {
    nome
}

nome = "odd"

asdf.nome = nome
console.log(asdf)

let key = "idade"

console.log(pessoa[key])