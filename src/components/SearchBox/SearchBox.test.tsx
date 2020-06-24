import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import SearchBox from './SearchBox';

it('should render component', async () => {
    const { queryByTestId } = render(<SearchBox />)

    const el = await waitForElement(
        () => queryByTestId("search-button")
    ) as HTMLButtonElement
    expect(el).toBeTruthy()
});

describe('Tests for input value', () => {

    it('should update on change', async () => {
        const { getByTestId } = render(<SearchBox />)

        const inputNode = await waitForElement(
            () => getByTestId("search-input")
        ) as HTMLInputElement
        const newValue = 'testing'
        fireEvent.change(inputNode, { target: { value: newValue } })

        expect(inputNode.value).toBe(newValue)
    });
});

describe('Tests for search button', () => {
    describe('with empty query', () => {
        it('should does not trigger requestSearch function', async () => {
            const requestSearch = jest.fn()
            const { getByTestId } = render(<SearchBox requestSearch={requestSearch} />)
            const btnNode = await waitForElement(
                () => getByTestId("search-button")
            ) as HTMLButtonElement

            fireEvent.click(btnNode)

            expect(requestSearch).not.toHaveBeenCalled()
        });
    });

    describe('with query', () => {
        it('should trigger requestSearch function', async () => {
            const requestSearch = jest.fn()
            const { getByTestId } = render(<SearchBox requestSearch={requestSearch} />)

            const btnNode = await waitForElement(
                () => getByTestId("search-button")
            ) as HTMLButtonElement

            const inputNode = await waitForElement(
                () => getByTestId("search-input")
            ) as HTMLInputElement

            fireEvent.change(inputNode, { target: { value: 'test' } })
            fireEvent.click(btnNode)

            expect(requestSearch).toHaveBeenCalled()
        });
    });
});