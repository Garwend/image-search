import { CREATE_FOLDER, SET_FOLDERS } from "../actions/folderActions";

const defaultState = {
    folders: []
}

const foldersReducer = (state= defaultState, action) => {
    switch (action.type) {
        case CREATE_FOLDER:
            window.localStorage.setItem('folders', JSON.stringify([...state.folders, action.payload]));
            return {
                folders: [...state.folders, action.payload],
            }
        case SET_FOLDERS:
            return {
                folders: action.payload,
            }
        default:
            return state;
    }
}

export default foldersReducer;