import { useCounter } from './useCounter'
import { act, renderHook } from '@testing-library/react-hooks'

describe('increment', () => {
    it('should increment by 1', () => {
        const { result } = renderHook(useCounter)

        act(() => {
            result.current.handleIncrement()
        })
        expect(result.current.counter).toBe(1)
    });
});

describe('decrement', () => {
    it('should decrement by 1', () => {
        const { result } = renderHook(useCounter)

        act(() => {
            result.current.handleDecrement()
        })
        expect(result.current.counter).toBe(-1)
    });
});