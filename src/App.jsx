import { useState } from 'react';
import './App.css'
import './index.css';
import Home from './components/sections/Home';
import ProjectsTransition from './components/sections/ProjectsTransition';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <>
            <ReactLenis root />
            <div ref={ref} className={"min-h-screen transition-opacity duration-700 bg-black text-white relative z-10"}>
                <motion.div
                    style={{
                        y,
                        backgroundImage: `
                                        linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px),
                                        linear-gradient(to bottom, rgba(255,255,255,.3) 1px, transparent 1px)
                                    `,
                        backgroundSize: "50px 50px",
                    }}
                    className="absolute inset-0 opacity-20 overflow-hidden"
                />
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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

export default App
