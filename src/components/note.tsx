interface Props {
    note: string;
    key: number;
}

export const Note = ({note}: Props) => (
    <div>
        {note}
    </div>
)
    
