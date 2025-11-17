import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return (
        <div 
            className="h-screen px-[20%] flex flex-col mx-auto justify-center"
            style={{ background: "radial-gradient(120% 60% at 50% 110%, rgba(255,255,255,0.1) 5%, rgba(0,0,0,1) 100%)" }}
        >
            {/* <h2 className="uppercase tracking-widest mb-6">Beyond the projects &mdash;</h2> */}
            <RevealOnScroll><h1 className="text-4xl pb-3 tracking-tight bg-linear-to-r from-orange-500 to-orange-600/60 bg-clip-text text-transparent"
            >Beyond the projects &mdash;</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-none bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Developer by choice.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-none bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Creator by nature.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-none bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Always learning. Always building.</h1></RevealOnScroll>
        </div>
    )
}
export default About