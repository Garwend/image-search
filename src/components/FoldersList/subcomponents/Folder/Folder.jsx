import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Folder = ({ name }) => {
    return (
            <Card className='text-center ms-3 mt-3' border='success'>
                <Link to={'/' + name} className='text-decoration-none'>
                <Card.Body>
                    <i className="bi bi-folder text-success" style={{ fontSize: '50px' }}></i>
                </Card.Body>
                <Card.Title className='text-success'>{name}</Card.Title>
                </Link>
            </Card>
    )
}

export default Folder;