import RevealOnScroll from "../RevealOnScroll"

const Contact = () => {
    return (
        <div className="flex flex-col bg-orange-600 w-full px-100 py-30">
            <RevealOnScroll><h1 className="text-7xl text-black mb-6">Let's build something together.</h1></RevealOnScroll>
            <div className="flex tracking-widest text-white">
                <a href="#" className="mr-10">sigma@gmail.com</a>
                <a href="#" className="mr-10">/LINKEDIN</a>
                <a href="#" className="mr-10">/GITHUB</a>
            </div>
        </div>
    )
}
export default Contact