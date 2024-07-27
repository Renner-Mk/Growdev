// const passwordField = document.getElementById('senha')
// const togglePassword = document.getElementById('togglePassword')

// togglePassword.addEventListener('click', () => {
//     const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password'

//     passwordField.setAttribute('type', type)

// })

// const esportes = document.querySelectorAll('input[name="esporte"]')

// esportes.forEach(esporte => {
//     //sempre que mudar ele vai falar que trocou
//     esporte.addEventListener('change', () =>{
//         console.log(`A opção escolhida foi ${esporte.value}`)
//     })
// })

const checkBoxes = document.querySelectorAll('input[name="interesses"]')

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', () =>{
        if(checkBox.checked) {
            console.log(`Check Box marcado: ${checkBox.value}`)
        }else{
            console.log(`Check Box desmarcado: ${checkBox.value}`)
        }
    })
})

const select = document.getElementById('cidades')
select.addEventListener('change', () =>{
    console.log(`A cidade ${select.value}`)
})

/** 
 * criar form
 * criar usuario nas notas api
 * captura os elementos do form
 * fazer uma funcção que envia 
 * fazer um ouvidor no formulado botao
 * recupera o evento e faz um .preventDefault()
 * montar o objeto que vai pra api
 * novaNota(){
 *  title: 'asd', ...
 * }
 */