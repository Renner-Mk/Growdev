const increment = document.getElementById('button-1')
const decrement = document.getElementById('button-2')

const text = document.querySelector('.text')
console.log(text)
let conter = 0
function couterClick(event){
    conter++
    text.innerText = `O contador está com ${conter} cliques.`
}
function couterClickReboot(event){
    conter = 0
    text.innerText = `O contador está com ${conter} cliques.`
}

increment.addEventListener('click', couterClick)
decrement.addEventListener('click', couterClickReboot)