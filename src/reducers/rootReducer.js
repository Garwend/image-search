import { combineReducers } from "redux";

import foldersReducer from './foldersReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
    foldersReducer,
    imagesReducer,
})

export default rootReducer;