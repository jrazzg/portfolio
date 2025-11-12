import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex items-center mx-auto"
        >
            <div className='px-[20%] space-y-3 text-center'>
                <RevealOnScroll><h1 className="uppercase tracking-widest mb-6 text-white">Hey, I'm Razzi.</h1></RevealOnScroll>
                <RevealOnScroll><h2 className="text-7xl tracking-tight bg-linear-to-b from-orange-700 to-orange-600 bg-clip-text text-transparent">I turn ideas into software, and errors into lessons.</h2></RevealOnScroll>
            </div>
        </section>
    )
}
export default Home;