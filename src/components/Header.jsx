import React from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {/* <i className="fab fa-flutter text-3xl text-blue-500 mr-2"></i> */}
                        {/* <span className="text-xl font-bold text-gray-800">FlutterDev</span> */}
                    </div>
                    
                    <nav className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
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
                    
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                
                <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
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