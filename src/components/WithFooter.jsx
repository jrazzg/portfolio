import Contact from "./sections/Contact";

const WithFooter = ({ children }) => {
    return (
        <>
            <div className="min-h-screen transition-opacity duration-700 bg-[#0b0b0b] text-white relative z-10">
                {children}
            </div>
            <footer className='sticky bottom-0'>
                <Contact />
            </footer>
        </>
    );
};

export default WithFooter;