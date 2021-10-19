import {ACCESS_KEY} from '../secret';

export const SET_IMAGES = 'SET_IMAGES';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const setImages = (payload) => ({
    type: SET_IMAGES,
    payload: payload,
})

export const selectImage = (payload) => ({
    type: SELECT_IMAGE,
    payload: payload,
})

export const searchImages = (query) => (dispatch) => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Version': 'v1',
            'Authorization': `Client-ID ${ACCESS_KEY}`
        },
    })
        .then(res => res.json())
        .then(
            (res) => {
                console.log(res.results)
                dispatch(setImages(res.results))
            },
            (error) => {
                console.log(error)
            }
        )
}