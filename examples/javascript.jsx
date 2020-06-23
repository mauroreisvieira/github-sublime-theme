/* eslint-disable */
import React, { useState } from 'react';

export function Counter({ name }) {
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h2
                style={{
                    color: 'red',
                    fontSize: 24,
                }}
            >
                {name}'s count: {count}
            </h2>
            <button onClick={onClick}>+</button>
        </div>
    );
}
