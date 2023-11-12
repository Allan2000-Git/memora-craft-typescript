import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Note } from '../App'
import {v4 as uuid} from "uuid"

interface Props {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FC<Props> = ({notes, setNotes}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#F2DDA4")

    const [error, setError] = useState(false)

    const createNote = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(!title || !description){
            return setError(true)
        }

        setNotes([...notes, {
            id: uuid(),
            title,
            description,
            color,
            date: (new Date).toDateString()
        }])

        // localStorage.setItem("notes", JSON.stringify(notes))

        setTitle("")
        setDescription("")
    }
    

    return (
        <>
            <div style={{marginTop:"40px", marginLeft:"40px", marginBottom:"40px", width: '38rem'}}>
                <h4>Craft a Memora</h4>
                {error && <Alert onClose={()=>setError(false)} key={"danger"} variant={"danger"} dismissible>All the fields are required to create you Memora</Alert>}
                <Form onSubmit={createNote} style={{marginTop:"20px"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title your Memora" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} as="textarea" rows={3} placeholder="Describe your Memora" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                    <Form.Label htmlFor="colorInput">Memora Color</Form.Label>
                        <Form.Control value={color} onChange={(e)=>setColor(e.target.value)} type="color" title="Choose color for Memora"/>
                    </Form.Group>
                    <Button style={{padding:"10px 28px"}} variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateNote