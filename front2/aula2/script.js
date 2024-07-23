let counter = 0

const element = document.getElementById('counter')

const button = document.querySelector('button')

function incrementCounter(event){
    //console.log(event)
    //console.log(event.type)
    //console.log(event.clientX, event.clientY)
    counter++
    element.innerText = counter

    console.log(this)
    this.innerText = 'Mudou o texto'
}

button.addEventListener('click', incrementCounter)




// const element = document.querySelector('.element')
// function highlighted(){
//     element.classList.add('highlighted')
// }

// function unHighlighted(){
//     element.classList.remove('highlighted')
// }

// element.addEventListener('mouseover', highlighted)
// element.addEventListener('mouseout', unHighlighted)




// const inputElement = document.getElementById('input')
// const feedback = document.getElementById('feedback')

// inputElement.addEventListener('keydown', (event) => {
//     feedback.innerText = `A tecla digitada foi ${event.key}`
// })

// inputElement.addEventListener('keyup', () => {
//     feedback.innerText = 'Tecla liberada.'
// })




// const promessa = new Promise((resolve, reject) => {
//     const condicao = false
//     if(condicao) {
//         setTimeout( () =>{
//             resolve("Tudo certo.")
//         }, 2000)
//     }else{
//         reject("Ocorreu um Erro")
//     }
// })

// promessa.then(resltado => console.log(resltado)).catch(error => console.log(" Erro ", error))




// async function fechUners(){
//     try{
//         const response = await axios.get("https://reqres.in/api/users")
//         const users = response.data.data

//         console.log(users)
//     }catch (error){
//         console.error('Erro ao acessar', error)
//     } finally{ // executa independente de qualquer coisa
//         console.log("Finalizou")
//     }
// }

// fechUners()


function fecthUsers() {
    axios.get("https://reqres.in/api/users")
        .then(response => {
            const users = response.data.data
            console.log(users)
        }).catch(error => {
            console.error("Erro ao buscar Usúarios", error)
        }).finally(() => console.log("Executou"))
}

fecthUsers()