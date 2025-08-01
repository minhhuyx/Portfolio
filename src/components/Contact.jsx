import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra dữ liệu form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Vui lòng điền đầy đủ các trường.');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Email sent!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert(`Send failed: ${data.details || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Error:', err);
            alert(`Something went wrong: ${err.message}`);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's talk about your project</h3>
                        <p className="text-gray-600 mb-8">
                            Have a project in mind or want to discuss potential opportunities?
                            Feel free to reach out to me. I'm always open to new challenges and collaborations.
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: 'fas fa-envelope', title: 'Email', value: 'huyminhluong2512@gmail.com' },
                                { icon: 'fas fa-phone-alt', title: 'Phone', value: '0397920900' },
                                { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'TP.HCM' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <i className={`${item.icon} text-blue-500`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex space-x-4">
                            {[
                                {
                                    icon: 'fab fa-github',
                                    bg: 'bg-blue-500 hover:bg-blue-600',
                                    url: 'https://github.com/minhhuyx',
                                },
                                {
                                    icon: 'fab fa-linkedin-in',
                                    bg: 'bg-blue-400 hover:bg-blue-500',
                                    url: 'https://linkedin.com/in/your-profile',
                                },
                                {
                                    icon: 'fab fa-twitter',
                                    bg: 'bg-blue-300 hover:bg-blue-400',
                                    url: 'https://twitter.com/your-handle',
                                },
                                {
                                    icon: 'fab fa-youtube',
                                    bg: 'bg-red-500 hover:bg-red-600',
                                    url: 'https://youtube.com/@yourchannel',
                                },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${item.bg} text-white p-3 rounded-full transition`}
                                >
                                    <i className={item.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            {['name', 'email', 'subject'].map((field, index) => (
                                <div key={index} className="mb-6">
                                    <label htmlFor={field} className="block text-gray-700 font-medium mb-2">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        id={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            ))}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;