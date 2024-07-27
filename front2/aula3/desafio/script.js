const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const form = document.getElementById('formulario')

async function createNewMessage(event){

    try {

        const newNote = {
            title: titulo.value,
            description: descricao.value,
            userId: "e41acba9-ec3f-46ed-97ab-d5d36371f824"
        }

        event.preventDefault() 

        const response = await api.post('/note', newNote)
        console.log(response)
        if(response.status === 201){
            console.log('Recado cadastrado com sucesso!')
        }

    } catch (error) {
        console.log("erro de servidor", error)
    }

    
}
    
form.addEventListener('submit', createNewMessage)
