import { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';

const CreateFolder = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => setName(e.target.value);
    const handleSubmit = e => {
        console.log('submit')
        handleClose();
    }

    return (
        <div>
            <Button variant='primary' onClick={handleShow}>
                Stwórz Folder
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Stwórz Folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nazwa folderu: </Form.Label>
                        <Form.Control type='text' onChange={handleChange} value={name} placeholder='Nazwa' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        anuluj
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                        stwórz
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateFolder;