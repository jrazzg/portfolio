import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            style={{ background: "radial-gradient(120% 60% at 50% 000%, rgba(255,255,255,0.1) 5%, rgba(0,0,0,1) 100%)" }}
            className="h-screen flex flex-col justify-between py-5">
            <span></span>
            <div className='flex flex-col px-[20%]'>
                <RevealOnScroll>
                    <h1 className="mb-3 text-7xl tracking-tight leading-[.9]">
                        Ideas aren't enough.<br />I make them work.
                    </h1>
                </RevealOnScroll>
                <RevealOnScroll>
                    <p className="text-4xl pb-3 tracking-tight bg-linear-to-r from-orange-500 to-orange-600/60 bg-clip-text text-transparent">
                        I'm Richard, a Software Developer.
                    </p>
                </RevealOnScroll>
            </div>
            <div className="px-8 uppercase tracking-[0.2em] text-sm font-light flex justify-between items-center">
                <div className="flex-1 text-left">the journey continues below</div>
                <div className="flex-1 text-center">Inspired by curiosity, driven by code</div>
                <div className="flex-1 text-right">
                    <a href="#horizontal" className="w-8 h-8 inline-block bg-white text-black text-center">@</a>
                </div>
            </div>


        </section>
    );
};

export default Home;
