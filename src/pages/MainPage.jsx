import { Container, Row } from 'react-bootstrap';
import AddImagesToFolderButton from '../components/AddImagesToFolderButton/AddImagesToFolderButton';
import CreateFolder from '../components/CreateFolderModal/CreateFolderModal';
import FoldersList from '../components/FoldersList/FoldersList';
import ImagesList from '../components/ImagesList/ImagesList';
import SearchBox from '../components/SearchBox/SearchBox';

const MainPage = () => {
    return (
        <>
        <Container className='mt-3'>
            <Row xs='auto'>
            <CreateFolder />
            <FoldersList />
            </Row>
            <div>
                <h1 className='mt-5 text-center'>
                Szukaj zdjęcia
                </h1>
                <SearchBox />
                <h4 className='mb-5 text-center'>wybierz zdjęcia, a następnie dodaj je do folderu klikając w <i className="bi bi-folder-plus"></i></h4>
                <ImagesList />
            </div>
        </Container>
        <AddImagesToFolderButton />
        </>
    )
}

export default MainPage;