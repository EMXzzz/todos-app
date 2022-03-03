export const setLocalStorageNotes = (value: string[]) => {
    const notes = JSON.stringify(value)
    localStorage.setItem('notes', notes)
}

export const getLocalStorageNotes = (value: string) => {
    const notes = localStorage.getItem(value) 

    if (notes) {
        return JSON.parse(notes) 
    }

    return null
}