import {useState} from "react";
import {NoteCreator} from "./components/note-creator";
export const App = () => {
    const [noteText, setNoteText] = useState<string>('')
    const [addNote, setAddNote] = useState<string[]>([])

    const handleSubmit = () => {
        setAddNote([...addNote, noteText])
        setNoteText('')
    }

return (  
    <div className="app">
        <h1 className="title">TO-DO</h1>
        <div className="noteContainer">
            <NoteCreator 
                text={noteText}
                onChange={setNoteText}
                onSubmit={handleSubmit}
            />
        </div>
        
    </div>
  )
}

  
