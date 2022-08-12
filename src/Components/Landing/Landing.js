import './Landing.css';
import Stats from '../Stats/Stats';
import Game from './Game/Game';

function Landing({siteData, setSiteData, showStats}) {

  const h1Style = {
    color: '#E2DCC8',
    textDecoration: 'underline #0D7377 solid 4px'
  }

  const pStyle = {
    fontSize: '2rem',
    fontWeight: '600',
  }


  return (
    <div className="landing" id='landing'>
      
      <div className="landing-flex">
        <div className='landing-text'>
        <h1 className='secular-font'>My name is <span style={h1Style}>Demetrius</span></h1>
        <p className='exo-font' style={pStyle}>A self taught Developer</p>
        </div>
      </div>
     { !showStats ? <Game siteData={siteData}/> : <Stats siteData={siteData}/>}
    </div>
  );
}

export default Landing;