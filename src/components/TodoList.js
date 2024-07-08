import React from 'react'
import TodoItem from './TodoItem';
import { useNavigate } from "react-router-dom";


const TodoList = ({ tasks, deleteTask }) => {
    const navigate = useNavigate();

    return (
        <div >
            <h1 className='text-2xl font-bold' >หน้าที่ 1 : แสดงรายการข้อมูลหัวข้อ</h1>
            <br />
            <table>
                <thead >
                    <tr >
                        <th className=''>ลำดับ</th>
                        <th>หัวข้อ</th>
                        <th>วันที่สร้าง</th>
                        <th>เครื่องมือ</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (<TodoItem key={task.id} task={task} deleteTask={deleteTask} />))}
                </tbody>
            </table>
            <br />
            <div className='w-80 flex justify-end'>
                <button className='px-2 border-sky-200 border-2 hover:bg-blue-500 hover:text-white duration-500'
                    onClick={() => navigate("/todolist_app/add")}
                >
                    เพิ่ม
                </button>
            </div>
        </div>
    )
}
export default TodoList