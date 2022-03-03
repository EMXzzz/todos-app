import {useState} from "react";
import {NoteCreator} from "./components/note-creator";
import './app.css'
import { Note } from "./components/note";

export const App = () => {
    const [noteText, setNoteText] = useState<string>('')
    const [addNote, setAddNote] = useState<string[]>([])

    const handleSubmit = () => {
        setAddNote([...addNote, noteText])
        setNoteText('')
    }

return (  
    <div className="app">
        <div className="containerCreator">
            <h1 className="title">TO-DO</h1>
                <div className="noteContainer">
                    <NoteCreator 
                        text={noteText}
                        onChange={setNoteText}
                        onSubmit={handleSubmit}
                    />
                </div> 
        </div>
        <ol className="containerNotes">
            {addNote.map((note, index) => ( 
                <Note
                    key={index}
                    number={index + 1}
                    note={note}
                />
            ))}
        </ol> 
    </div>
  )
}

  
