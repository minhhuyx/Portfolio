import React from 'react';

const skills = ['Python','Flutter', 'Dart', 'MongoDB','Firebase','MySQL', 'Git', 'Docker'];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
                    My <span className="gradient-text">Skills</span>
                </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
}
