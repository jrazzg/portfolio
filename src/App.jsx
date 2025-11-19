import './App.css'
import './index.css';
import Home from './components/sections/Home';
import ProjectsTransition from './components/sections/ProjectsTransition';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import { ReactLenis } from 'lenis/react';

function App() {
    return (
        <>
            <ReactLenis root />
            <div className={"min-h-screen transition-opacity duration-700 bg-[#0b0b0b] text-white relative z-10"}>
                <Navbar />
                <Home />
                <ProjectsTransition />
                <Projects />
                <About />
            </div>
            <footer className='sticky bottom-0'>
                <Contact />
            </footer>
        </>
    );
}

export default App;