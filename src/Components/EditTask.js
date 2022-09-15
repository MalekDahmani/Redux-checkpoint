import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EditTask.css";
import { useDispatch } from "react-redux";

import {editTask} from "../JS/actions/myAction" 

function EditTask({ task }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [newDescription, setNewDescription] = useState(task.description);
    const handleSubmit = () => {
        handleClose();
        dispatch(editTask({ id: task.id, newDescription: newDescription }));
    };
    const handleChange = (e) => {
        setNewDescription(e.target.value);
    };

    return (
        <>
            <Button  onClick={handleShow}>
               Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                style={{ backGroundolor: "black" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        defaultValue={task.description}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditTask;