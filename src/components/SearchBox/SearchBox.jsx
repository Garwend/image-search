import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

const SearchBox = () => {
    const [text, setText] = useState('');

    const handleChange = e => setText(e.target.value);
    const handleSubmit = () => setText('');

    return (
        <InputGroup className="mt-5">
            <FormControl type='search' onChange={handleChange} value={text} placeholder='Szukaj...' />
            <Button variant='primary' onClick={handleSubmit}>Szukaj</Button>
        </InputGroup>
    )
}

export default SearchBox;