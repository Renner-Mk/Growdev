// const aluno = {
//     nome: "Patrick",
//     idade: 20,
//     curso: "full-Stack"
// }

// console.log(aluno.nome)
// aluno.nota = 10
// aluno.curso = "Full Stack"

// if(aluno.idade < 18){
//     console.log("Menor de idade")
// }else{
//     console.log("Maior de idade")
// }
// console.log(aluno) 

// const livro1 = {
//     titulo: "Algo ai",
//     autor: "Alguem",
//     lançado: 1954,
//     idioma: "português",
//     disponibilidade: true
// }
// const livro2 = {}

// for(const livro in livro1){
//     livro2[livro] = livro1[livro]
// }
// console.log(livro2)

const arreys = []
const carro1 = {
    marca: 'mara',
    test: "asd",
    ano: 2156,
    cor: "rpeto"
}
const carro2 = {
    marca: 'paro',
    test: "fvv",
    ano: 2000,
    cor: "azul"
}
arreys.push(carro1, carro2)
console.log(arreys)
for(const arrey of arreys){
    console.log(`Marca: ${arrey.marca}`)
}
