import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Coment";

const url='https://api.github.com/users';

export default function Coment_Data(){

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
        text={el.login}
        img={el.avatar_url}
        />
    );
});


return(
    <div className="row">
            {tasks_list}
    </div>
)
}