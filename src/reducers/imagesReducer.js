import { SELECT_IMAGE, SET_IMAGES, CLEAR_SELECTED_IMAGES} from "../actions/imagesActions";

const defaultState = {
    images: [],
    selectedImages: [],
}

const imagesReducer = (state= defaultState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                images: action.payload,
                selectedImages: state.selectedImages,
            }
        case SELECT_IMAGE:
            if (state.selectedImages.some(url => url === action.payload)) {
                return {
                    images: state.images,
                    selectedImages: state.selectedImages.filter(image => image !== action.payload)
                }
            }else {
                return {
                    images: state.images,
                    selectedImages: [...state.selectedImages, action.payload]
                }
            }
        case CLEAR_SELECTED_IMAGES:
            return {
                images: state.images,
                selectedImages: [],
            }
        default:
            return state;
    }
}

export default imagesReducer;