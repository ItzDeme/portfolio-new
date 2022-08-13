import './Stats.css';
import React from 'react';



function GetCertifications ({cert, dataPoint}){
return(
 cert[dataPoint] == 0 ? null : <li className='fluid-font' style={{listStyle: 'none'}}>{cert[dataPoint][2]}, and viewed at {cert[dataPoint][1]}</li> 
)}
function GetProjects ({proj, dataPoint, point}){    
return(
  proj[point].timeOpened == '' ? <li className='fluid-font' style={{listStyle: 'none'}}>{proj[point].name} has not been viewed. 😑</li> : <li className='fluid-font' style={{listStyle: 'none'}}>{proj[point].name}, was viewed at {proj[point].timeOpened} and closed at {proj[point].timeClosed}.  Viewed Code? {!proj[point].viewCode ? 'No' : 'Yes'} | Viewed Demo? {!proj[point].viewDemo ? 'No' : 'Yes'}</li>
)}
function GetTechnologies(tech, dataPoint, i){
return(
 tech.tech[tech.dataPoint] == 0 ? null : <li className='fluid-font' style={{listStyle: 'none'}}>{tech.tech[tech.dataPoint][2]} was reviewed at {tech.tech[tech.dataPoint][1]}</li> 
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
  return (
    <div className="stats">
     <h1 className='secular-fluid-font-title' >Your Stats!</h1>
     <p className='exo-font fluid-font' >You've been here for {getElaspedTime()}</p>
     <p className='exo-font fluid-font' >Red Box Clicker Score: {siteData.site.gameCount}</p>
     {!siteData.site.sentEmail ? <p className='exo-font fluid-font'> You didn't send me an email. 😑</p> : <p className='exo-font fluid-font'> You sent me an email!</p>}
     <div style={{margin: '2vh'}}> 
    <h2 className='secular-font fluid-font-title'>Certs verified and time viewed: {certStuff.amountVerified}</h2>
    <ul className='exo-font' style={{}}>
        {Object.keys(certStuff).map((data,i) => {
  return data.length < 2 ? <GetCertifications  key={i} cert={certStuff} dataPoint={data} /> : null
        })}
    </ul>
     </div>
     <div style={{margin: '2vh'}}>
     <h2 className='secular-font fluid-font-title'>Projects you viewed:</h2>
    <ul className='exo-font' style={{}}>
        {Object.entries(projectStuff).map((data,i) => {
  return  <GetProjects key={i}  proj={projectStuff} dataPoint={data}  point={i} />
        })}
    </ul>
     </div>
     <div style={{margin: '2vh'}}>
     <h2 className='secular-font fluid-font-title'>Technologies you've clicked: {techStuff.clickedAmount}</h2>
    <ul className='exo-font' style={{}}>
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