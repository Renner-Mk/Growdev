/* Desenvolva aqui a rotina */
function calcular(){
    const valorBase = document.getElementById("valor_base")
    const base = Number(valorBase.value)
    const valorTransporte = document.getElementById("valor_transporte")
    const transporte = Number(valorTransporte.value)
    const valorAlimentacao = document.getElementById("valor_alimentacao")
    const alimentacao = Number(valorAlimentacao.value)

    const soma = base + transporte + alimentacao
    const resposta = document.getElementById('valor_receita')
    resposta.value = soma

    const valorCarro = document.getElementById("valor_automovel")
    const carro = Number(valorCarro.value)
    const valorFaltas = document.getElementById("faltas")
    const falta = Number(valorFaltas.value)

    const total = carro + falta
    const desconto = document.getElementById('valor_descontos')
    desconto.value = total

    const valorTotal = document.getElementById('valor_total')
    const valTotal = soma - total
    valorTotal.value = valTotal
}

const button = document.getElementById('btn_calcular')
button.onclick = () => calcular()

const inputListener = document.querySelectorAll('input')
inputListener.forEach(input => {
    input.addEventListener('blur', calcular)
})

