import {
    ChangeEvent, 
    SyntheticEvent,
} from "react";

import "./note-creator.css";

interface Props {
    text: string,
    onChange: (value: string) => void,
    onSubmit: () => void,
}

export const NoteCreator = ({
    text, 
    onChange,
    onSubmit,
}: Props) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form 
            onSubmit={handleSubmit}
            noValidate
        >
            <input 
                className="input"
                type="text" 
                value={text} 
                onChange={handleChange}
                placeholder="A NEW TO-DO HERE"
            />
        </form>
    )
}