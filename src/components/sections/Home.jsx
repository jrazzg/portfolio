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
                        <h1 className="text-[18em] tracking-tighter leading-[0.8] text-[#ff5900]">Software<br/>Developer</h1>
                    </RevealOnScroll>
                    <RevealOnScroll><p className="absolute bottom-3 right-0 tracking-normal text-right">myemail@rzi.com<br/>linkedIn<br/>github</p></RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Home;
