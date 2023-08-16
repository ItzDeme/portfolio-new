import './App.css';
import Landing from './Components/Landing/Landing';
import React, {useState} from 'react';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';
import {v4 as uuidv4} from 'uuid';
import SheetDB from 'sheetdb-js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
      sentEmail: false,
      id: uuidv4()

    }
  }
);
const [showStats, setShowStats] = useState(false);


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  const handleDBPush = ()=>{
   
    const sentData = {
  
      id: siteData.site.id,
      dateJoined: siteData.site.time.dateJoined,
      joinedTime: siteData.site.time.joinedTime,
      adandoned: siteData.site.time.adandoned,
      amountVerified: siteData.site.certifications.amountVerified,
      clickedAmount: siteData.site.technologies.clickedAmount,
      gameCount: siteData.site.gameCount,
      sentEmail: !siteData.site.sentEmail ? 'false' : 'true',
      timeSent: new Date().toLocaleTimeString()
  
    }
  
  
    SheetDB.write(process.env.REACT_APP_SHEET_DB_URL, sentData).then(function(result){
    
  }, function(error){
    console.log(error);
  });
  }


  return (
    <div className="App">
      <Landing setSiteData={setSiteData} showStats={showStats} siteData={siteData}/>
      <About setSiteData={setSiteData} siteData={siteData}/>
      <Projects setSiteData={setSiteData} siteData={siteData}/>
      <Tech  setSiteData={setSiteData} siteData={siteData}/>
      <Contact handleDBPush={handleDBPush} setShowStats={setShowStats} siteData={siteData}/>
    </div>
  );
}

export default App;
