import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import foldersReducer from './reducers/foldersReducer';

const store = createStore(foldersReducer, applyMiddleware(thunk));

export default store;