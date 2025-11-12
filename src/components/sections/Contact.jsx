import RevealOnScroll from "../RevealOnScroll"
import emailIcon from "../../assets/icons/email-new.svg"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS = [
    "#b93400", // dark burnt orange
    "#f54900", // vivid orange (main)
    "#ff6b1a", // warm vibrant orange
    "#ff512f", // coral-orange
    "#ffd200"  // golden
];

const Contact = () => {
    const color1 = useMotionValue(COLORS[0]);
    const color2 = useMotionValue(COLORS[1]);
    const backgroundImage = useMotionTemplate`linear-gradient(135deg, ${color1}, ${color2})`;

    useEffect(() => {
        const animation1 = animate(color1, COLORS, {
            ease: "easeInOut",
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        });

        const animation2 = animate(color2, COLORS.reverse(), {
            ease: "easeInOut",
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        });

        return () => {
            animation1.stop();
            animation2.stop();
        };
    }, []);

    return (
        <motion.section style={{ backgroundImage }} className="min-h-[40vh] p-[20%] flex flex-col py-30 mx-auto">
            <RevealOnScroll><h1 className="text-7xl text-black mb-6">Let's build something together.</h1></RevealOnScroll>
            <div className="flex tracking-widest text-black font-semibold">
                <a
                    href="mailto:joshuarazzi.garingo@gmail.com"
                    className="mr-8 flex items-center gap-2 text-lg -tracking-normal"
                >
                    <img src={emailIcon} alt="email-icon" className="inline-block h-[2em] w-[2em]" />
                    joshuarazzi.garingo@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/jrgaringo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mr-8 text-lg -tracking-normal"
                >
                    <img src={linkedinIcon} alt="linkedin-icon" className="inline-block h-[2em] w-[2em]" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/jrazzg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg -tracking-normal"
                >
                    <img src={githubIcon} alt="email-icon" className="inline-block h-[2em] w-[2em]" />
                    GitHub
                </a>
            </div>
        </motion.section>
    )
}
export default Contact