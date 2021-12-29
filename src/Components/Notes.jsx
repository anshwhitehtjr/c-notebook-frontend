import React, { useContext, useEffect } from 'react';
import appContext from '../Context/appContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = ({ showAlert }) => {
    const context = useContext(appContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AddNote showAlert={ showAlert } />
            <div className='mt-10'>
                <h1 className='text-4xl'>Your Notes</h1>
                <div id='noteitemcontainer' className="grid mt-5 space-x-1 space-y-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    {
                        notes.map(e => {
                            return <NoteItem key={ e._id } title={ e.title } desc={ e.desc } tag={ e.tag } />;
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Notes;
