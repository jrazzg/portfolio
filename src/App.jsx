import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import HomeScreen from './components/sections/Home';
import AboutScreen from './components/sections/About';
import ContactScreen from './components/sections/Contact';
import ProjectScreen from './components/sections/Projects';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div className='h-screen' >this is a divvvvv</div>
                <HomeScreen/>
                <AboutScreen />
                <ContactScreen />
                <ProjectScreen />

            </div>
        </>
    );
}

export default App
