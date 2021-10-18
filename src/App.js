import { Container, Row } from 'react-bootstrap';
import CreateFolder from './components/CreateFolderModal/CreateFolderModal';
import FoldersList from './components/FoldersList/FoldersList';
import SearchBox from './components/SearchBox/SearchBox';


function App() {
  return (
    <div className='App'>
      <Container className='mt-3'>
        <Row xs='auto'>
          <CreateFolder />
          <FoldersList />
        </Row>
        <Row>
          <SearchBox />
        </Row>
      </Container>
    </div>
  );
}

export default App;
