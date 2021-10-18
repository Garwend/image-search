import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setFolders } from './actions/folderActions';
import CreateFolder from './components/CreateFolderModal/CreateFolderModal';
import FoldersList from './components/FoldersList/FoldersList';
import SearchBox from './components/SearchBox/SearchBox';


function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setFolders(JSON.parse(window.localStorage.getItem('folders'))))
  },[dispatch])

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
