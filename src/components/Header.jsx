import React from "react";
import { FaBars } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = ['home', 'skills', 'about',  'projects', 'contact'];

    return (
        <header className="fixed w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <SiFlutter className="text-3xl text-blue-400 mr-2" />
                        <span className="text-xl font-bold text-gray-800">My Portfolio</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="text-gray-700 hover:text-blue-500 transition"
                                onClick={(e) => handleNavClick(e, section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <FaBars className="text-2xl" />
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    {navItems.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="block py-2 text-gray-700 hover:text-blue-500 transition"
                            onClick={(e) => handleNavClick(e, section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
