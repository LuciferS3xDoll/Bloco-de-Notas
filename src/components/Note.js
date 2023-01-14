import {MdDeleteForever} from 'react-icons/md'
import {useEffect, useState} from 'react';

const Note = ({id,text,date, handleDeleteNote}) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
        
        localStorage.setItem('notes-data', e.target.value)
    }

      useEffect(() => {
          setValue(localStorage.getItem('notes-data'))
      }, [])

    return( <div className = 'note'>
        <textarea className = "t1" defaultValue={text} onChange = {handleChange}></textarea>
        <div className = "note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick = {() => handleDeleteNote(id)} className = "delete-icon" size = "1.3em"/>
        </div>

    </div>
    )
}

export default Note;