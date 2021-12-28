import React from 'react';

const Home = ({ showAlert }) => {

    const handleAlert = () => {
        showAlert('Hello, World!', 'green');
    };

    return (
        <>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */ }
                    <h1>Hello, World!</h1>
                    {/* <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div> */}
                    <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700" onClick={ handleAlert }>Show Alert</button>
                    {/* /End replace */ }
                </div>
            </main>
        </>
    );
};

export default Home;
