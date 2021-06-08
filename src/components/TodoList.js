import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList");
       
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal);
    }

    const searchHandler = () => {};

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(taskList);
        setModal(false);
    }
    return (
        <div>
            <div className = "header2 text-center">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>             
            </div>
            <div className = "ui-search">
                    <div className ="form-group">
                        <input type ="text" placeholder ="Search task" className = "form-control"/>
                    </div>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Cards taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </div>
    );
};

export default TodoList;