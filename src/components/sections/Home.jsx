import RevealOnScroll from '../RevealOnScroll';
import GithubIcon from "../../assets/icons/github.svg?react"
import LinkedinIcon from "../../assets/icons/linkedin.svg?react"
import EmailIcon from "../../assets/icons/email-new.svg?react"

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex
                        md:grid content-end">
            <div className='flex flex-1 flex-col justify-center px-6 sm:px-10 content-end'>
                <div className='flex flex-1 flex-col md:flex-row justify-between md:items-end'>
                    <span className='md:hidden'></span>
                    <RevealOnScroll>
                        <h1 className="text-6xl sm:text-[14vw] lg:text-[17vw]
                                        tracking-tighter leading-[0.8] text-[#ff5900]">Software<br />Developer</h1>
                    </RevealOnScroll>
                    <div className="flex flex-col gap-2 text-left text-sm mb-4
                                        sm:text-base md:text-right ">
                        <p className='text-white/40 ibm-mono uppercase'>// Let's connect</p>
                        <div className="flex gap-4 md:justify-end">
                            <a href="" className=''><EmailIcon className="inline-block h-[2em] w-[2em] fill-white hover:fill-[#ff5900] duration-500" /></a>
                            <a href="" className=''><LinkedinIcon className="inline-block h-[2em] w-[2em] fill-white hover:fill-[#ff5900] duration-500" /></a>
                            <a href="" className=''><GithubIcon className="inline-block h-[2em] w-[2em] fill-white hover:fill-[#ff5900] duration-500" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
