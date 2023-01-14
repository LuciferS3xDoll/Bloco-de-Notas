import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([
  {
    id : nanoid(),
    text : "First Note omg!!!!",
    date : "01/01/2023",
  },
  {
    id : nanoid(),
    text : "Second Note omg!!!!",
    date : "02/01/2023",
  },
  {
    id : nanoid(),
    text : "Third Note omg!!!!",
    date : "03/01/2023",
  },
  {
    id : nanoid(),
    text : "Fourth Note omg!!!!",
    date : "04/01/2023",
  },
  
  ])

  const addNote = (text) => {
    const date = new Date()

    const newNote = {id: nanoid(), text: text, date: date.toLocaleDateString()}

    const newNotes = [...notes, newNote]

    setNotes(newNotes)
  }

  const deleteNote = (id,text) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }


  useEffect(() => {
    const savedNotes = JSON.parse(
    localStorage.getItem('notes-data'))
    
    if(savedNotes){
      setNotes(savedNotes)
    }
    }, [])

    useEffect(() => {
      localStorage.setItem('notes-data', JSON.stringify(notes))
    }, [notes])





  return(
    <div className = "container">
      <Header/>
      <NotesList notes = {notes} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
      
    </div>
  )
}

export default App;