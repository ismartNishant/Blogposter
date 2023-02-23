
import Form from "react-bootstrap/esm/Form"
import "./Style.css"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Inputs } from "../model";

interface Props {
    onAddPost: (postData: Inputs) => void;
    handleClose: () => void;
}


const NewPost: React.FC<Props> = ({ onAddPost, handleClose }) => {


    const [Text, setText] = useState<string>('');
    const [Name, setName] = useState<string>('');


    const handleText: React.FormEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleName: React.FormEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handlePost: React.FormEventHandler = (event) => {
        event.preventDefault();
        const postData = {
            text: Text,
            name: Name,
        };
        onAddPost(postData);
        handleClose()
        console.log(typeof (postData));
        console.log(postData);

    }

    return (
        <Form className="" onSubmit={handlePost}  >
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control required className="input" id="name" type="text" placeholder="Your name"
                    onChange={handleName} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Text</Form.Label>
                <Form.Control required className="input" id="text" rows={3} as="textarea" placeholder="Add your text here"
                    onChange={handleText} />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn border-0 fw-bold px-3 me-3" >
                SUBMIT
            </Button>
            <Button className='post-btn border-0 fw-bold px-3' onClick={handleClose}>
                CANCLE
            </Button>
        </Form>
    )
}

export default NewPost