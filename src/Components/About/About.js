import './About.css';
import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Certs from './CertificationData.json'
import {Chart as ChartJS} from 'chart.js/auto';
import Accordion from 'react-bootstrap/Accordion';
import { ChartData } from './ChartData';
import skillsImage from '../Images/skills.png'

function About({siteData}) {
  const [certifs, setCertifs] = useState(Certs);
  const [graphData, setGraphData] = useState ({
    labels: ChartData.map((data) => data.label),
    datasets: [{
      label: "Users Gained",
      data: ChartData.map((data) => data.percentage),
      backgroundColor: ChartData.map((data) => data.color),
      borderColor: '#0F3D3E',
      hoverOffset: 19
    }],
    font: {
      size: 48
    }
    
  })

  var timesClicked = 0;

 const optionsGraph = {
  plugins:{
  legend: {
      labels: {
          // This more specific font property overrides the global property
          font :{
            size: '20rem'
          }
      }
    }
  }
}
  

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


const handleCertClicked = (e, cert) =>{

if(e.target.innerText === 'Certifications'){
if(timesClicked < 1 )
{
siteData.site.certifications.timeOpened = new Date().toLocaleTimeString()
//setSiteData(siteData.site.certifications: {timeOpened: new Date().toLocaleTimeString()})
timesClicked++;
}

}
if(cert !== undefined){
if(e.target.innerText === 'Verify'){
if(siteData.site.certifications[cert.id].length === 0){
siteData.site.certifications[cert.id].push(true, new Date().toLocaleTimeString(), cert.name)
siteData.site.certifications.amountVerified++;
}
}
}

}



  return (
   


    <div className="app-section about-section">
    <Row>
      <Col fluid="true">
        <h1 className='exo-font'>About Me</h1>
      </Col>
    </Row>
    <Row className="">
      <Col>
        <img alt='image_of_skills' src={skillsImage}/>
        <p className='exo-font about-paragraph' style={{fontSize: '1.3em'}}>Hey there! I am a self taught developer. I have completed multiple certificates and tutorials. I have also 
          created a couple projects listed below. As of recently, most of my work has been with Web development. 
          But programming is like riding a bike, you just need to relearn the syntax. A little about me, I love video games, hiking and secretly doing some voice acting.</p>
      </Col>
      <Col className='donut-graph' >
        <Doughnut  data={graphData}  options={optionsGraph}/>
      </Col>
    </Row>
    <div>
    <Row className="app-section">
    <Accordion onClick={(e)=>{handleCertClicked(e)}} name='accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><Col>
        <h2 className='exo-font font-weight' style={{textAlign: 'center'}}>Certifications</h2>
      </Col></Accordion.Header>
        <Accordion.Body>
        <Row className="cert-section">

        {certifs.map((cert, i) => {
            return <Col key={cert.id} >
                    <Card style={{ width: '12rem' }} >
                      <Card.Img variant="top" src={cert.image} />
                      <Card.Body>
                        <Card.Title>{cert.name}</Card.Title>
                        <Button variant="primary" onClick={(e) => handleCertClicked(e, cert, openInNewTab(cert.verify))}>Verify</Button>
                      </Card.Body>
                    </Card>
                  </Col>
          })}

        </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
    </Row>
   
    </div>
  </div>
  );
}

export default About;