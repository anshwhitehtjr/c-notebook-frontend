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

    // Edit a Note
    const editNote = async (id, title, desc, tag) => {
        // API Call 
        const response = await fetch(`${ host }/api/notes/updatenote/${ id }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, desc, tag })
        });
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].desc = desc;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    // Delete a Note
    const deleteNote = async id => {
        // API Call
        const response = await fetch(`${ host }/api/notes/deletenote/${ id }`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const newNotes = notes.filter(note => { return note._id !== id; });
        setNotes(newNotes);
    };

    return (
        <appContext.Provider value={ { getNotes, notes, addNote, editNote, deleteNote } } >
            { props.children }
        </appContext.Provider>
    );
};

export default AppState;
