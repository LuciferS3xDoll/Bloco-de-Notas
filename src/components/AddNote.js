import {useState} from 'react'
import { motion } from "framer-motion"

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')

    const handleChange = (event) => {
        setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return(
    <motion.div initial={{opacity : 0}} animate={{opacity:1}} transition={{delay:1.5, duration:1.5}} className = "note new">
        <textarea rows = "8" cols = "10" placeholder = "Escreva nova nota" value = {noteText} onChange = {handleChange}></textarea>
        <div className = "note-footer">
            <a></a>
            <motion.button whileHover={{scale:1.1, textShadow:"0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)"}} className = "save" onClick = {handleSaveClick}>Guardar</motion.button>
        </div>
    </motion.div>
    )
}

export default AddNote