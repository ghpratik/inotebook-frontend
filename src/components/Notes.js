import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes} = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} key={note._id}/>
            })}
        </div>
        </>
    )
}

export default Notes
