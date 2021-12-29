import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../Context/appContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = ({ showAlert }) => {
    const context = useContext(appContext);
    const { notes, getNotes, editNote } = context;
    const [isvisible, showModal] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            history.push('/signin');
        }
        // eslint-disable-next-line
    }, []);

    const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" });
    const updateNote = currentNote => {
        showModal(true);
        setNote({ id: currentNote._id, etitle: currentNote.title, edesc: currentNote.desc, etag: currentNote.tag });
        console.log(note);
    };

    const handleClick = e => {
        editNote(note.id, note.etitle, note.edesc, note.etag);
        showModal(false);
    };

    const onChange = e => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <AddNote showAlert={ showAlert } />
            {
                isvisible
                    ? <div className="fixed z-10 inset-0 justify-center overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <form>
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                <div className="grid grid-cols-3 gap-6">
                                                    <div className="col-span-3 sm:col-span-2">
                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                            Enter the title of the note here
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                                Title
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="etitle"
                                                                id="etitle"
                                                                value={ note.etitle }
                                                                onChange={ onChange }
                                                                className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                                placeholder="Title Here"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-6">
                                                    <div className="col-span-3 sm:col-span-2">
                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                            Enter the tag of the note here
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                                Tag
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="etag"
                                                                id="etag"
                                                                value={ note.etag }
                                                                onChange={ onChange }
                                                                className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                                placeholder="Tag Here"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                                                        Enter the Description of the note here
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id="edesc"
                                                            name="edesc"
                                                            value={ note.edesc }
                                                            onChange={ onChange }
                                                            rows={ 3 }
                                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                            placeholder="Description"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={ handleClick }>
                                        Save Changes
                                    </button>
                                    <button type="button" onClick={ () => showModal(false) } className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
            <div className='mt-10'>
                <h1 className='text-4xl'>Your Notes</h1>
                {
                    notes.length === 0
                    && <p className="mt-10 text-center font-medium text-lg">No notes available to show</p>
                }
                <div id='noteitemcontainer' className="grid mt-5 space-x-1 space-y-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    {
                        notes.map(e => {
                            return <NoteItem key={ e._id } note={ e } updateNote={ updateNote } showModal={ showModal } title={ e.title } desc={ e.desc } tag={ e.tag } />;
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Notes;
