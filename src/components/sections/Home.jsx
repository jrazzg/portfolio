import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS = [
    // "#ff8c42", // bright pumpkin orange
    "#ff6b1a", // warm vibrant orange
    "#f54900", // your main color (deep vivid orange)
    "#b93400"  // dark burnt orange for depth
]

const Home = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #000 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    })

    return (
        <motion.section
            id="home"
            style={{ backgroundImage, }}
            className="h-screen flex items-center mx-auto"
        >
            <div className='px-[20%] space-y-3 text-center'>
                <h1 className="uppercase tracking-widest mb-6 text-white">Hey, I'm Razzi.</h1>
                <h2 className="text-7xl bg-linear-to-b from-orange-700 to-orange-600 bg-clip-text text-transparent">I turn ideas into software, and errors into lessons.</h2>
            </div>
        </motion.section>
    )
}
export default Home;