
import React from 'react';

import { UserProvider } from './UserContext';


const Wrapper = ({ children }) => {
    return (
        <UserProvider>
            <div className="wrapper">
                {children}
            </div>
        </UserProvider>
    );
};

export default Wrapper;
