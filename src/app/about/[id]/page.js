import React from 'react';

const daynamicPage = ({ params, searchParams }) => {
    console.log(params)
    return (
        <div>
            <h1>daynamicpage{params.id}</h1>
            <h1>daynamicpage{searchParams.catagory}</h1>
        </div>
    );
};

export default daynamicPage;