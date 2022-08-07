import './Contact.css';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
const [email, setEmail] = useState();
const [message, setMessage] = useState();

const handleInput = async (e) =>{
 e.target.name === 'email' ? setEmail(e.target.value) : setMessage(e.target.value);
}
const handleSumbit = (data) =>{
 data.preventDefault();
 const input ={
  email: email,
  message: message
 }
  
console.log(input);
setEmail('');
setMessage('');
}

  return (
    <div className="contact">
    <Row className="app-section exo-font">
    <h1 >Contact Me</h1>
      <Col>
      <div>
        
      </div>
     <Form style={{maxWidth: '400px' , margin: 'auto'}} onSubmit={handleSumbit}>
      <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Email" name='email' onChange={(e)=> handleInput(e)}/>
      </Form.Group>
      <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Message</Form.Label>
        <Form.Control value={message} as="textarea" rows={3} onChange={(e)=> handleInput(e)}/>
        <Button variant="primary" type="submit" style={{maxWidth: '400px' , margin: '10px'}} >
        Submit
      </Button>
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