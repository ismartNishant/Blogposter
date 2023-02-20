
import Form from "react-bootstrap/esm/Form"
import "./Style.css"
// import { handlers } from "../model";
import { useState } from "react";
import { Button } from "react-bootstrap";

const NewPost = () => {

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

          const postData={
            name:Name,
            text:Text
          }
          console.log(postData);
    }
    return (
        <Form className="" onSubmit={handlePost} >
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

            <Button variant="primary" type="submit" className="my-btn">
                Submit
            </Button>

        </Form>
    )
}

export default NewPost