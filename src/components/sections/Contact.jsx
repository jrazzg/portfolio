import RevealOnScroll from "../RevealOnScroll"
import emailIcon from "../../assets/icons/email-new.svg"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import Logo from "../../assets/logo.svg?react";
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
        <>
            <div className="relative overflow-hidden">
                <motion.section style={{ backgroundImage }} className="relative min-h-[40vh] p-[20%] flex flex-col py-30 mx-auto z-10">
                    <RevealOnScroll><h1 className="text-7xl tracking-tight leading-[.9] pb-3 bg-linear-to-r font-bold from-black to-black/80 bg-clip-text text-transparent mb-6 z-20">Let's build something together.</h1></RevealOnScroll>
                    <div className="flex tracking-widest text-black font-semibold z-20">
                        <a
                            href="mailto:joshuarazzi.garingo@gmail.com"
                            className="mr-5 flex items-center gap-2 text-lg -tracking-normal duration-500 hover:bg-white pr-2"
                        >
                            <img src={emailIcon} alt="email-icon" className="inline-block h-[2em] w-[2em]" />
                            joshuarazzi.garingo@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jrgaringo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-5 flex items-center gap-2 text-lg -tracking-normal duration-500 hover:bg-white pr-2"
                        >
                            <img src={linkedinIcon} alt="linkedin-icon" className="inline-block h-[2em] w-[2em]" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/jrazzg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg -tracking-normal duration-500 hover:bg-white pr-2"
                        >
                            <img src={githubIcon} className="inline-block h-[2em] w-[2em]" />
                            GitHub
                        </a>
                    </div>
                    <Logo className="absolute top-0 right-0 h-[150%] fill-white/5 stroke-[2px] stroke-white/20 -z-10" />
                </motion.section>
            </div>
        </>
    )
}
export default Contact;