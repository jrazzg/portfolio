import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex
                        md:grid content-end">
            <div className='flex flex-1 flex-col justify-center px-6 sm:px-10 content-end'>
                <div className='flex flex-1 flex-col md:flex-row justify-between md:items-end'>
                    <span className='md:hidden'></span>
                    <RevealOnScroll>
                        <h1 className="text-6xl sm:text-[14vw] lg:text-[17vw]
                                        tracking-tighter leading-[0.8] text-[#ff5900]">Software<br />Developer</h1>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="flex flex-col gap-1 text-left text-sm mb-4
                                        sm:text-base md:text-right md:mb-0">
                            <p className='text-white/40 ibm-mono uppercase'>// contact</p>
                            <a href="" className='hover:text-[#ff5900] duration-500'>joshuarazzi.garingo@gmail.com</a>
                            <a href="" className='hover:text-[#ff5900] duration-500'>LinkedIn</a>
                            <a href="" className='hover:text-[#ff5900] duration-500'>GitHub</a>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Home;
