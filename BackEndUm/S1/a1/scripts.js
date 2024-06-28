// alert('hello, World')
// let nome = `Patrick`
// let idade = 23
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
// nome = `Miranda`
// idade = 18
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

/**
 * > maior
 * < menor
 * >= igual ou maior
 * <= igual ou menor
 * == igual
 * === estritamente igual em valor e tipo de valor
 * != deve ser diferente
 */

// let n1 = 1
// let n2 = 2

// let valor = n1 > n2
// console.log(valor)
//  valor = n1 < n2
// console.log(valor)
//  valor = n1 >= n2
// console.log(valor)
//  valor = n1 <= n2
// console.log(valor)
//  valor = n1 == n2
// console.log(valor)
//  valor = n1 =! n2
// console.log(valor)

let mediaPonderada
let nota1 = 9
let nota2 = 7
let nota3 = 7

let peso1 = 2
let peso2 = 3
let peso3 = 5

mediaPonderada = (nota1*peso1 + nota2*peso2 + nota3*peso3)/(peso1+peso2+peso3)
if(mediaPonderada >= 7){
    console.log(`Aprovado com ${mediaPonderada}`)
}else{
    console.log(`Reprovado com ${mediaPonderada}`)
}

console.log(' ')
console.log(' ')
console.log(' ')

let idade = 23
let messes = 7
let dias = 18
console.log((idade * 365) + (messes * 30) + dias)


console.log(' ')
console.log(' ')
console.log(' ')



let num1 = 8
let num2 = 3
console.log(`A soma é ${num1 + num2}`)
console.log(`A subtração é ${num1 - num2}`)
console.log(`A divisao é ${num1 / num2}`)
console.log(`A potencia é ${num1 ** num2}`)
console.log(`O resto é ${num1 % num2}`)
console.log(`A Multiplicação é ${num1 * num2}`)

console.log(' ')
console.log(' ')
console.log(' ')

let age = 30
if (age > 17){
    console.log('maior de idade')
}else{
    console.log('Ainda não é maior de idade')
}

console.log(' ')
console.log(' ')
console.log(' ')


let numero = 31
let resto = numero % 2
if (resto == 0){
    console.log('par')
}else{
    console.log('impar')
}

console.log(' ')
console.log(' ')
console.log(' ')

let numero1 = 15
let numero2 = 10
let operador = '*'

if ( operador == '+' ){
console.log(`a soma é ${numero1 + numero2}`)
}else if(operador == '-'){
    console.log(`a subtração é ${numero1 - numero2}`)
}else if(operador == '/'){
    console.log(`a divisão é ${numero1 / numero2}`)
}else if(operador == '*'){
    console.log(`a multiplicação é ${numero1 * numero2}`)
}else if(operador == '**'){
    console.log(`a potenciação é ${numero1 ** numero2}`)
}else if(operador == '%'){
    console.log(`o resto da divisao é ${numero1 % numero2}`)
}