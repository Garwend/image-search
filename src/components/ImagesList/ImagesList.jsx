import { Row, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ImagesList = () => {
    const images = useSelector(state => state.imagesReducer.images);
    return (
        <Row className='mb-5' xs='auto'>
            {images.map(image => <Image className='w-25 mb-4' style={{objectFit:'cover'}} key={image.id} src={image.urls.regular} rounded/>)}
        </Row>
    )
}

export default ImagesList;