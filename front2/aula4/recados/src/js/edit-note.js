const formEditNote = document.getElementById('form-edit-note')
const title = document.getElementById('title-edit')
const description = document.getElementById('description-edit')

const urlParamns = new URLSearchParams(location.search)
const noteId = urlParamns.get('id')

async function populateEditForm(){
    try {
        const response = await api.get(`/note/details/${noteId}`)
        const note = response.data

        title.value = note.title
        description.value = note.description

    } catch (error) {
        console.error("Erro ao Popular nota", error)
    }
}

populateEditForm()

formEditNote.addEventListener('submit', (event) => {
    event.preventDefault()

    const note = {
        title: title.value,
        description: description.value
    }

    updatedNote(noteId, note)
})

async function updatedNote(noteId, note){
    try {
        const response = await api.put(`/note/${noteId}`, note)

        if(response.status === 200){
            alert('Recado alterado com sucesso!')
        }
        location.href = 'index.html'

    } catch (error) {
        console.error("Erro ao cadastrar nota", error)
    }
}