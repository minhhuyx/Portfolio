const Hero = () => (
    <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Hi, I'm <span className="gradient-text">Lương Minh Huy</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                    Flutter Developer
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                    As a mobile application development intern, I focus on creating projects with intuitive, dynamic, and user-friendly interfaces, ensuring that all features are simple and accessible. I continuously update both the design and functionality to improve product quality and enhance the user experience.
                    My goal is to acquire new skills, strengthen my abilities, and stay current with emerging technology trends in order to contribute effectively to future mobile application development projects.
                </p>
                <div className="flex space-x-4">
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-md">
                        Hire Me
                    </a>
                    <a href="#projects" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition">
                        View Work
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111501.png"
                    alt="Flutter Developer"
                    className="w-64 h-64 md:w-80 md:h-80 floating"
                />
            </div>
        </div>
    </section>
);

export default Hero;