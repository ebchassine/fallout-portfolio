import React from 'react';

const projects = [
  {
    title: "Vault-Tec UI Library",
    description: "A React component library inspired by Fallout's interface design",
    tech: "React, JavaScript, Storybook",
    image: "/images/vault-tec-ui.jpg"
  },
  {
    title: "Pip-Boy 3000",
    description: "Mobile-first task management application",
    tech: "Next.js, TailwindCSS, Firebase",
    image: "/images/pip-boy-3000.jpg"
  },
  {
    title: "Pip-Boy 3000",
    description: "Mobile-first task management application",
    tech: "Next.js, TailwindCSS, Firebase",
    image: "/images/pip-boy-3000.jpg"
  },
  {
    title: "Pip-Boy 3000",
    description: "Mobile-first task management application",
    tech: "Next.js, TailwindCSS, Firebase",
    image: "/images/pip-boy-3000.jpg"
  },
  {
    title: "Pip-Boy 3000",
    description: "Mobile-first task management application",
    tech: "Next.js, TailwindCSS, Firebase",
    image: "/images/pip-boy-3000.jpg"
  }
  // Add more projects as needed
];

export function Projects({ setActiveSectionAndImage }) {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="border border-[var(--terminal-green)] p-4 cursor-pointer hover:bg-[rgba(51,255,51,0.1)]"
          onClick={() => setActiveSectionAndImage('projects', project.image)}
        >
          <h3 className="text-xl mb-2">> {project.title}</h3>
          <p>{project.description}</p>
          <p className="mt-2 text-sm opacity-60">[{project.tech}]</p>
        </div>
      ))}
    </div>
  );
}

