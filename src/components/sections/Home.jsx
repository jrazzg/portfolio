import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="h-screen pb-10 flex flex-col justify-center items-center mx-auto bg-black"
            >
                <div className='flex flex-col px-[20%]'>
                    {/* <RevealOnScroll><h1 className="mr-1 uppercase tracking-widest text-white">Hey. I'm <span className='text-orange-500 font-bold'>Razzi</span></h1></RevealOnScroll> */}
                    <RevealOnScroll><h1 className="text-4xl pb-3 tracking-tight bg-linear-to-r font-bold from-orange-500 to-orange-600/60 bg-clip-text text-transparent">Hey, I'm Razzi.</h1></RevealOnScroll>
                    <RevealOnScroll><h1 className="text-7xl tracking-tight leading-[.9] bg-linear-to-r font-bold from-gray-200 to-white/60 bg-clip-text text-transparent">I turn ideas into software, and errors into lessons.</h1></RevealOnScroll>
                </div>
            </section>
        </>
    )
}
export default Home;