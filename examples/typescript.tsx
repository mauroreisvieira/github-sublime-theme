import { useState } from 'react';

interface CounterProps {
    name: string;
}

export function Counter({ name }: CounterProps) {
    const [count, setCount] = useState<number>(0);

    function onClick(): void {
        setCount(count + 1);
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
