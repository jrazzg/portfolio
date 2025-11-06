import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col">
            <div className="flex flex-1 justify-center items-center">
                <RevealOnScroll>
                    <h1 className="text-7xl text-orange-600 text-center">Hey, I'm Richard,<br />a software developer.</h1>
                </RevealOnScroll>
            </div>
            <div className='flex justify-center items-center'>
                    <h2 className="uppercase tracking-widest mb-8">fueled by curiosity, driven by code.</h2>
            </div>
        </section>
    )
}
export default Home;