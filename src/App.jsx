import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/sections/Home';
import ProjectsTransition from './components/sections/ProjectsTransition';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import ProjectsStatic from "./components/sections/ProjectsStatic";
import { ReactLenis } from 'lenis/react';
import JPGAttendance from './components/projects/JPGAttendance';
import BlaanApp from './components/projects/BlaanApp';
import NDDUAttendance from './components/projects/NDDUAttendance';

function App() {
    return (
        <BrowserRouter>
            <ReactLenis root />
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="min-h-screen transition-opacity duration-700 bg-[#0b0b0b] text-white relative z-10">
                            <Home />
                            <ProjectsTransition />
                            <Projects />
                            <About />
                        </div>
                        <footer className='sticky bottom-0'>
                            <Contact />
                        </footer>
                    </>
                } />
                <Route path="/project" element={
                    <>
                        <div className="min-h-screen transition-opacity duration-700 bg-[#0b0b0b] text-white relative z-10">
                            <ProjectsStatic />
                        </div>
                        <footer className='sticky bottom-0'>
                            <Contact />
                        </footer>
                    </>
                } />
                <Route path="/jpg-attendance" element={<JPGAttendance/>} />
                <Route path="/nddu-attendance" element={<NDDUAttendance/>} />
                <Route path="/blaan-app" element={<BlaanApp/>} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;