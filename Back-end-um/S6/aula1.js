const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

function somaSalarios (buscaSalario){
    let salario = 0
    for(let i = 0; i < buscaSalario.length; i++){
        salario += buscaSalario[i].salario
    }
    return salario
}

const totalPessoas = data.length
console.log(`Pessoas totais: ${totalPessoas}`)
const totalPessoasF = data.filter( genero => genero.sexo === "F")
console.log(totalPessoasF.length)
console.log(`Salario total: ${somaSalarios(data)}`)
console.log(`Media de salario total: ${(somaSalarios(data) / data.length).toFixed(2)}`)

const salarioM = data.filter( salar => salar.sexo === "M")
console.log(`Salario Masculino: ${somaSalarios(salarioM)}`)

const mediaSalarioM = (somaSalarios(salarioM) / salarioM.length).toFixed(2)
console.log(`Media de salario Masculino total: ${mediaSalarioM}`)

const samarioMaior = data.some(salar => salar.salario > 7000)
if(samarioMaior){
    console.log("Tem um ou mais salarios que 7000")
} else{
    console.log("Não tem Salarios maior que 7000")
}

const encontrarPessoa = data.findIndex(nomeP => nomeP.nome === 'Eva Trindade')
console.log(`Posição da pessoa: ${encontrarPessoa}`)

const sobrenome = data.filter(sbNome => sbNome.nome.includes("Silva"))
console.log(sobrenome)
console.log(data.map( nom => nom.nome))