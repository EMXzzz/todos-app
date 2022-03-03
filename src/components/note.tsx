import CloseBtnSvg from "./image/close-btn.svg";

import "./note.css";

interface Props {
    note: string;
    number: number;
    onDelete: (note: string) => void;
}

export const Note = ({
    note, 
    number,
    onDelete,
}: Props) => {
 
    const handleDelete = () => {
        onDelete(note)
    }

    return (
        <div className="note">
            <li>
                {`${number}. ${note}`}
            </li>
            
            <img 
                className="deleteBtn"
                onClick={handleDelete} 
                src={CloseBtnSvg} 
                alt="delete" 
            />
        </div>
    )
}

    
