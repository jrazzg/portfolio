import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col">
            <div className="flex flex-1 justify-center items-center">
                <RevealOnScroll>
                    <h1 className="text-7xl text-orange-600 text-center">Hey, I'm Richard,<br />a software developer.</h1>
                </RevealOnScroll>
            </div>
            <div className="flex items-center mb-8">
                <div className="grow border-t border-orange-600"></div>
                    <h2 className="mx-8 uppercase tracking-widest">fueled by curiosity, driven by code.</h2>
                <div className="grow border-t border-orange-600"></div>
            </div>

        </section>
    )
}
export default Home;