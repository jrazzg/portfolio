import { useEffect } from "react";
import Logo from "../assets/logo.svg?react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed w-full py-5 px-8 z-40 backdrop-blur-sm">
            <div className="flex justify-between items-center">
                <a href="#home">
                    <Logo className="w-10 h-10 fill-white hover:w-12 duration-500" />
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <a  href="#contact" 
                        className="text-white  hover:bg-orange-600 hover:text-black duration-500 transition-all px-5 py-2 backdrop-blur-lg">VIEW RESUME</a>
                    <a  href="mailto:joshuarazzi.garingo@gmail.com" 
                        className="text-black hover:bg-orange-600 duration-500 transition-all px-5 py-2 bg-white backdrop-blur-lg">LET'S TALK</a>
                </div>
            </div>
        </nav >
    );
};
export default Navbar;