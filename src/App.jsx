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
import WithFooter from './components/WithFooter';
import { keyframes } from 'framer-motion';

const projectRoutes = [
    { path: "/", element: <><Home /><ProjectsTransition /><Projects /><About /></> },
    { path: "/jpg-attendance", element: <JPGAttendance /> },
    { path: "/nddu-attendance", element: <NDDUAttendance /> },
    { path: "/blaan-app", element: <BlaanApp /> },
];

function App() {
    return (
        <BrowserRouter>
            <ReactLenis root>
                <Navbar />
                <Routes>
                    {projectRoutes.map((project, index) => (
                        <Route key={index} path={project.path} element={
                            <WithFooter>{project.element}</WithFooter>
                        } />
                    ))
                    }
                </Routes>
            </ReactLenis>
        </BrowserRouter>
    );
}

export default App;