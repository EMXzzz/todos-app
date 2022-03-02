import {ChangeEvent} from "react";
import ButtonSvg from './image/add-button.svg'
import "./note-creator.css"

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="add">
            <input 
                className="input"
                type="text" 
                value={text} 
                onChange={handleChange}
                placeholder="A NEW TO-DO HERE"
            />
            <img className="add-btn" onClick={onSubmit} src={ButtonSvg} alt="add" />
        </div>
    )
}