import React from 'react';
import appContext from './appContext';

const AppState = props => {
    return (
        <appContext.Provider>
            { props.children }
        </appContext.Provider>
    );
};

export default AppState;
