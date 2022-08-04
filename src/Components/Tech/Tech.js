import './Tech.css';
import { Technologies } from './Techologies';

function Tech() {
  return (
    <div className="app-section Tech">
      <header className="Tech-header">
      <h1>Technologies</h1>
      <div className='tech-display'>
        {Technologies.map((tech, i) => {
          return <div key={i} style={{width: '200px'}}>
            <img alt={tech.name} src={tech.link} style={{width: '30px'}} />
            <p>{tech.name}</p>
          </div>
        })}
      </div>
      </header>
    </div>
  );
}

export default Tech;