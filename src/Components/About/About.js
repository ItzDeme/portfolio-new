import './About.css';
import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Certs from './CertificationData.json'
import {Chart as ChartJS} from 'chart.js/auto';
import Accordion from 'react-bootstrap/Accordion';
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
      hoverOffset: 19
    }],
    font: {
      size: 48
    }
    
  })


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
        <p className='exo-font' style={{fontSize: '1.3em'}}>Hey there! I am a self taught developer. I have completed multiple certificates/tutorials. I have also 
          created a couple projects listed below. As of recently most of my work has been with Web development. 
          But programming is like riding a bike, just need to relearn the syntax.</p>
      </Col>
      <Col className='donut-graph' >
        <Doughnut  data={graphData}  options={optionsGraph}/>
      </Col>
    </Row>
    <div>
    <Row className="app-section">
    <Accordion>
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
                        <Button variant="primary" onClick={() => openInNewTab(cert.verify)}>Verify</Button>
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