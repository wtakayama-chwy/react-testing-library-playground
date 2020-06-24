import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { FiTrash } from 'react-icons/fi'

import './Todo.scss'

const Todo: React.FC = () => {

    const [task, setTask] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])

    function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setTask(e.target.value)
    }

    function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (task.trim()) {
            setTasks([...tasks, task])
        }
        setTask('')
    }

    async function handleDeleteTask(e: MouseEvent) {
        const id = e.currentTarget.id
        const element = document.getElementById(`${id}`)
        await element?.remove()
    }

    return (
        <>
            <hr />
            <h3>TODO COMPONENT</h3>
            <form onSubmit={handleSubmit}>
                <input
                    readOnly={false}
                    data-testid="form-field"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Type a new task here"
                    value={task}
                />
                <button
                    data-testid="form-btn"
                    type="submit"
                >Add new task
                </button>
            </form>
            <table data-testid="form-table">
                <thead>
                    <tr>
                        <th className="table-head border">Tasks</th>
                    </tr>
                </thead>
                <tbody data-testid="form-table-body">
                    {tasks.map((task, index) => (
                        <tr key={index} id={String(index)} className="table-data border">
                            <td
                                data-testid={task}
                            >{task}
                            </td>
                            <td
                                id={String(index)}
                                onClick={handleDeleteTask}
                                data-testid="delete-btn"
                            ><FiTrash />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Todo;