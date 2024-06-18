"use client"


import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>count:{count}</h1>

            <button onClick={() => setCount((prevCount) => prevCount + 1)} > incress</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}> discress</button>
        </div>
    );
};

export default Counter;