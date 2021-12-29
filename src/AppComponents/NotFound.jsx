import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ showAlert }) => {
    useEffect(() => {
        showAlert("Sorry, We did not find this page", "red");
    }, []);

    return (
        <>
            <div className="bg-white h-screen justify-center">
                <center className="mt-24 m-auto">
                    <div className="tracking-widest mt-4">
                        <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
                        <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>
                    </div>
                </center>
                <center className="mt-6">
                    <Link to="/" className="text-gray-500 text-xl bg-blue-200 p-3 rounded-md hover:shadow-md">Go to Home</Link>
                </center>
            </div>
        </>
    );
};

export default NotFound;
