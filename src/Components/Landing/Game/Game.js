import React, {useState} from 'react';
import './Game.css'
import $ from "jquery";


function Game({siteData}) {
const [verticalAxis, setVerticalAxis] = useState(Math.floor(Math.random() * 95))
const [horizontalAxis, setHorizontalAxis] = useState(Math.floor(Math.random() * 90))


const handleGameClick = () =>{
    setVerticalAxis(Math.floor(Math.random() * 95));
    setHorizontalAxis(Math.floor(Math.random() * 90));
    siteData.site.gameCount++;
    $('.game').animate({ top: `${String(verticalAxis)}%`, left: `${String(horizontalAxis)}%` }, 200)
}




const gameStyle = {
 
}



  return (
    <div className="game" style={{top: `${String(verticalAxis)}%`, left: `${String(horizontalAxis)}%`, cursor: "pointer",
    animation: `move 2s`,}} onClick={()=> handleGameClick()} >
       
    </div>
  );
}

export default Game;