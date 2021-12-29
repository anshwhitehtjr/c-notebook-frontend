import React from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const notesInitial = [
        {
            "_id": "61322f19553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "desc": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "desc": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
    ];

    return (
        <>
            <AddNote />
            <div className='mt-10'>
                <h1 className='text-4xl'>Your Notes</h1>
                <div id='noteitemcontainer' className="grid align-middle mt-5 space-x-1 space-y-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    {
                        notesInitial.map(e => {
                            return <NoteItem key={ e._id } title={ e.title } desc={ e.desc } tag={ e.tag } />;
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Notes;
