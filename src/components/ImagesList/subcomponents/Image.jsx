import { useSelector, useDispatch } from "react-redux";
import { selectImage } from "../../../actions/imagesActions";


const Image = ({url, alt}) => {
    const selectedImages = useSelector(state => state.imagesReducer.selectedImages)
    
    const dispatch = useDispatch();
    const handleClick = () => dispatch(selectImage(url));
    
    return (
        <img 
        className={selectedImages.some(imageUrl => imageUrl === url) ? 'w-25 mb-4 p-0 ms-4 border border-primary border-4' :'w-25 mb-4 p-0 ms-4' }
        style={{objectFit:'cover', cursor:'pointer'}} 
        src={url}
        alt={alt} 
        onClick={handleClick} />
    )
}

export default Image;