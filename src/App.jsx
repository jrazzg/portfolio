import { useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import './index.css';

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
        </>
    );
}

export default App
