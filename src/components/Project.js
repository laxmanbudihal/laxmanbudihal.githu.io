import React from "react"
import { Row,Col,Container,Card,Button} from 'react-bootstrap';

function Project()  {
    return(
        <div>
            <Container id="project">
            <Row>
                <Col>
                <h1 className="mt-2 text-center">My Projects</h1>

                </Col>
            </Row>
            <Row>
                <Col>
                        <Card className="mt-2 mb-2">
    <Card.Img variant="top" src="/todo.png" />
     <Card.Body>
        <Card.Title>To-Do app</Card.Title>
        <Card.Text>
        To Do App it will help you to Save a note of Work And After the completion of Work if you click on the work Message box then it Show you that the work is Completed
        </Card.Text>
        <Button
         onClick={()=>{
             window.open("https://laxmanbudihal-todo.netlify.app/")
         }
         }
          variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

                </Col>
                <Col>
                        <Card className="mt-2 mb-2">
    <Card.Img variant="top" src="/a.png" />
     <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button
         onClick={()=>{
             window.open("https://codesandbox.io/s/react-snippet-forked-6pmey?file=/src/styles.css","_blank")
         }
         }
          variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

                </Col>
                <Col>
                        <Card className="mt-2 mb-2">
    <Card.Img variant="top" src="/a.png" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button
         onClick={()=>{
             window.open("https://codesandbox.io/s/react-snippet-forked-6pmey?file=/src/styles.css","_blank")
         }
         }
          variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>

                </Col>
            </Row>
           </Container> 
        </div>

    );
}
export default Project
