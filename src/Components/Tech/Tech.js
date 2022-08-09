import './Tech.css';
import React, {useState} from 'react';
import { Technologies } from './Techologies';

function Tech({siteData, setSiteData}) {
const [techInfo, setTechInfo] = useState("Below is a list techologies that I work with daily and some that I've used in the past that I can easily begin using again. Feel free to click the below technologies to learn more about how I use them.");
const [techID, setTechID] = useState(null);

const techStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  margin: '1em',
  backgroundColor: '#E4DCCF',
  borderRadius: '5px',
  padding: '0.5em',
  boxShadow: '2px 2px #100F0F',
  cursor: 'pointer',
}

const techStyleSelected = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  margin: '1em',
  backgroundColor: '#E4DCCF',
  borderRadius: '5px',
  padding: '0.5em',
  boxShadow: '2px 2px #100F0F',
  cursor: 'pointer',
  MozBoxShadow:    'inset 0 0 10px #000000',
  WebkitBoxShadow: 'inset 0 0 10px #000000',
  boxShadow:         'inset 0 0 10px #000000'
}

const handleTechClick = (info, e, i) =>{
  setTechInfo(info.info)
  setTechID(i)

    

   
  if(info != undefined){
    if(siteData.site.technologies[info.id].length == 0){
    siteData.site.technologies[info.id].push(true, new Date().toLocaleTimeString(), info.name)
    siteData.site.technologies.clickedAmount++;
    console.log(siteData)
    }
    
    
  }
    
}


  return (
    <div className="app-section tech">
      <header className="tech-header">
      <h1 className='exo-font'>Tools and Technologies</h1>
      <div className="exo-font tech-info tech-display">
      <p style={{fontSize: '1.3em'}}>{techInfo}</p>
      </div>
      <div className='tech-display'>
        {Technologies.map((tech, i) => {
          return <div key={i} style={i == techID ? techStyleSelected : techStyle} onClick={(event)=>{handleTechClick(tech, event, i)}}>
            <img alt={tech.name} src={tech.link} style={{width: '30px', height: '30px'}} />
            <p>{tech.name}</p>
          </div>
        })}
      </div>
      </header>
    </div>
  );
}

export default Tech;