import React from 'react';

const AddNote = () => {
    return (
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="lg:text-lg sm:text-sm md:text-md font-medium leading-6 text-gray-900">Welcome to cNotebook</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        The information you are about to enter will not be shared to anyone it uses the feature of
                    </p>
                    <p className="font-bold lg:text-md sm:text-sm md:text-sm">End-To-End Incryption</p>
                    <p className="mt-1 text-sm text-gray-600">
                        All the data will be stored in a safe and secure database.
                    </p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
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
                                            name="title"
                                            id="title"
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
                                            name="tag"
                                            id="tag"
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
                                        id="desc"
                                        name="desc"
                                        rows={ 3 }
                                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="Description"
                                        defaultValue={ '' }
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    You can leave the title and tag blank
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Note: Title will be defaulted to 'untitled'
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Note: Tag will be defaulted to 'general'
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    you can edit them later
                                </p>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mx-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Add This Note
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mx-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Clear the Fields
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
