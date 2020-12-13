import React from 'react'
import { Row,Col,Container,Card,Button,Form} from 'react-bootstrap';

function Contact() {
    return (
        <div className="container-fluid bg-dark">
        <Row>
            <Col>
                <h1 className="text-center m-4 text-light">
                    contact me

                </h1>

            </Col>
            </Row>
            <Row>
            <Col sm="12" lg="8" md="8" className="container-fluid text-light">
                <Form action="https://formspree.io/f/xyybnbge" method="POST">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name </Form.Label>
    <Form.Control type="name" name="name" placeholder="Enter name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Message</Form.Label>
    <Form.Control type="text" name="message" placeholder="Enter Message" />
  </Form.Group>
  
  <Button variant="primary" value="Send"type="submit">
    Submit
  </Button>
</Form>
            </Col>
        </Row>

            
        </div>
    );
}

export default Contact

