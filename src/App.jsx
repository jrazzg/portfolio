import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import HomeScreen from './components/sections/Home';
import AboutScreen from './components/sections/About';
import ContactScreen from './components/sections/Contact';
import ProjectScreen from './components/sections/Projects';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
            {/* {!isLoaded ? (
                <LoadingScreen onComplete={() => setIsLoaded(true)} />
            ) : (
                <div className="text-center text-white mt-20 inter-medium">
                    <h1>IS THIS INTER????</h1>
                </div>
            )} */}
            <HomeScreen/>
            <AboutScreen/>
            <ContactScreen/>
            <ProjectScreen/>
        </>
    );
}

export default App
