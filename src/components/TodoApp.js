import React, { useEffect, useState } from 'react'

const TodoApp = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  function updatedTask(id) {
    setTasks(tasks.map(task => (task.id === id )));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  return (
    <header>
      <main
        className="p-4 w-full h-full lg:h-[90%] overflow-y-auto"

      >
        {React.cloneElement(children, {
          tasks: tasks,
          setTasks: setTasks,
          deleteTask: deleteTask,
          updatedTask: updatedTask,
        })}
      </main>
    </header>)
}

export default TodoApp