import RevealOnScroll from '../RevealOnScroll';

const About = () => {

    const frontendSkills = ['React', 'TailewindCSS'];
    const backendSkills = ['Python', 'C++', 'Firebase'];

    return (
        <div className="min-h-[65vh] w-[60%] flex flex-col mx-auto">
            <h2 className="uppercase tracking-widest mb-6">Beyond the projects &mdash;</h2>
            <RevealOnScroll><h1 className="text-7xl text-orange-600">Developer by choice.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl text-orange-600">Creator by nature.</h1></RevealOnScroll>
            <RevealOnScroll><h1 className="text-7xl text-orange-600">Always learning. Always building.</h1></RevealOnScroll>
        </div>
    )
}
export default About