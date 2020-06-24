import React from 'react'
import { render, waitForElement, fireEvent, getByTestId, cleanup } from '@testing-library/react'

import Todo from './Todo'

/**
 * 1) render component
 * 2) query input value
 * 3) type on input
 * 4) query button element
 * 5) click on add button
 * 6) query table
 * 7) verify whether the task has been added
 * 8) Try to delete a task
 */

describe('Tests for Todo component', () => {

    /**
     * Clean rendered element after the test has been completed
     */
    afterEach(cleanup)

    test('should add new task when form has been submitted', async () => {
        const { getByTestId } = render(<Todo />)

        // Input
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        ) as HTMLInputElement
        const newValue = 'testing'
        fireEvent.change(
            fieldNode,
            {
                target: { value: newValue }
            }
        )
        expect(fieldNode.value).toEqual(newValue)

        // Button
        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        ) as HTMLButtonElement
        fireEvent.click(btnNode)

        // Table
        const tableNode = await waitForElement(
            () => getByTestId('form-table')
        ) as HTMLTableElement

        // Task name
        const taskNode = await waitForElement(
            () => getByTestId(newValue)
        ) as HTMLTableCellElement

        expect(taskNode.textContent).toEqual(newValue)
    })

    test('should not add task when form has no data or is submitted with only white space', async () => {
        const { getByTestId } = render(<Todo />)

        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        ) as HTMLInputElement
        const emptyValue = '   '
        fireEvent.change(
            fieldNode,
            { target: { value: emptyValue } }
        )
        expect(fieldNode.value).toEqual(emptyValue)

        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        ) as HTMLButtonElement
        fireEvent.click(btnNode)

        const tableNode = await waitForElement(
            () => getByTestId('form-table')
        ) as HTMLTableElement

        const tableBodyNode = await waitForElement(
            () => getByTestId('form-table-body')
        ) as HTMLTableSectionElement

        expect(tableBodyNode.innerHTML).toEqual("")
    })

    test('should delete a task when click on delete button', async () => {
        const { getByTestId } = render(<Todo />)

        // Input
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        ) as HTMLInputElement
        const inputValue = 'testing'
        fireEvent.change(fieldNode, { target: { value: inputValue } })

        // Table
        const tableNode = await waitForElement(
            () => getByTestId('form-table')
        ) as HTMLTableElement

        // Add Button
        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        ) as HTMLButtonElement
        fireEvent.click(btnNode)

        // Delete Button
        const delBtnNode = await waitForElement(
            () => getByTestId('delete-btn')
        ) as HTMLTableCellElement
        fireEvent.click(delBtnNode)

        const tableBodyNode = await waitForElement(
            () => getByTestId('form-table-body')
        ) as HTMLTableSectionElement

        expect(tableBodyNode.innerHTML).toBe("")
    })
})
