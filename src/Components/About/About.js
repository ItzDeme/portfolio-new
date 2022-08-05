import './About.css';
import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Certs from './CertificationData.json'
import {Chart as ChartJS} from 'chart.js/auto';
import { ChartData } from './ChartData';

function About() {
  const [certifs, setCertifs] = useState(Certs);
  const [graphData, setGraphData] = useState ({
    labels: ChartData.map((data) => data.label),
    datasets: [{
      label: "Users Gained",
      data: ChartData.map((data) => data.percentage),
      backgroundColor: ChartData.map((data) => data.color),
      borderColor: '#0F3D3E',
      hoverOffset: 10
    }],
    
  })


 
  

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };




  return (
   


    <div className="app-section about-section">
    <Row>
      <Col fluid="true">
        <h1 className='exo-font'>About</h1>
      </Col>
    </Row>
    <Row className="">
      <Col>
        <h1>Picture of Something</h1>
        <p>Hey there! I am a self taught developer. I have completed multiple certificates/tutorials. I have also 
          created a couple projects listed below. As of recently most of my work has been with Web development. 
          But programming is like riding a bike, just need to relearn the syntax.</p>
      </Col>
      <Col style={{width: '200px'}}>
        <Doughnut data={graphData} />
      </Col>
    </Row>
    <div>
    <Row className="app-section">
      <Col>
        <h2 className='exo-font font-weight'>Certifications</h2>
      </Col>
    </Row>
    <Row className="cert-section">

    {certifs.map((cert, i) => {
        return <Col key={cert.id} >
                <Card style={{ width: '12rem' }} >
                  <Card.Img variant="top" src={cert.image} />
                  <Card.Body>
                    <Card.Title>{cert.name}</Card.Title>
                    <Button variant="primary" onClick={() => openInNewTab(cert.verify)}>Verify</Button>
                  </Card.Body>
                </Card>
              </Col>
      })}
    
    </Row>
    </div>
  </div>
  );
}

export default About;



{/* <Carousel variant='dark'>
      {data.map((cert, i) => {
        return <Carousel.Item interval={10000}>
        <img
          className="d-block w-25 m-auto"
          src={cert.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{cert.name}</h1>
          <h3><a href={cert.verify} target="_blank">Verify</a></h3>
        </Carousel.Caption>
      </Carousel.Item>
      })}
    </Carousel> */}