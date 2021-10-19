import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from './subcomponents/Image';

const ImagesList = () => {
    const images = useSelector(state => state.imagesReducer.images);
    return (
        <Row className='mb-5 justify-content-around' xs='auto'>
            {images.map(image => <Image key={image.id} url={image.urls.regular} alt={image.alt_description} />)}
        </Row>
    )
}

export default ImagesList;