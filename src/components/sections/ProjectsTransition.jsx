import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PorjectsTransition = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]" style={{ backgroundImage: 'linear-gradient(to bottom, #f54900, #ff6b1a, #b93400, #000000)', }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    <h1 className="text-[18rem] tracking-tight whitespace-nowrap bg-linear-to-r from-white/80 via-[#ffb17c] to-[#ffc4aab2] bg-clip-text text-transparent">
                        Crafting ideas into interactive experiences.
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default PorjectsTransition;

