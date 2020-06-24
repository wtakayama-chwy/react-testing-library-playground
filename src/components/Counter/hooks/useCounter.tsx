import { useState } from 'react'

export const useCounter = () => {

    const [counter, setCounter] = useState<number>(0)

    function handleIncrement(): void {
        setCounter(counter + 1)
    }

    function handleDecrement(): void {
        setCounter(counter - 1)
    }

    return { counter, handleIncrement, handleDecrement }
}