import React from 'react';

const Footer = ({ mode }) => {
    return (
        <footer className={ `bg-${ mode }-200 pt-8 pb-6` }>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2021</span>
                        </div>
                    </div>
                    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i className="fab fa-twitter" />
                    </button>
                    <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i className="fab fa-facebook-square" />
                    </button>
                    <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i className="fab fa-dribbble" />
                    </button>
                    <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i className="fab fa-github" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;;
