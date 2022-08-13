import './Projects.css';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import projects from './ProjectData.json';
import ProjectModal from './ProjectModal';

function Projects({siteData}) {

const [projectData, setProjectData] = useState(projects);
const [modalShow, setModalShow] = useState(false);
const [singleProject, setSingleProject] = useState()

  const responsive = {
    desktop: {
      breakpoint: { max: 3200, min: 1024 },
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


function handleModalToggle (project) {
setSingleProject(project);
setModalShow(true);
}
const handleProjectClick = (info, e, i) =>{
   
  if(info !== undefined){
    
    let array = siteData.site.projects
    let number = array.find(project => project.name === info.name);

    if(number.timeClosed === ''){
  
      number.timeOpened = new Date().toLocaleTimeString();
      
    }

    }
    
    
  }
  
const handleModalCLose = (info) =>{

  let array = siteData.site.projects
  let number = array.find(project => project.name === info.name);

  if(number.timeClosed === ''){
  
    number.timeClosed = new Date().toLocaleTimeString();
  }

}



  return (
    <div className="app-section projects">
      <h1 className="app-section exo-font" style={{color: '#f1f1f1'}}>Projects</h1>
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
        return <Card className='cursor project-card' style={{ width: '18rem', height: '250px' , boxShadow: "-12px 14px #9d2626" }} key={i} onClick={(event)=>(handleModalToggle(project), handleProjectClick(project, event, i))}>
                  <Card.Img variant="top" src={project.image} style={{height: '100%'}}/>
                </Card>
              
      })}
    </Carousel>
   {singleProject != null ? <ProjectModal sitedata={siteData}  onHide={() => (setModalShow(false), handleModalCLose(singleProject) )} show={modalShow} project={singleProject}/> : null}
   <div><p className='exo-font' style={{fontSize: '20px', color: '#f1f1f1'}}>(Click one to learn more!)</p></div>
    </div>
  );
}

export default Projects;