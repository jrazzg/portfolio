import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen px-[20%] pb-10 flex items-center mx-auto"
        >
            <div className='flex flex-col px-5'>
                <RevealOnScroll><h1 className="uppercase tracking-widest text-white">Hey. I'm Razzi.</h1></RevealOnScroll>
                <RevealOnScroll><h1 className="text-7xl tracking-tight bg-linear-to-r text-orange-700">I turn ideas into software, and errors into lessons.</h1></RevealOnScroll>
            </div>
        </section>
    )
}
export default Home;