import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Logo & Slogan */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2">
                        <i className="fab fa-flutter text-3xl text-blue-400 mr-2"></i>
                        <span className="text-xl font-bold">FlutterDev</span>
                    </div>
                    <p className="text-gray-400">Building beautiful mobile experiences</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-end justify-end">
                        <h4 className="text-lg font-semibold mb-4 ">Quick Links</h4>
                        <ul className="flex flex-row space-x-6">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                                <li key={section}>
                                    <a href={`#${section}`} className="text-gray-400 hover:text-white transition">
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 LuongMinhHuy Portfolio. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;