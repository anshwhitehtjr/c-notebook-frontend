import React from 'react';
import Notes from './Notes';

const Home = ({ showAlert }) => {

    return (
        <>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Notes />
                </div>
            </main>
        </>
    );
};

export default Home;

//#region Comments
{/* /End replace */ }
{/* <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div> */}
{/* Replace with your content */ }
//#endregion
