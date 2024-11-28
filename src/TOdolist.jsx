// 
import React, { useState } from "react";
import Todooperation from "./Todooperation";
import './App.css'

const TOdolist = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Track the task being edited
    const changeHandler = (e) => {
        setTask(e.target.value);
    };


    const submitHandler = (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === editIndex ? task : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null); 
        } else {
            const newTodos = [...todos, task];
            setTodos(newTodos);
        }

        setTask("");
        
    };

    const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((_, index) => index !== indexValue);
        setTodos(newTodos);
    };

    const editHandler = (indexValue) => {
        setTask(todos[indexValue]); 
        setEditIndex(indexValue); 
    };

    return (
        <div className="main">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Todo List</h5>
                    <form onSubmit={submitHandler}>
                        <input type="text" value={task} onChange={changeHandler} placeholder="Enter the task" />
                        <input type="submit" value={editIndex !== null ? "Update" : "Add"}  />
                    </form>
                    <Todooperation
                        todoList={todos}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler} 
                    />
                </div>
            </div>
        </div>
    );
};

export default TOdolist;
