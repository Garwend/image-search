import { Card } from "react-bootstrap";

const Folder = ({ name }) => {
    return (
        <Card className='text-center ms-3 mt-3' text='success' border='success'>
            <Card.Body>
                <i className="bi bi-folder" style={{ fontSize: '50px' }}></i>
            </Card.Body>
            <Card.Title>{name}</Card.Title>
        </Card>
    )
}

export default Folder;