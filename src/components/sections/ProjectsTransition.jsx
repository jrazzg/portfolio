import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectsTransition = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    return (
        <section id="horizontal" ref={targetRef} className="relative mt-5 md:h-[300vh] bg-[#ff5900]">
            <div className="sticky top-0 flex h-[30vh] md:h-screen items-center overflow-hidden text-[#0b0b0b] px-6 sm:px-10 ">
                <motion.div style={{ x }} className="hidden md:flex">
                    <h1 className="text-[17vw] tracking-tight whitespace-nowrap font-medium">
                        Crafting <span className="inline-block bg-white text-[17vw] text-[#0b0b0b] mr-15">ideas</span>
                        into <span className="inline-block decoration-white underline">interactive experiences.</span>
                    </h1>
                </motion.div>
                <h1 className="text-5xl  tracking-tight font-medium leading-[0.9]">
                    Crafting <span className="inline-block bg-white text-5xl text-[#0b0b0b] mr-[1vw]">ideas</span>
                    into <span className="inline-block decoration-white underline">interactive experiences.</span>
                </h1>
            </div>
        </section>
    );
};

export default ProjectsTransition;

