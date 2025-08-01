import React from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Contact = () => {
  const formRef = React.useRef();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert('Vui lòng điền đầy đủ các trường.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Email không hợp lệ.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Email sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error(error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  const contactInfo = [
    { icon: <FaEnvelope className="text-blue-500" />, title: 'Email', value: 'huyminhluong2512@gmail.com' },
    { icon: <FaPhoneAlt className="text-blue-500" />, title: 'Phone', value: '0397920900' },
    { icon: <FaMapMarkerAlt className="text-blue-500" />, title: 'Location', value: 'TP.HCM' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, bg: 'bg-blue-500 hover:bg-blue-600', url: 'https://github.com/minhhuyx' },
    { icon: <FaLinkedinIn />, bg: 'bg-blue-400 hover:bg-blue-500', url: 'https://linkedin.com/in/your-profile' },
    { icon: <FaTwitter />, bg: 'bg-blue-300 hover:bg-blue-400', url: 'https://twitter.com/your-handle' },
    { icon: <FaYoutube />, bg: 'bg-red-500 hover:bg-red-600', url: 'https://youtube.com/@yourchannel' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's talk about your project</h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out to me. I'm always open to new challenges and collaborations.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.bg} text-white p-3 rounded-full transition text-xl`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
