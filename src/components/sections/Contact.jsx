import RevealOnScroll from "../RevealOnScroll"
import emailIcon from "../../assets/icons/email-new.svg"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import Logo from "../../assets/logo.svg?react";

const Contact = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <section className="relative px-6 sm:px-[10vw] md:px-[20vw] flex flex-col gap-6 py-[5vh] lg:py-[15vh] mx-auto z-10 bg-[#ff5900]">
                    <RevealOnScroll><h1 className="text-2xl md:text-[4vw] tracking-tight text-black leading-[0.9] md:font-medium font-bold z-20">Let's build something together.</h1></RevealOnScroll>
                    <div className="flex flex-col md:flex-row text-black text-sm gap-2 tracking-tight sm:text-base font-semibold z-20">
                        <a
                            href="mailto:joshuarazzi.garingo@gmail.com"
                            className="flex items-center gap-2 duration-500 hover:bg-white pr-2"
                        >
                            <img src={emailIcon} alt="email-icon" className="inline-block h-[2em] w-[2em]" />
                            joshuarazzi.garingo@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jrgaringo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 duration-500 hover:bg-white pr-2"
                        >
                            <img src={linkedinIcon} alt="linkedin-icon" className="inline-block h-[2em] w-[2em]" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/jrazzg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 duration-500 hover:bg-white pr-2"
                        >
                            <img src={githubIcon} className="inline-block h-[2em] w-[2em]" />
                            GitHub
                        </a>
                    </div>
                    <Logo className="absolute top-0 right-0 h-[150%] fill-white/5 stroke-[2px] stroke-white/20 -z-10" />
                </section>
            </div>
        </>
    )
}
export default Contact;