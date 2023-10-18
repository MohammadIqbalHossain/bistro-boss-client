

import { useState } from "react";

import logo from '../../../assets/logo.png';
import cartIcon from '../../../assets/icon/cart-icon.png';
import avatar from '../../../assets/icon/avatar.svg';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navOptions = <>
        <Link to="/" className="block text-white py-2 uppercase" >
            Home
        </Link>
        <a href="#" className="block text-white py-2 uppercase">
            Contact us
        </a>
        <a href="#" className="block text-white py-2 uppercase">
            Dashboard
        </a>
        <Link to="/menu" className="block text-white py-2 uppercase">
            Our Menu
        </Link>
        <a href="#" className="block text-white py-2 uppercase">
            Our Shop
        </a>
        <a href="#" className="flex items-center">
            <img width="40px" src={cartIcon} alt="" />
        </a>
        <a href="#" className="flex  items-center text-white py-2 uppercase">
            <p>Sign out</p>
            <img width="40px" src={avatar} alt="" />
        </a>
    </>
    return (
        <nav className="max-w-screen-xl w-full px-10 fixed bg-opacity-40 z-10 bg-black text-white">
            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-center">
                        <img width="40px" className="mx-auto" src={logo} alt="" />
                        <h3>Bistro Boss</h3>
                    </div>
                    <div
                        className={`hidden md:flex items-center space-x-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        {navOptions}
                    </div>
                    <div className="md:hidden">
                        {/* Mobile Menu Button */}
                        <button className="text-white" onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden mt-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {navOptions}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

