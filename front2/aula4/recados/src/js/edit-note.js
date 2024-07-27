const formEditNote = document.getElementById('form-edit-note')
const title = document.getElementById('title-edit')
const description = document.getElementById('description-edit')

const urlParamns = new URLSearchParams(location.search)
const noteId = urlParamns.get('id')

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