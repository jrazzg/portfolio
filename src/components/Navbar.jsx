import { useEffect } from "react";
import Logo from "../assets/logo.svg?react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <div className="flex justify-center">
            <nav className="fixed top-5 w-[60%] px-4 rounded-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
                <div className="mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="#home">
                            <Logo className="w-10 h-10 fill-orange-600"/>
                        </a>

                        <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                            &#9776;
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">VIEW RESUME</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">LET'S TALK</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;