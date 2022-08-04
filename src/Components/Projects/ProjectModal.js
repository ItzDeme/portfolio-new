//import './ProjectModal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function ProjectModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img alt={props.project.name} src={props.project.image} style={{width: "100%"}}/>
        <div className="flex-space">
       { props.project.githubLocation != "Private" ? <a href={props.project.githubLocation} target="_blank"><h4><FontAwesomeIcon icon={faCode} /> View Code</h4></a> : <h4>Private Code</h4>}
       {props.project.description2 != "No website" ? <a href={props.project.description2} target="_blank"><h4>View Demo <FontAwesomeIcon icon={faLaptopCode} /></h4></a> : <h4>No Website</h4> }
        </div>
        <p>
          {props.project.description}
        </p>
        <span>Tech Used: {props.project.technology.map((tech, i)=> <p style={{display: 'inline-block'}} key={i}>{tech} &nbsp;</p>)}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;