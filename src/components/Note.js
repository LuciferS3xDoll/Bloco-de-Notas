import {MdDeleteForever} from 'react-icons/md'
import {useEffect, useState} from 'react';

const Note = ({id,text,date, handleDeleteNote}) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
        
        let notesList = JSON.parse( localStorage.getItem("notes-data") )
        

        notesList.forEach(nota => {
            if(nota.id == id){
                nota.text = e.target.value
            }
        });

        localStorage.setItem("notes-data", JSON.stringify( notesList ))
    }

      useEffect(() => {
          setValue(localStorage.getItem('notes-data'))
      }, [])

    return( <div className = 'note'>
        <textarea className = "t1" defaultValue={text} rows = "8" onChange = {handleChange}></textarea>
        <div className = "note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick = {() => handleDeleteNote(id,text)} className = "delete-icon" size = "1.3em"/>
        </div>

    </div>
    )
}

export default Note;