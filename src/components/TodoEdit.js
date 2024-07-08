import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TodoEdit = ({ tasks, setTasks }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));
    const [title, setTitle] = useState(task ? task.title : '');
    const [comment, setComment] = useState(task ? task.comment.comment : '');
    const [dateComment, setDateComment] = useState(task ? task.comment.date_comment : '');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setComment(task.comment.comment);
            setDateComment(task.comment.date_comment);
        }
    }, [task]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedTask = {
            ...task,
            title,
            comment: {
                comment,
                date_comment: dateComment,
            },
        };
        const updatedTasks = tasks.map(t => t.id === parseInt(id) ? updatedTask : t);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        navigate('/todolist_app');
    };

    return (
        <div className='m-5'>
            
            <h1 className='text-2xl font-bold'>หน้าที่ 3 : แก้ไขหัวข้อ</h1>
            <br />
            <form className='flex flex-col' onSubmit={handleUpdate}>
                <h1>หัวข้อ :</h1>
                <input
                    className='border-2 w-80'
                    type="text"
                    placeholder='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
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
                        อัปเดต
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

export default TodoEdit;
