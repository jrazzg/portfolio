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
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <ReactLenis root />
            <div className={`min-h-screen transition-opacity duration-700 scroll-smooth snap-y snap-mandatory 
                            ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <ProjectsTransition />
                <Projects />
                <About />
                <Contact />

            </div>
        </>
    );
}

export default App
