import './App.css';
import './stylesheets/About.css';
import './stylesheets/Hero.css';
import './stylesheets/Services.css';
import './stylesheets/MyWork.css';
import './stylesheets/Contact.css'

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <About/>
        <Services/>
        <MyWork/>
        <Contact/>

    </div>
  );
}

export default App;
