import './Projects.css';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import projects from './ProjectData.json';
import ProjectModal from './ProjectModal';

function Projects() {

const [projectData, setProjectData] = useState(projects);
const [modalShow, setModalShow] = useState(false);
const [singleProject, setSingleProject] = useState()

  let projectInfo = {};
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

function handleModalToggle (project) {
setSingleProject(project);
setModalShow(true);
}


  return (
    <div className="app-section Projects">
      <h1 className="app-section">Projects</h1>
    <Carousel
       swipeable={false}
      draggable={false}
      responsive={responsive}
      centerMode={true}
       infinite={true}
      containerClass="carousel-container"
     itemClass="carousel-item-padding-40-px"
    >
      {projectData.map((project, i) => {
        return <Card className='cursor' style={{ width: '18rem', height: '250px' , boxShadow: "-12px 14px #9d2626" }} key={i} onClick={()=>handleModalToggle(project)}>
                  <Card.Img variant="top" src={project.image} style={{height: '100%'}}/>
                </Card>
              
      })}
    </Carousel>;
   {singleProject != null ? <ProjectModal onHide={() => setModalShow(false)} show={modalShow} project={singleProject}/> : null}
    </div>
  );
}

export default Projects;