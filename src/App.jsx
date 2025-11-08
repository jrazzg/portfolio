import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import Home from './components/sections/Home';
import HorizontalProject from './components/sections/HorizontalProject';
import Contact from './components/sections/Contact';
import Project from './components/sections/Projects';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Sandbox from './components/sections/Sanbox';
import { ReactLenis } from 'lenis/react'

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
                <HorizontalProject />
                <Sandbox />
                <Project />
                <Contact />

            </div>
        </>
    );
}

export default App
