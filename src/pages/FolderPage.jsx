import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FolderPage = () => {
    const {folderName} = useParams();
    const folders = useSelector(state => state.foldersReducer.folders)
    const folder = folders.find(folder => folder.name === folderName);

    if (folder !== undefined) {
        return (
            <>
                <Navbar bg='light'>
                    <Container>
                        <Navbar.Text>
                            <Link to='/'>
                                <i className="bi bi-arrow-left text-dark" style={{fontSize:'30px'}}></i>
                            </Link>
                        </Navbar.Text>
                        <Navbar.Brand><i className="bi bi-folder2-open"></i> {folderName}</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container>
                    <Row className='mb-5 mt-5 justify-content-around' xs='auto'>
                        {folder.images.map(image => <img key={image} className='w-25 mb-4 p-0 ms-4' style={{objectFit:'cover'}} src={image} alt="" />)}
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
        <Container className='text-center'>
            <i className="bi bi-folder-x mt-3 mb-3 text-danger" style={{fontSize: '50px'}}></i>
            <h1 className='mb-3'>Folder o takiej nazwie nie istnieje</h1>
            <Link to='/'>
                wróć na stronę główną
            </Link>
        </Container>    
        
        )
    }

}

export default FolderPage;