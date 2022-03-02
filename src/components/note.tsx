import "./note-creator.css"

interface Props {
    note: string;
    number: number;
}

export const Note = ({
    note, 
    number,
}: Props) => (
    <li className="note">
        {`${number}. ${note}`}
    </li>
)

    
