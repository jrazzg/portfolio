import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return (
        <div className="h-screen px-[20%] flex flex-col mx-auto justify-center bg-white">
            {/* <h2 className="uppercase tracking-widest mb-6">Beyond the projects &mdash;</h2> */}
            <RevealOnScroll><h1 className="text-4xl pb-3 tracking-tight bg-linear-to-r from-orange-500 to-orange-600/60 bg-clip-text text-transparent"
                    >Beyond the projects &mdash;</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-[.9] bg-linear-to-r from-black to-black/60 bg-clip-text text-transparent">Developer by choice.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-[.9] bg-linear-to-r from-black to-black/60 bg-clip-text text-transparent">Creator by nature.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl tracking-tight leading-[.9] bg-linear-to-r from-black to-black/60 bg-clip-text text-transparent">Always learning. Always building.</h1></RevealOnScroll>
        </div>
    )
}
export default About