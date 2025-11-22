import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import isoUlt from "../../assets/videos/iso_ult.mp4"
import neonUlt from "../../assets/videos/neon_ult.mp4"
import sovaUlt from "../../assets/videos/sova_ult.mp4"
import { Link } from "react-router-dom";

const ProjectCard = ({ name, vidSource, platform, projectPath }) => {
    return (
        // 340 × 656
        <Link to={projectPath} className="relative block items-end rounded-[20px] border-10 border-white/10
                                min-w-[238px] min-h-[455px]                        
                                md:w-[200px] h-[382px]
                                lg:w-[272px] lg:h-[520px]
                                xl:w-[340px] xl:h-[650px]
                                shadow-xl
                                duration-500
                                backdrop-blur-sm
                                hover:-translate-y-10 
                                hover:border-white/20 
                                hover:shadow-2xl
                                transition-all overflow-hidden">
            <video
                src={vidSource}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full inset-0 object-cover z-0"
            />
            <div className="text-center absolute bottom-0 right-0 left-0 z-10 p-6 bg-linear-to-t from-black/90 to-transparent">
                <h3 className="text-lg md:text-2xl font-semibold mb-3 leading-[0.9]">{name}</h3>
                <span className="bg-orange-500/10 text-orange-600 py-1 px-3 rounded-full text-sm
                                                hover:bg-orange-500/20 transition uppercase ibm-mono"
                >
                    {platform}
                </span>
            </div>
        </Link>
    );
}

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 200%", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["100%", "-10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={targetRef}
            className="relative overflow-visible flex items-center justify-center"
            style={{ backgroundImage: 'linear-gradient(to bottom, #ff5900, #0b0b0b 70%)', }}
        >
            <motion.div
                style={{ y, scale }}
                className="hidden md:flex justify-center items-center"
            >
                <div className="flex flex-1 gap-[2vw]">
                    <ProjectCard name="JPG Attendance" vidSource={isoUlt} platform="mobile" projectPath="/jpg-attendance" />
                    <ProjectCard name="NDDU Attendance" vidSource={neonUlt} platform="web" projectPath="/nddu-attendance" />
                    <ProjectCard name="Blaan App" vidSource={sovaUlt} platform="mobile" projectPath="/blaan-app" />
                </div>
            </motion.div>
            <div className="md:hidden flex flex-col sm:flex-row flex-wrap justify-center gap-[2vw]">
                <ProjectCard name="JPG Attendance" vidSource={isoUlt} platform="mobile" projectPath="jpg-attendance" />
                <ProjectCard name="NDDU Attendance" vidSource={neonUlt} platform="web" projectPath="/nddu-attendance" />
                <ProjectCard name="Blaan App" vidSource={sovaUlt} platform="mobile" projectPath="/blaan-app" />
            </div>
            <Link to="/project" className="absolute bottom-0">Project</Link>
        </section>
    );
};

export default Projects;
