import React from "react";
import './App.css'

const Todooperation = ({ todoList, deleteHandler, editHandler }) => {
    return (
        <div className="Operate">
            {todoList.map((todo, index) => (
                <div key={index}>
                    <h3>
                    {todo}{" "}
                        <button className="btn1" onClick={() => editHandler(index)}>Edit</button>
                        <button className="btn2" onClick={() => deleteHandler(index)}>Delete</button>
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Todooperation;
