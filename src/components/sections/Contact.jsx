import RevealOnScroll from "../RevealOnScroll"
import emailIcon from "../../assets/icons/email-new.svg"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import Logo from "../../assets/logo.svg?react";

const Contact = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <section className="relative min-h-[40vh] p-[20%] flex flex-col gap-6 py-30 mx-auto z-10 bg-[#ff5900]">
                    <RevealOnScroll><h1 className="text-7xl tracking-tight text-black font-medium z-20">Let's build something together.</h1></RevealOnScroll>
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
                </section>
            </div>
        </>
    )
}
export default Contact;