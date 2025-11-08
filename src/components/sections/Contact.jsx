import RevealOnScroll from "../RevealOnScroll"

const Contact = () => {
    return (

        <div className="relative h-[400px] bg-orange-600" style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div className='relative h-[calc(100vh+400px)] -top-[100vh]'>
                <div className='sticky top-[calc(100vh-400px)] h-[400px] flex justify-center items-center'>
                    <div className="w-[60%] flex flex-col mx-auto">
                        <RevealOnScroll><h1 className="text-7xl text-black mb-6">Let's build something together.</h1></RevealOnScroll>
                        <div className="flex tracking-widest">
                            <a href="#" className="mr-10">joshuarazzigaringo@gmail.com</a>
                            <a href="#" className="mr-10">/LINKEDIN</a>
                            <a href="#" className="mr-10">/GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact