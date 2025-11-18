import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectsTransition = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    return (
        <section id="horizontal" ref={targetRef} className="relative mt-5 h-[300vh] bg-[#ff5900]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden text-[#0b0b0b]">
                <motion.div style={{ x }} className="flex">
                    <h1 className="text-[18rem] tracking-tight whitespace-nowrap font-medium">
                        Crafting <span className="inline-block bg-white text-[16rem] text-[#0b0b0b] mr-15">ideas</span>
                        into <span className="inline-block decoration-white underline">interactive experiences.</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};  

export default ProjectsTransition;

