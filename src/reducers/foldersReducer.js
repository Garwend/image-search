import { CREATE_FOLDER, SET_FOLDERS, ADD_IMAGE_TO_FOLDER } from "../actions/folderActions";

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
        case ADD_IMAGE_TO_FOLDER:
            const folders = JSON.parse(window.localStorage.getItem('folders'));
            const folderIdx = folders.findIndex(folder => folder.name === action.payload.folderName);
            folders[folderIdx].images = [...folders[folderIdx].images, ...action.payload.selectedImages];
            folders[folderIdx].images = [...new Set(folders[folderIdx].images)];
            window.localStorage.setItem('folders', JSON.stringify(folders));

            return {
                folders,
            };
            
        default:
            return state;
    }
}

export default foldersReducer;