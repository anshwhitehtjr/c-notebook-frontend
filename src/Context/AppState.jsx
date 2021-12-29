import React, { useState } from 'react';
import appContext from './appContext';

const AppState = props => {
    const host = "https://cnotebook-backend.herokuapp.com";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${ host }/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    };

    // Add a Note
    const addNote = async (title, desc, tag) => {
        // TODO: API Call
        // API Call
        const response = await fetch(`${ host }/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, desc, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note));
    };

    return (
        <appContext.Provider value={ { getNotes, notes, addNote } } >
            { props.children }
        </appContext.Provider>
    );
};

export default AppState;
