const formNewNote = document.getElementById('form-new-note')
const title = document.getElementById('title')
const description = document.getElementById('description')

async function createNewNote(note){
    try {
        const response = await api.post('/note', note)

        if(response.status === 201){
            alert('Recado cadastrado com sucesso.')

            title.value = '' // despois de enviar limpa os campos
            description.value = ''

            location.href = 'index.html'
        }

    } catch (error) {
            if(error.response){
                if(error.response.status === 400){
                    alert(error.response.data.message)
                }

                if(error.response.status === 404){
                    alert(error.response.data.message)
                    location.href = 'login.html'
                }
            }
    }
}

formNewNote.addEventListener('submit', (event) => {
    event.preventDefault()

    const userId = localStorage.getItem('userId')

    const newNote = {
        title: title.value,
        description: description.value,
        userId,
    }

    createNewNote(newNote)
})
