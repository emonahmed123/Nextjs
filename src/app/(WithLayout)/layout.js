import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <h1>header</h1>
            {children}

            <h3>Footer</h3>
        </div>
    );
};

export default Layout;