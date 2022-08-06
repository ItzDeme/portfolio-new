import './Contact.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contact">
    <Row className="app-section exo-font">
    <h1 >Contact Me</h1>
      <Col>
      <div>
        
      </div>
     <Form style={{maxWidth: '400px' , margin: 'auto'}}>
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
    <Col style={{  display: 'block',
    marginTop: '2rem'}}>
      <div>
      <Button variant="light" size="lg">Click here to see your stats!</Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly'}}>
        <h1 style={{fontSize: '50px', margin: '2rem 100px'}}>
        <a href="https://github.com/ItzDeme" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        </h1>
        <h1 style={{fontSize: '50px',  margin: '2rem 100px'}}>
        <a href="https://www.linkedin.com/in/demetrius-b-7775331a9/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </h1>
      </div>
      </Col>
    </Row>
    </div>
  );
}

export default Contact;