import React from 'react'
import { useNavigate } from 'react-router-dom';

const TodoItem = ({ task, deleteTask }) => {

    const navigate = useNavigate();
    return (
        <tr>
            <td>{task.id}</td>
            <td>
                <button
                    onClick={() => navigate(`/todolist_app/add_comment/${task.id}`)}
                >
                    {task.title}
                </button>
            </td>
            <td>{task.date}</td>
            <td>
                <div className='flex m-2'>
                    <button
                        className='pr-3 duration-500 bg-blue-200 hover:bg-slate-200  border-2'
                        onClick={() => navigate(`/todolist_app/edit/${task.id}`)}
                    >
                        Edit
                    </button>
                    <button
                        className='duration-500 bg-red-200 hover:bg-orange-300  border-2'
                        onClick={() => deleteTask(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default TodoItem