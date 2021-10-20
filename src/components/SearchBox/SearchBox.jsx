import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearSelectedImages, searchImages } from "../../actions/imagesActions";

const SearchBox = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleChange = e => setText(e.target.value);
    const handleSubmit = () => {
        if (text.trim() !== '') {
            dispatch(searchImages(text));
            dispatch(clearSelectedImages());
        }
        setText('')
    };

    return (
        <InputGroup className="mt-5 mb-5">
            <FormControl type='search' onChange={handleChange} value={text} placeholder='Szukaj...' />
            <Button variant='primary' onClick={handleSubmit}>Szukaj</Button>
        </InputGroup>
    )
}

export default SearchBox;