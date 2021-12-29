import React, { useEffect } from 'react';

const About = ({ showAlert }) => {
    useEffect(() => {
        showAlert("Sorry this page of this website is under contruction. Kindly wait till this page is constructed to use its features", "blue");
    }, []);

    return (
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <center>Sorry Under Contruction</center>
        </div>
    );
};

export default About;
