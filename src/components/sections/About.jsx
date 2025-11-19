import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return (
        <div
            className="h-[50vh] md:h-screen px-6 sm:px-[10vw] md:px-[20vw] flex flex-col mx-auto justify-center"
        >
            <RevealOnScroll><p className="md:text-[2vw] text-[#ff5900]"
            >Beyond the projects &mdash;</p></RevealOnScroll>
            <RevealOnScroll><p className="text-2xl md:text-[4vw] tracking-tight leading-none">
                A developer fueled by curiosity,<br />a creator shaped by passion.<br />Always learning. Always building.</p>
            </RevealOnScroll>
        </div>
    )
}
export default About