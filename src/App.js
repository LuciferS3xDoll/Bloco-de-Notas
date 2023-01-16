import {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Header from './components/Header'
import Background from './components/Background'


const App = () => {
  const [notes, setNotes] = useState([
  
  ])

  const addNote = (text) => {
    const date = new Date()

    const newNote = {id: nanoid(), text: text, date: date.toLocaleDateString()}

    const newNotes = [...notes, newNote]

    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
    window.location.reload()
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
        <Background/>
        <Header/>
        <NotesList notes = {notes} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
    </div>
  )
}

export default App;