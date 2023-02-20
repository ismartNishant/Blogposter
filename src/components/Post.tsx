
import { Card } from "react-bootstrap";
import "./Style.css"

import { Inputs } from "../model";

const Post = ({text, name} : Inputs) => {
    return (
        <div>
            <Card className="mb-2 my-card">
                <Card.Header className="name">{name}</Card.Header>
                <Card.Body>
                    <Card.Title className="todo">Post :</Card.Title>
                    <Card.Text> {text} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post