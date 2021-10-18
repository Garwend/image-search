import { Container, Row, Col } from 'react-bootstrap';
import CreateFolder from './components/CreateFolderModal/CreateFolderModal';
import SearchBox from './components/SearchBox/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='App'>
      <CreateFolder />
      <SearchBox />
    </div>
  );
}

export default App;
