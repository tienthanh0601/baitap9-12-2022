import { useState } from 'react';
import './style.scss';

export function Counter() {
    const [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount(count-1);
    };
    const handlePLus = () => {
        setCount(count + 1);
    };

    return (
        <div className="counter">
            <button className="counter-btn btn-minus" onClick={handleMinus}>-</button>
            <div className="btn-number">{count}</div>
            <button className="counter-btn btn-plus"onClick={handlePLus}>+</button>
        </div>
    );
};