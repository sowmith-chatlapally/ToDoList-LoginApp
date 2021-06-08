import React, {useState} from 'react';
import EditTask from '../modals/EditTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Cards = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"background-color": "#5D93E1"}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": "#ECF3FC", "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-2" style={{"color" : "#5D93E1", "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className ="fas fa-trash-alt" style = {{"color" : "#5D93E1", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Cards;