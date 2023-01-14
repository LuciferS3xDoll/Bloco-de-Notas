import Note from './Note'
import AddNote from './AddNote'
import { motion } from "framer-motion"

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <motion.div initial={{y:-250}} animate={{y:-10}} transition={{delay:0.2, type:'spring', stiffness: 200}} className = 'notes-list'>
            {notes.map((note) => (<Note id = {note.id} text = {note.text} date = {note.date} handleDeleteNote = {handleDeleteNote}/>))}
            <AddNote handleAddNote = {handleAddNote}/>
        </motion.div>
    )
}

export default NotesList;