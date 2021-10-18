export const CREATE_FOLDER = 'CREATE_FOLDER';
export const SET_FOLDERS = 'SET_FOLDERS';

export const createFolder = (payload) => ({
    type: CREATE_FOLDER,
    payload: payload,
})

export const setFolders = (payload) => ({
    type: SET_FOLDERS,
    payload: payload,
})