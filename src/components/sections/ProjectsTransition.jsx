import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PorjectsTransition = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-80%"]);

    return (
        // <section ref={targetRef} className="relative h-[300vh]" style={{ backgroundImage: 'linear-gradient(to bottom, #f54900, #ff6b1a, #b93400, black)', }}>
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    <h1 className="text-[18rem] tracking-tight whitespace-nowrap">
                        Crafting <span className="inline-block text-[16rem] bg-[#f54900] mr-15">ideas</span>
                        into <span className="inline-block decoration-[#f54900] underline">interactive experiences.</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default PorjectsTransition;

