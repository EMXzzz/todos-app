import {ChangeEvent} from "react";
import './note-creator-styles.modules.css';
import ButtonSvg from './image/add-button.svg'

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
            <div>
                <input 
                    className="input"
                    type="text" 
                    value={text} 
                    onChange={handleChange}
                    placeholder={"A NEW TO-DO HERE"} 
                />
            </div>
            <div>
                <img className="add-btn" onClick={onSubmit} src={ButtonSvg} alt="add" />
            </div>
        </div>
    )
}