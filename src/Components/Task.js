import React, { useState, useEffect } from "react";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css";

import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { completeTask } from "../JS/actions/myAction";;

function Task({ task, index }) {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(completeTask({ id: task.id, isDone: !task.isDone }));
    };
    const [currentDate, setCurrentDate] = useState("");

    
    return (
        <div classNam="tak-container">
            <Row>
                <Col>
                    <Toast
                        className="task-box"
                        show={showA}
                        onClose={toggleShowA}
                    >
                        <Toast.Header closeButton={false}>
                           
                            <strong className="mr-auto">
                                Task <span>{index + 1}</span>
                            </strong>
                            <small style={{ marginRight: "20px" }}>
                                {currentDate}{" "}
                            </small>
                            <Button
                               
                                onClick={handleClick}
                            >
                                
                                {task.isDone ? "Undo" : "Done"}
                            </Button>
                            <EditTask task={task} />
                        </Toast.Header>
                        <Toast.Body
                            style={{
                                textDecoration: task.isDone
                                    ? "line-through"
                                    : "none",
                                   
                                    fontWeight:500,
                                    fontSize:"30px"
                            }}
                        >
                            {task.description}
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default Task;