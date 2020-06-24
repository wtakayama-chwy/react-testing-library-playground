import React from 'react';
import { useCounter } from './hooks/useCounter'
import './Counter.scss'

const Counter: React.FC = () => {

    const { counter, handleDecrement, handleIncrement } = useCounter()

    return (
        <>
            <h3>COUNTER COMPONENT</h3>
            <div className="counter-container">
                <button
                    onClick={handleDecrement}
                >-</button>
                <h3>{counter}</h3>
                <button
                    onClick={handleIncrement}
                >+</button>
            </div>
        </>
    )
}

export default Counter;