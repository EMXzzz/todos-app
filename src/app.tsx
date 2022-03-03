import {useEffect, useState} from "react";
import {NoteCreator} from "./components/note-creator";
import {Note} from "./components/note";
import {
    getLocalStorageNotes, 
    setLocalStorageNotes,
} from "./helpers/local-storage";

import './app.css';

export const App = () => {
    const [noteText, setNoteText] = useState<string>('')
    const [notes, setNotes] = useState<string[]>([])

    useEffect(() => {
        if (notes.length > 0) {
            setLocalStorageNotes(notes)
        }
    }, [notes])

    useEffect(() => {
        const storageNotes = getLocalStorageNotes('notes')

        if (storageNotes) {
            setNotes(storageNotes)
        }
    }, [])

    const handleSubmit = () => {
        setNotes([...notes, noteText])
        setNoteText('')
    }

    const handleDelete = (note: string) => {
        const prepareNotes = notes.filter((e) => e !== note)
        setNotes(prepareNotes)
    }

return (  
    <div className="app">
        <h1 className="title">TO-DO</h1>

        <div className="containerCreator">
            <NoteCreator 
                text={noteText}
                onChange={setNoteText}
                onSubmit={handleSubmit}
            />
        </div>
      
        <ol className="notes">
            {notes.map((note, index) => ( 
                <Note
                    key={index}
                    number={index + 1}
                    note={note}
                    onDelete={handleDelete}
                />
            ))}
        </ol> 
    </div>
  )
}

  
