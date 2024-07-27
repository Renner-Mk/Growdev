async function deleteNote(noteId) {
    try {
        const response = await api.delete(`/note/${noteId}`)

        if(response.status === 200){
            alert('Recado deletado com sucesso')
        }


    } catch (error) {
        console.error("Erro ao cadastrar nota", error)
    }
}