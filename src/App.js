import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ComponentOne from './components/Component1/ComponentOne';              
import PROFESSIONAL_EXPERIENCE from './components/Component2/Componenttwo';
import Certificate from './components/Component3/Component3';
import Education from './components/Education/Education';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PROFESSIONAL_EXPERIENCE/>
      <Education />
            <ComponentOne/>

      <Projects />
      <Certificate/>
      <Contact />
    </div>
  );
}

export default App;