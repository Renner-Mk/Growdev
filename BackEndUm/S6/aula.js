const numeros = [1,3,5,4,7,9,10,11]

const primeiroPar = numeros.findIndex( num => num % 2 === 0)
console.log(`Pimeiro numero par encontrado: ${numeros[primeiroPar]} no index ${primeiroPar}`)
