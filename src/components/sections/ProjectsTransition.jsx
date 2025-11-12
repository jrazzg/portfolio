import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PorjecstTransition = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-orange-600">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    <h1 className="text-[15rem] text-black tracking-tight whitespace-nowrap">Crafting ideas into interactive experiences.</h1>
                </motion.div>
            </div>
        </section>
    );
};

export default PorjecstTransition;

