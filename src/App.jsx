import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import Home from './components/sections/Home';
import ProjectsTransition from './components/sections/ProjectsTransition';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import { ReactLenis } from 'lenis/react';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <ReactLenis root />
            <div className={"min-h-screen transition-opacity duration-700 bg-black text-white relative z-10"}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <ProjectsTransition />
                <Projects />
                <About />
            </div>
            <footer className='sticky bottom-0'>
                 <Contact/>
            </footer>
        </>
    );
}

export default App
