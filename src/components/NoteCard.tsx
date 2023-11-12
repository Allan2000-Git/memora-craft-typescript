import React from 'react'
import { Note } from '../App'
import { Button, Card } from 'react-bootstrap'

type Props = {
    note: Note,
    deleteNote: (id: string) => void
}

const NoteCard: React.FC<Props> = ({note, deleteNote}) => {
    return (
        <div style={{marginTop:"20px"}}>
            <Card style={{backgroundColor: note.color, width: '18rem', height:"250px"}}>
                <Card.Body style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.description}</Card.Text>
                    <Card.Subtitle className="text-muted">Created: { note.date}</Card.Subtitle>
                    <Button onClick={() => deleteNote(note.id)} style={{padding:"10px 28px"}} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NoteCard