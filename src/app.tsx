import { useState } from "react"
import {NoteCreator} from "./components/note-creator"

export const App = () => {
  const [noteText, setNoteText] = useState<string>('')

  return (
    <div>
      <NoteCreator 
        text={noteText}
        onChange={setNoteText}
      />
    </div>
  )
}

  
