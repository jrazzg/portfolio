import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return (
        <div
            className="h-screen px-[20%] flex flex-col mx-auto justify-center"
        >
            <RevealOnScroll><p className="md:text-4xl md:pb-3 text-[#ff5900]"
            >Beyond the projects &mdash;</p></RevealOnScroll>
            <RevealOnScroll><p className="text-2xl md:text-7xl tracking-tight">
                A developer fueled by curiosity,<br />a creator shaped by passion.<br />Always learning. Always building.</p>
            </RevealOnScroll>
        </div>
    )
}
export default About