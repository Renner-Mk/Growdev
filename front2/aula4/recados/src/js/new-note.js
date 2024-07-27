const formNewNote = document.getElementById('form-new-note')
const title = document.getElementById('title')
const description = document.getElementById('description')

async function populateEditForm(){
    try {
        const response = await api.get(`/note/datails/${noteId}`)
        const note = response.data

        title.value = note.title
        description.value = note.description

    } catch (error) {
        console.error("Erro ao Popular nota", error)
    }
}

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
            console.error("Erro ao criar nota", error)
    }
}

formNewNote.addEventListener('submit', (event) => {
    event.preventDefault()

    //const userId = '3f683271-f165-465a-ba74-3ab229dd93df'
    const userId = localStorage.getItem('userId')
    console.log(userId)

    const newNote = {
        title: title.value,
        description: description.value,
        userId,
    }

    createNewNote(newNote)
})