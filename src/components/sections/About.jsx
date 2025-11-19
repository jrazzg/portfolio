import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return (
        <div
            className="h-[50vh] md:h-screen px-6 sm:px-10 md:px-[20vw] flex flex-col mx-auto justify-center"
        >
            <RevealOnScroll><p className="md:text-xl lg:text-4xl text-[#ff5900]"
            >Beyond the projects &mdash;</p></RevealOnScroll>
            <RevealOnScroll><p className="text-2xl md:text-4xl lg:text-7xl tracking-tight">
                A developer fueled by curiosity,<br />a creator shaped by passion.<br />Always learning. Always building.</p>
            </RevealOnScroll>
        </div>
    )
}
export default About