import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTask } from "../JS/actions/myAction";
import "./AddTask.css";

function Addtask() {
    const [newTask, setNewTask] = useState("");
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(addTask({ description: newTask }));
        setNewTask("");
    };
    const Enter = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };
    return (
        <div className="addTask-box">
            <h1>Add a newTodo !</h1>
            <InputGroup size="lg">
                <FormControl
                    type="text"
                    onChange={handleChange}
                    onKeyDown={(e) => Enter(e)}
                    value={newTask}
                    placeholder="add newTodo"
                />
                <Button type="reset" onClick={handleSubmit}>
                    Add
                </Button>
            </InputGroup>
            <div className="addTask"></div>
        </div>
    );
}

export default Addtask;