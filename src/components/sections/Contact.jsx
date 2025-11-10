import RevealOnScroll from "../RevealOnScroll"
import emailIcon from "../../assets/icons/email-new.svg"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

const Contact = () => {
    return (
        <div className="min-h-[40vh] w-[60%] flex flex-col py-30 mx-auto">
            <RevealOnScroll><h1 className="text-7xl text-black mb-6">Let's build something together.</h1></RevealOnScroll>
            <div className="flex tracking-widest text-white">
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
                    <img src={githubIcon} alt="email-icon" className="inline-block h-[2em] w-[2em] fill-white" />
                    GitHub
                </a>
            </div>
        </div>
    )
}
export default Contact