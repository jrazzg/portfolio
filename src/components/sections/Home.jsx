import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-between">
            <span></span>
            <div className='flex flex-col px-10'>
                <div className='flex justify-between relative'>
                    <RevealOnScroll>
                        <h1 className="text-[18em] tracking-tighter leading-[0.8] text-[#ff5900]">Software<br />Developer</h1>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="absolute flex flex-col gap-2 bottom-4 right-0 text-right">
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
