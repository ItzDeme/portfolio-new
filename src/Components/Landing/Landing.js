import './Landing.css';

function Landing() {

  const h1Style = {
    color: '#E2DCC8',
    textDecoration: 'underline #0D7377 solid 4px'
  }

  const pStyle = {
    fontSize: '2rem',
    fontWeight: '600',
  }


  return (
    <div className="landing">
      <div className="landing-flex">
        <div className='landing-text'>
        <h1 className='secular-font'>My name is <span style={h1Style}>Demetrius</span></h1>
        <p className='exo-font' style={pStyle}>A self taught Developer</p>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;