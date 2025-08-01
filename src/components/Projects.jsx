import React from 'react';
import { FaMusic, FaEdit, FaHeadphones, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    const projectsData = [
        {
            icon: <FaMusic className="text-white text-6xl" />,
            title: 'Music App',
            description: 'A simple music application featuring playback controls, playlist management, and a personal music library.',
            gradient: 'from-blue-400 to-indigo-500',
            tags: [
                { text: 'Flutter', bg: 'bg-blue-100', textColor: 'text-blue-800' },
                { text: 'Dart', bg: 'bg-red-100', textColor: 'text-red-800' },
            ],
            link: 'https://github.com/minhhuyx/UngDungNgheNhac.git',
        },
        {
            icon: <FaEdit className="text-white text-6xl" />,
            title: 'ToDo App',
            description: 'A simple and intuitive To-Do application for task management, with features like add, edit, delete, and mark as complete.',
            gradient: 'from-green-400 to-teal-500',
            tags: [
                { text: 'Flutter', bg: 'bg-blue-100', textColor: 'text-blue-800' },
                { text: 'MongoDB', bg: 'bg-yellow-100', textColor: 'text-yellow-800' },
                { text: 'Dart', bg: 'bg-green-100', textColor: 'text-green-800' },
            ],
            link: 'https://github.com/minhhuyx/ToDo_App.git',
        },
        {
            icon: <FaHeadphones className="text-white text-6xl" />,
            title: 'Music AI App',
            description: 'An AI-driven music generation application utilizing diffusion models to produce rhythmically structured and expressive compositions.',
            gradient: 'from-purple-400 to-pink-500',
            tags: [
                { text: 'Flutter', bg: 'bg-blue-100', textColor: 'text-blue-800' },
                { text: 'Firebase', bg: 'bg-orange-100', textColor: 'text-orange-800' },
                { text: 'Flask', bg: 'bg-red-100', textColor: 'text-red-800' },
                { text: 'Deep Learning', bg: 'bg-green-100', textColor: 'text-green-800' },
            ],
            link: 'https://github.com/minhhuyx/UngDungTao-Nhac.git',
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                    My <span className="gradient-text">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                                {project.icon}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`${tag.bg} ${tag.textColor} text-xs px-3 py-1 rounded-full`}>
                                            {tag.text}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-medium flex items-center"
                                >
                                    View Project <FaArrowRight className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
                        View All Projects <FaArrowRight className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
