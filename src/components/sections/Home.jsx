import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            style={{ background: "radial-gradient(120% 60% at 50% 000%, rgba(255,255,255,0.1) 5%, rgba(0,0,0,1) 100%)" }}
            className="h-screen flex flex-col justify-center items-center mx-auto">
            <div className='flex flex-col px-[20%]'>

                <RevealOnScroll>
                    <h1 className="mb-3 text-7xl tracking-tight leading-[.9]">
                        Ideas aren't enough.<br />I make them work.
                    </h1>
                </RevealOnScroll>
                <RevealOnScroll>
                    <p className="text-4xl pb-3 tracking-tight bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                        I'm Richard, a Software Developer.
                    </p>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Home;
