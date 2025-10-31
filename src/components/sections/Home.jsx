import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent leading-right">Hi, I'm FNC shiro.</h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto font-light">
                        I'm a full-stack developer who loves crafting clean, scalable web
                        applications. My goal is to build solutions that offer both
                        exceptional performance and a delightful user experience.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-orange-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 105, 0, 0.4)]"
                        >View Projects</a>
                        <a href="#contact" className="border border-orange-500/50 text-orange-50 py-3 px-6 rounded font-medium transition-all duration-200 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 105, 0, 0.2)] hover:bg-orange-500/10"
                        >View Projects</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
export default Home