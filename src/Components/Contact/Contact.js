import './Contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Container, Row, Col} from 'react-bootstrap';

function Contact() {
  return (
    <div>
    <Row className="Contact app-section exo-font">
      <Col>
      <div>
        <h1 >Contact Me</h1>
      </div>
     <Form>
      <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </Col>
      <Col>
        
      </Col>
    
    </Row>
    </div>
  );
}

export default Contact;