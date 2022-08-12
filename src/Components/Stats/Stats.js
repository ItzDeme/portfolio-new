import './Stats.css';
import React, {useState} from 'react';



function GetCertifications ({cert, dataPoint}){
return(
 cert[dataPoint] == 0 ? null : <li style={{fontSize: '1.7rem',}}>{cert[dataPoint][2]}, and viewed at {cert[dataPoint][1]}</li> 
)}
function GetProjects ({proj, dataPoint, point}){    
return(
  proj[point].timeOpened === '' ? <li style={{fontSize: '1.7rem',}}>{proj[point].name} has not been viewed. 😑</li> : <li style={{fontSize: '1.7rem'}}>{proj[point].name}, was viewed at {proj[point].timeOpened} and closed at {proj[point].timeClosed}.  Viewed Code? {!proj[point].viewCode ? 'No' : 'Yes'} | Viewed Demo? {!proj[point].viewDemo ? 'No' : 'Yes'}</li>
)}
function GetTechnologies(tech, dataPoint, i){
return(
 tech.tech[tech.dataPoint] == 0 ? null : <li style={{fontSize: '1.7rem'}}>{tech.tech[tech.dataPoint][2]} was reviewed at {tech.tech[tech.dataPoint][1]}</li> 
)}


function Stats({siteData}) {

const certStuff = siteData.site.certifications;
const projectStuff = siteData.site.projects;
const techStuff = siteData.site.technologies;

const concat = siteData.site.time.dateJoined + ' ' + siteData.site.time.joinedTime;

var time1 = new Date(concat);
var time2 = new Date();
var time3 = time2.getTime();

var timeElasped = Math.round((time3 - time1)/1000);


function getElaspedTime(){

if(timeElasped < 60){
return `${timeElasped} seconds`
}else if(timeElasped > 60 && timeElasped < 1200){
    return `${Math.round(timeElasped/60)} minutes`
}else{
    return `a long time.`
}
}

console.log()

const ulStyle = {
    fontSize: '1.7rem',
}


  return (
    <div className="stats">
     <h1 className='secular-font' >Your Stats!</h1>
     <p className='exo-font' style={{fontSize: '1.7rem'}}>You've been here for {getElaspedTime()}</p>
     <p className='exo-font' style={{fontSize: '1.7rem'}}>Red Box Clicker Score: {siteData.site.gameCount}</p>
     <div> 
    <h2 className='secular-font' style={{fontSize: '2.3rem',}}>Certifications verified and time viewed: {certStuff.amountVerified}</h2>
    <ul className='exo-font' style={{ulStyle}}>
        {Object.keys(certStuff).map((data,i) => {
  return data.length < 2 ? <GetCertifications  key={i} cert={certStuff} dataPoint={data} /> : null
        })}
    </ul>
     </div>
     <div>
     <h2 className='secular-font' style={{fontSize: '2.3rem',}}>Projects you viewed:</h2>
    <ul className='exo-font' style={{ulStyle}}>
        {Object.entries(projectStuff).map((data,i) => {
  return  <GetProjects key={i}  proj={projectStuff} dataPoint={data}  point={i} />
        })}
    </ul>
     </div>
     <div>
     <h2 className='secular-font' style={{fontSize: '2.3rem',}}>Technologies you've clicked: {techStuff.clickedAmount}</h2>
    <ul className='exo-font' style={{ulStyle}}>
        {Object.keys(techStuff).map((data,i) => {
  return data.length < 3 ? <GetTechnologies key={i} tech={techStuff} dataPoint={data} point={i}/>  : null
        })}
    </ul>
     </div>

    </div>
  );
}

export default Stats;


{/*  */}