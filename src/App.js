import './App.css';
import Landing from './Components/Landing/Landing';
import React, {useState} from 'react';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
const [siteData, setSiteData] = useState(
  {
    site: {
      time: {
        dateJoined: new Date().toLocaleDateString(),
        joinedTime: new Date().toLocaleTimeString(),
        adandoned:''
      },
      certifications:{
        timeOpened: '',
        1:[],
        2:[],
        3:[],
        4:[],
        amountVerified: 0
      },
      projects:{
        timeOpened: '',
        1:[],
        2:[],
        3:[],
        4:[],
        5:[]
      },
      technologies:{
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[],
        7:[],
        8:[],
        9:[],
        10:[],
        11:[],
        12:[],
        13:[],
        14:[],
        clickedAmount: 0
        }

    }
  }
);

console.log(siteData);

  return (
    <div className="App">
      <button onClick={()=> console.log(siteData)}>Click me.</button>
      <Landing />
      <About setSiteData={setSiteData} siteData={siteData}/>
      <Projects />
      <Tech  setSiteData={setSiteData} siteData={siteData}/>
      <Contact />
    </div>
  );
}

export default App;
