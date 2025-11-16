import RevealOnScroll from '../RevealOnScroll';
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS = [
    "#ff7f50", // soft warm coral
    "#ff6b1a", // main orange
    "#ff9f3c"  // subtle highlight
];

const Home = () => {
    const color = useMotionValue(COLORS[1]); // start with main orange

    const backgroundImage = useMotionTemplate`
        radial-gradient(
            120% 60% at 50% -10%, 
            ${color} 5%, 
            rgba(255,255,255,1) 100%
        )
    `;

    useEffect(() => {
        animate(color, COLORS, { repeat: Infinity, repeatType: "mirror", duration: 12, ease: "easeInOut" });
    }, []);

    return (
        <motion.section
            id="home"
            style={{ backgroundImage }}
            className="h-screen flex flex-col justify-center items-center mx-auto"
        >
            <div className='flex flex-col px-[20%] text-center'>
                <RevealOnScroll>
                    <h1 className="text-4xl pb-3 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-orange-600">
                        Hey, I'm Richard.
                    </h1>
                </RevealOnScroll>
                <RevealOnScroll>
                    <h1 className="text-7xl tracking-tight leading-[.9] bg-clip-text text-transparent bg-linear-to-r from-black to-black/55 pb-3">
                        I build software that turns vision into reality.
                    </h1>
                </RevealOnScroll>
            </div>
        </motion.section>
    );
};

export default Home;
