import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TodoCommentAdd= ({ tasks, setTasks }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));
    const [comment, setComment] = useState('');

    const handleAddComment = (e) => {
        e.preventDefault();
        const newComment = {
            comment: comment,
            date_comment: new Date().toLocaleDateString('en-EN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
        };

        const updatedTask = {
            ...task,
            comments: [...(task.comments || []), newComment], // Ensure comments is an array
        };

        const updatedTasks = tasks.map(t => t.id === parseInt(id) ? updatedTask : t);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        navigate(`/todolist_app/add_comment/${id}`);
    };

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div className='m-5'>
            <h1 className='text-2xl font-bold'>หน้าที่ 2 : แสดงรายละเอียดในหัวข้อ</h1>
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>รายละเอียด comment</th>
                            <th>วันที่ comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task.comments && task.comments.map((c, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{c.comment}</td>
                                <td>{c.date_comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <form className='flex flex-col' onSubmit={handleAddComment}>
                <h2>รายละเอียดหัวข้อ</h2>
                <textarea
                    className='w-80 border-2'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='description'
                    required
                />
                <div className='m-2 w-80 flex justify-end'>
                    <button
                        type='submit'
                        className='px-2 m-2 border-sky-200 border-2 hover:bg-blue-500 hover:text-white duration-500'
                    >
                        เพิ่ม
                    </button>
                    <button
                        type='button'
                        className='px-2 m-2 border-sky-200 border-2 hover:bg-blue-500 hover:text-white duration-500'
                        onClick={() => navigate('/todolist_app')}
                    >
                        กลับ
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TodoCommentAdd;
