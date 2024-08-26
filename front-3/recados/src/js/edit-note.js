const formEditNote = document.getElementById('form-edit-note')
// console.log(formEditNote)
const titleEdited = document.getElementById('title-edit')
// console.log(titleEdited)
const descriptionEdited = document.getElementById('description-edit')

// const urlParamns = new URLSearchParams(location.search)
// const noteId = urlParamns.get('id')

// const noteId = localStorage.getItem('noteId')
// console.log(noteId)
// async function populateEditForm(){
//     try {
//         const response = await api.get(`/note/details/${noteId}`)
//         const note = response.data
//         // console.log(note)
//         titleEdited.value = note.title
//         descriptionEdited.value = note.description

//     } catch (error) {
//         console.error("Erro ao Popular nota", error)
//     }
// }

// populateEditForm()

const editNoteModal = document.getElementById('editNoteCard');
editNoteModal.addEventListener('show.bs.modal', async function (event) {
    const noteId = event.relatedTarget.attributes[3].value
                
    localStorage.setItem('noteId', noteId)
    try {
        const response = await api.get(`/note/details/${noteId}`);
        const note = response.data;

        titleEdited.value = note.title;
        descriptionEdited.value = note.description;
    } catch (error) {
        console.error("Erro ao carregar os dados da nota", error);
    }
});


formEditNote.addEventListener('submit', (event) => {
    const note = {
        title: titleEdited.value,
        description: descriptionEdited.value
    }

    updatedNote(localStorage.getItem('noteId'), note)
})

async function updatedNote(noteId, note){
    try {
        const response = await api.put(`/note/${noteId}`, note)

        if(response.status === 200){
            alert('Recado alterado com sucesso!')
            localStorage.removeItem('noteId')
            
        }
        

    } catch (error) {
        console.error("Erro ao cadastrar nota", error)
    }
}
