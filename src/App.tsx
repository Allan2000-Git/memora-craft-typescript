import { useState } from 'react'
import './App.css'
import {v4 as uuid} from "uuid"
import CustomNavbar from "./components/CustomNavbar"
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'

export interface Note {
  id: string,
  title: string,
  description: string,
  color: string,
  date: string,
}

function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: uuid(),
    title: "Learn React & Typescript",
    description: "Build projects using React & Typescript",
    color: "#9381FF",
    date: (new Date).toLocaleDateString(),
  }])

  // useEffect(()=>{
  //   setNotes(JSON.parse(localStorage.getItem("notes") || ""))
  // },[notes])

  return (
    <>
      <CustomNavbar/>
      <NotesList notes={notes} setNotes={setNotes}/>
      <CreateNote notes={notes} setNotes={setNotes}/>
    </>
  )
}

export default App
