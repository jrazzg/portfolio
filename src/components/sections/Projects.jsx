import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import isoUlt from "../../assets/videos/iso_ult.mp4"
import neonUlt from "../../assets/videos/neon_ult.mp4"
import sovaUlt from "../../assets/videos/sova_ult.mp4"

const ProjectCard = ({ name, vidSource, platform }) => {
    return (
        <a href="#" className="relative flex-1 items-end rounded-[20px] border-8 border-white/10 
                                duration-500
                                hover:-translate-y-10 
                                hover:border-orange-500/30 
                                transition-all overflow-hidden">
            <video
                src={vidSource}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="text-center absolute bottom-0 right-0 left-0 z-10 p-6 bg-linear-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase"
                >
                    {platform}
                </span>
            </div>
        </a>
    );
}

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section ref={targetRef} className="relative h-screen overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y, scale }}
                className="flex justify-center items-center"
            >
                <div className="flex flex-1 w-290 gap-10 h-[70vh]">
                    <ProjectCard name="JPG Attendance" vidSource={isoUlt} platform="mobile" />
                    <ProjectCard name="NDDU Attendance" vidSource={neonUlt} platform="web" />
                    <ProjectCard name="Blaan App" vidSource={sovaUlt} platform="mobile" />
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
