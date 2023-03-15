import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Listas";

const url='https://jsonplaceholder.typicode.com/todos';

export default function Data(){

const [tasks,setTasks] = useState([]);

const getTodos = async () => {
    const response = await fetch(url);
    const tasks = await response.json();
    setTasks(tasks);
    console.log(tasks);
};
useEffect(() => {
    getTodos();
}, []);



const changeStatus = (id) => {
    let data_copy = [...tasks];
    data_copy.forEach((task) => {
        if(task.id === id) {
            task.completed = true;
            return;
        }
    });
    setTasks(data_copy);
};


const deleteTask = (id) =>{
    setTasks(tasks.filter((item) => item.id !== id));
};


let tasks_list = tasks.map((el) =>{
    return(
        <Task
        key={uuidv4()}
        id={el.id}
        text={el.title}
        status={el.completed}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
        />
    );
});


return(
    <div className="d-flex flex-column">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Task</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>{tasks_list}</tbody>
        </table>
    </div>
)
}