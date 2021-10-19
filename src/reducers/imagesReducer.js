import { SET_IMAGES } from "../actions/imagesActions";

const defaultState = {
    images: []
}

const imagesReducer = (state= defaultState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                images: action.payload,
            }
        default:
            return state;
    }
}

export default imagesReducer;