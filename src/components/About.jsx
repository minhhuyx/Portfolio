import React from 'react';

const About = () => (
  <section id="about" className="bg-gray-100 py-12 px-6 scroll-mt-20">
    <div className="container mx-auto">
      {/* Work Experience */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">Intern Mobile Developer & AI Research</h3>
          <p className="text-gray-600">Bao Nam Digital Technology Co., Ltd.</p>
          <p className="text-sm text-gray-500">Jan 2025 – Mar 2025</p>
          <p className="text-gray-700 mt-2">
            Developed mobile applications with Flutter, focusing on performance optimization and UI/UX design. Conducted research on deep learning models.
          </p>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-16 text-center">Education</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">Information Technology</h3>
          <p className="text-gray-600">Thuy Loi University</p>
          <p className="text-sm text-gray-500">2021 – 2025</p>
          <p className="text-gray-700 mt-2">
           Majored in Information Technology, with interest in software development and AI.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;