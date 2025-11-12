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
                    <h1 className="text-[18rem] tracking-tight whitespace-nowrap bg-linear-to-r from-white/80 via-[#ffb17c] to-[#ffffff] bg-clip-text text-transparent">
                        Crafting <span className="inline-block text-[16rem] bg-[#fbff00] text-[#ff7424] rotate-5 font-light mr-10">ideas</span>
                        into <span className="inline-block bg-linear-to-r font-bold from-white/10 to-white decoration-[#f36115]/20 underline bg-clip-text text-transparent">interactive experiences.</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default PorjectsTransition;

