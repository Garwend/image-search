import { Container, Row } from 'react-bootstrap';
import CreateFolder from './components/CreateFolderModal/CreateFolderModal';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Container>
        <Row>
          <CreateFolder />
        </Row>
      </Container>
    </div>
  );
}

export default App;
