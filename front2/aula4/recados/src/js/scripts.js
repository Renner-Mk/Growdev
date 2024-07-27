const notesContainer = document.querySelector('.notes-list')

async function fecthNotes(){
    try{
        notesContainer.innerHTML = '' // Limpa o HTML

        // const userId = '3f683271-f165-465a-ba74-3ab229dd93df'        
        const userId = localStorage.getItem('userId')
        console.log(userId)

        const response = await api.get(`/note/${userId}`)
        const notes = response.data.userNote

        console.log(notes)

        notes.forEach(note => {
            const noteCard = document.createElement('div')
            noteCard.classList.add('card')

            noteCard.innerHTML = `
            <h2 class="card-title">${note.title}</h2>
            <p class="card-description">${note.description}</p>

            <div class="card-icons">
                <i class="fa-solid fa-trash" data-id=${note.id}></i>
                <i class="fa-solid fa-edit" data-id=${note.id}></i>
            </div>
            `

            notesContainer.appendChild(noteCard)

            const deleteIcon = noteCard.querySelector('.fa-trash')

            // Deletar Nota

            deleteIcon.addEventListener('click', () => {
                const noteId = deleteIcon.getAttribute('data-id')
                console.log(noteId)
                deleteNote(noteId)
            })


            // editar nota

            const editIcon = noteCard.querySelector('.fa-edit')
            editIcon.addEventListener('click', () =>{
                const noteId = editIcon.getAttribute('data-id')
                console.log(noteId)
                navagateToEditPage(noteId)
            })
        });

        if(notes.lenght === 0){
            const emptyNoteList = document.createElement('h3')
            emptyNoteList.innerText = 'Nenhum recado encontrado.'
            notesContainer.appendChild(emptyNoteList)
        }


    }catch (error){
        console.error('Erro ao buscar recados.', error)
    }
}

function navagateToEditPage(noteId){
    location.href = `edit-note.html?id=${noteId}`
}




fecthNotes()