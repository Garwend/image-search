import { useEffect } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFolders } from './actions/folderActions';

import MainPage from './pages/MainPage';
import FolderPage from './pages/FolderPage';


function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const folders = window.localStorage.getItem('folders')

    if (folders !== null) {
      dispatch(setFolders(JSON.parse(folders)))
    }else{
      dispatch(setFolders([]))
    }
    
  },[dispatch])

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/:folderName' component={FolderPage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
