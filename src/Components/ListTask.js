import { useState } from "react";
import { Button } from "react-bootstrap";
import Task from "./Task";

import { useSelector } from "react-redux";

function ListTask() {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const [completed, setCompleted] = useState(false);
    const [unCompleted, setUnCompleted] = useState(false);
    
    console.log("completed", completed);
    console.log("unCompleted", unCompleted);

    const handleCompleted = () => {
        setCompleted(!completed);
        setUnCompleted(false);
    };
    const handleUnCompleted = () => {
        setUnCompleted(!unCompleted);
        setCompleted(false);
    };

    return (
        <div>
            <Button variant="warning"  onClick={handleCompleted}>
                {completed ? "Show All" : "Completed"}
            </Button>
            <Button variant="warning" onClick={handleUnCompleted}>
                {unCompleted ? "Show All" : "UnCompleted"}
            </Button>

            {completed
                ? tasks
                      .filter((el) => el.isDone === true)
                      .map((task, index) => (
                          <Task task={task} index={index} key={index} />
                      ))
                : unCompleted
                ? tasks
                      .filter((el) => el.isDone === false)
                      .map((task, index) => (
                          <Task task={task} index={index} key={index} />
                      ))
                : tasks.map((task, index) => (
                      <Task task={task} index={index} key={index} />
                  ))}
        </div>
    );
}

export default ListTask;