import { Note } from "../App"
import NoteCard from "./NoteCard"

interface Props {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<Props> = ({notes, setNotes}) => {

    const deleteNote = (id: string) =>{
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
        <>
            <div style={{marginTop:"100px", marginLeft:"40px"}}>
                <h4>Notes List</h4>
                <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
                {
                    notes.map((note) => (
                        <NoteCard key={note.id} note={note} deleteNote = {deleteNote} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default NotesList