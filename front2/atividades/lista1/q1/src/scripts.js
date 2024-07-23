const text = document.getElementById('text')
const button = document.querySelector('button')

function changeText(event){
    const name = prompt('Digite seu nome')

    text.innerText = `${name}! Você está deixando o seu site dinâmico.`
}

button.addEventListener('click', changeText)