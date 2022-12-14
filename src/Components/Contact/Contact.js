import './Contact.css';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact({setShowStats, siteData, handleDBPush}) {
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [notBot, setNotBot] = useState(false);
const handleInput = async (e) =>{
 e.target.name === 'email' ? setEmail(e.target.value) : setMessage(e.target.value);
}
const handleSumbit = (data) =>{
 data.preventDefault();
 const formSubmit = `${process.env.REACT_APP_CONTACT_FORM_URL}entry.1917394876=${email}&entry.239537150=${message}`;
 fetch(formSubmit, ()=> console.log("It works, but for some reason screams."))
setEmail('');
setMessage('');

if(siteData.site.sentEmail === false){
siteData.site.sentEmail = true;
}
}

const handleStatCreation = async (e) =>{
  setShowStats(true);
  handleDBPush()
 }

  return (
    <div className="contact">
    <Row className="app-section exo-font">
    <h1 >Contact Me </h1>
      <Col>
      <div>
        
      </div>
     <Form style={{maxWidth: '400px', minWidth: '200px' , margin: 'auto'}} onSubmit={handleSumbit} autoComplete="off">
      <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Email" name='email'  onChange={(e)=> handleInput(e)}/>
      </Form.Group>
      <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Message</Form.Label>
        <Form.Control value={message} as="textarea" name='message'  rows={3} onChange={(e)=> handleInput(e)}/>
{!notBot ?  <ReCAPTCHA size='compact' sitekey={process.env.REACT_APP_CAPTCHA_KEY} onChange={()=>setNotBot(true)} /> : <Button variant="primary" type="submit" style={{maxWidth: '400px' , margin: '10px'}} >Submit</Button>}      </Form.Group>
    </Form>
    </Col>
    <Col style={{  display: 'block',
    marginTop: '2rem'}}>
      <div>
      <Button href='#landing' variant="light" style={{fontSize: '32px'}} size="lg" onClick={()=> handleStatCreation()}>Click here to see your stats!</Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly'}}>
        <h1 style={{fontSize: '50px', margin: '2rem 100px'}}>
        <a href="https://github.com/ItzDeme" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </h1>
        <h1 style={{fontSize: '50px',  margin: '2rem 100px'}}>
        <a href="https://www.linkedin.com/in/demetrius-b-7775331a9/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </h1>
      </div>
      </Col>
    </Row>
    </div>
  );
}

export default Contact;