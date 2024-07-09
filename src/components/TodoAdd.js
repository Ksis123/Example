import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoAdd = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

 function autoID(){
  if (tasks.length === 0) {
    return 1;
  }
  return tasks[tasks.length - 1].id + 1;
 }


  function addTask() {
    const newTask = {
      id: autoID(),
      title,
      comment: {
        comment_description: comment,
        date_comment: new Date().toLocaleDateString('en-EN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
      },
      date: new Date().toLocaleDateString('en-EN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    navigate('/todolist_app');
  }

  return (
    <div className='m-5'>
      <h1 className='text-2xl font-bold'>หน้าที่ 3 : เพิ่มหัวข้อ</h1>
      <br />
      <form className='flex flex-col' onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <h1>หัวข้อ :</h1>
        <input
          className='border-2 w-80'
          type="text"
          placeholder='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <h2>รายละเอียดหัวข้อ</h2>
        <textarea
          className='w-80 border-2'
          value={comment}
          onChange={e => setComment(e.target.value)}
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
            onClick={() => navigate("/todolist_app")}
          >
            กลับ
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoAdd;
