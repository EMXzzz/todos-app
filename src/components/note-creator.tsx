import {ChangeEvent} from "react"

interface Props {
    text: string,
    onChange: (value: string) => void
}

export const NoteCreator = ({
    text, 
    onChange,
}: Props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    value={text} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <button>Save</button>
            </div>
        </div>
    )
}