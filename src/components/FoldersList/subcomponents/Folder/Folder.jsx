import { Card } from "react-bootstrap";

const Folder = () => {
    return (
        <Card className='text-center ms-3 mt-3' text='success' border='success'>
            <Card.Body>
                <i className="bi bi-folder" style={{ fontSize: '50px' }}></i>
            </Card.Body>
            <Card.Title>for later</Card.Title>
        </Card>
    )
}

export default Folder;