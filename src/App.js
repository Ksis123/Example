import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoApp from './components/TodoApp';
import TodoEdit from './components/TodoEdit';
import TodoCommentAdd from './components/TodoCommentAdd';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TodoApp><TodoList/></TodoApp>} />
        <Route path="/todolist_app" element={<TodoApp><TodoList/></TodoApp>} />
        <Route path="/todolist_app/add" element={<TodoApp><TodoAdd/></TodoApp>} />
        <Route path="/todolist_app/edit/:id" element={<TodoApp><TodoEdit/></TodoApp>} />
        <Route path='/todolist_app/add_comment/:id' element={<TodoApp><TodoCommentAdd/></TodoApp>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
