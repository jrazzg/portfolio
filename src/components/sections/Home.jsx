import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h2 className="text-orange-600 text-lg uppercase tracking-widest">Nigga Boy</h2>
                    <h1 className="text-8xl">Joshua Razzi Garingo</h1>
                    {/* <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-orange-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 105, 0, 0.4)]"
                        >View Projects</a>
                        <a href="#contact" className="border border-orange-500/50 text-orange-50 py-3 px-6 rounded font-medium transition-all duration-200 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 105, 0, 0.2)] hover:bg-orange-500/10"
                        >View Projects</a>
                    </div> */}
                </div>
            </RevealOnScroll>
        </section>
    )
}
export default Home