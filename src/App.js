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
      projects:[
        {
          name:"Flyball",
          timeOpened: '' ,
          viewDemo: false,
          viewCode: false,
          timeClosed: ''
        },
        {
          name:"Summer Storage",
          timeOpened: '' ,
          viewDemo: false,
          viewCode: false,
          timeClosed: ''
        },
        {
          name:"Nihon-OH!",
          timeOpened: '' ,
          viewDemo: false,
          viewCode: false,
          timeClosed: ''
        },
        {
          name:"BoosterPanel",
          timeOpened: '' ,
          viewDemo: false,
          viewCode: false,
          timeClosed: ''
        },
        {
          name:"Innovative Energy Network",
          timeOpened: '' ,
          viewDemo: false,
          viewCode: false,
          timeClosed: ''
        },
      ],
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
        },
      gameCount: 0,
      sentEmail: false

    }
  }
);
const [showStats, setShowStats] = useState(false);


  return (
    <div className="App">
      <Landing setSiteData={setSiteData} showStats={showStats} siteData={siteData}/>
      <About setSiteData={setSiteData} siteData={siteData}/>
      <Projects setSiteData={setSiteData} siteData={siteData}/>
      <Tech  setSiteData={setSiteData} siteData={siteData}/>
      <Contact setShowStats={setShowStats} siteData={siteData}/>
    </div>
  );
}

export default App;
