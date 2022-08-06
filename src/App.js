import './App.css';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Tech from './Components/Tech/Tech';
import Contact from './Components/Contact/Contact';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
