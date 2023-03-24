
import { Card } from "react-bootstrap";
import "./Style.css"

import { Inputs } from "../model";

const Post = ({ text, name }: Inputs) => {
    return (
        <div>
            <Card className="mb-2 my-card">
                <Card.Header className="name">Name: {name}</Card.Header>
                <Card.Body>
                    <Card.Title className="todo">Post :- {text} 
                    </Card.Title>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Post