import React, { useContext } from 'react';
import appContext from '../Context/appContext';

const NoteItem = props => {
    const { title, tag, desc, updateNote, note } = props;
    const context = useContext(appContext);
    const { deleteNote } = context;

    return (
        <div className="p-5 bg-white flex flex-col text-left rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
            <div onClick={ () => updateNote(note) } >
                <h1 className="text-xl font-bold text-gray-700 mb-2">{ title }</h1>
                <p className="text-blue-700 text-sm">{ tag }</p>
                <p className="text-gray-600 my-1 text-md">{ desc }</p>
            </div>
            <div className='m-2 text-center text-4xl'>
                <i className="fad fa-trash-alt" onClick={ () => deleteNote(note._id) }></i>
            </div>
        </div >
    );
};

export default NoteItem;
