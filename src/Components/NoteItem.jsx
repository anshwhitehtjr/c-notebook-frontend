import React from 'react';

const NoteItem = props => {
    const { title, tag, desc } = props;

    return (
        <div className="p-6 bg-white flex items-center rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
            <div>
                <h1 className="text-xl font-bold text-gray-700 mb-2">{ title }</h1>
                <p className="text-blue-700 text-sm">{ tag }</p>
                <p className="text-gray-600 my-1 text-md">{ desc }</p>
            </div>
        </div>
    );
};

export default NoteItem;
