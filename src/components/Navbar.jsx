import Logo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="fixed w-full py-5 px-6 sm:px-10 z-40 backdrop-blur-sm">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <Logo className="w-10 h-10 fill-white hover:w-12 duration-500" />
                    </Link>
                    <div className="flex items-center ibm-mono text-sm sm:text-base sm:space-x-3">
                        <a href="#contact"
                            className="text-white hover:bg-orange-600 hover:text-black duration-500 transition-all sm:px-5 px-3 py-2 backdrop-blur-lg">VIEW RESUME</a>
                        <a href="mailto:joshuarazzi.garingo@gmail.com"
                            className="text-black hover:bg-orange-600 duration-500 transition-all sm:px-5 px-3 py-2 bg-white backdrop-blur-lg">LET'S TALK</a>
                    </div>
                </div>
            </nav >
        </>
    );
};
export default Navbar;