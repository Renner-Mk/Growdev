const form = document.getElementById('date')
const checkboxRequired = document.querySelectorAll('input[name="areas-of-interest"]');
const office = document.querySelectorAll('input[name="office"]');
const userName = document.getElementById('name')
const address = document.getElementById('address')
const state = document.getElementById('state')
const city = document.getElementById('city')
const curriculum = document.getElementById('curriculum')

function verifyCheckbox(arr){
    let checkedTrue = ''
    arr.forEach(function (value) {
        if(value.checked){
            checkedTrue += `${value.value}. `
        }
    })
    return checkedTrue
}
function officeVerify(arr){
    let officeValue
    arr.forEach(function (value) {
        if(value.checked){
            officeValue = value.value
        }
    })
    return officeValue
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const isChecked = verifyCheckbox(checkboxRequired)

    if(!isChecked){
        alert("Marque pelo menos uma das areas de interese!")
    }

    if(isChecked){
        console.log(`Nome: ${userName.value}`)
        console.log(`Endereço: ${address.value}`)
        console.log(`Cidade: ${city.value}`)
        console.log(`Estado: ${state.value}`)
        console.log(`Cargo: ${officeVerify(office)}`)
        console.log(`Areas de interese: ${isChecked}`)
        if(curriculum.value){
            console.log(`Curriculo: ${curriculum.value}`)
        }
    }
})