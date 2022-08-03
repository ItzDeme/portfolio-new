import './Projects.css';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import projects from './ProjectData.json';

function Projects() {

const [projectData, setProjectData] = useState(projects);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="Projects">
    <Carousel
       swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      centerMode={true}
       infinite={true}
      // autoPlaySpeed={1000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      // dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
    >
      {projectData.map((project, i) => {
        return <Card style={{ width: '12rem', height: '300px' }} key={i}>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Technologies</ListGroup.Item>
                      <ListGroup.Item>
                        {project.technology.map((tech, i)=> <p style={{display: 'inline-block'}} key={i}>{tech} &nbsp;</p>)}
                      </ListGroup.Item>
                   </ListGroup>

                    <Button variant="primary" onClick={() => openInNewTab(project.githubLocation)}>Verify</Button>
                  </Card.Body>
                </Card>
              
      })}
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>;
    </div>
  );
}

export default Projects;