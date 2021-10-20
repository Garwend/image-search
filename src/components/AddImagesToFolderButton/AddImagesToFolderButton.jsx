import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addImageToFolder } from '../../actions/folderActions';
import { clearSelectedImages } from '../../actions/imagesActions';

const AddImagesToFolderButton = () => {
    const folders = useSelector(state => state.foldersReducer.folders);
    const selectedImages = useSelector(state => state.imagesReducer.selectedImages);
    const [show, setShow] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const dispatch = useDispatch();

    const handleChange = e => setSelectedFolder(e.target.value);
    const handleSubmit = () => {
        if (selectedImages.length > 0 &&  selectedFolder !== '') {
            dispatch(addImageToFolder({folderName: selectedFolder, selectedImages}));
            dispatch(clearSelectedImages());
            handleClose();
        }
    }

    return (
        <>
            <Button variant='primary' className='position-fixed rounded-circle bottom-0 end-0 mb-5 me-5' disabled={!selectedImages.length} onClick={handleShow}>
                <i className="bi bi-folder-plus" style={{fontSize:'30px'}}></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj zdjęcia do wybranego folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Select onChange={handleChange}>
                    <option value="">Wybierz folder</option>
                    {folders.map(folder => <option key={folder.name} value={folder.name}>{folder.name}</option>)}
                </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        anuluj
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                        dodaj zdjęcia
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddImagesToFolderButton;