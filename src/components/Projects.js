import React from 'react';

export function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Project description filler text",
      tech: "Tech Stack Examples: React, node.js, etc..."
    },
    {
        title: "Project 2",
        description: "Project description filler text",
        tech: "Tech Stack Examples: React, node.js, etc..."
    },
    {
        title: "Project 3",
        description: "Project description filler text",
        tech: "Tech Stack Examples: React, node.js, etc..."
    },
    {
        title: "Project 4",
        description: "Project description filler text",
        tech: "Tech Stack Examples: React, node.js, etc..."
    },
    {
        title: "Project 5",
        description: "Project description filler text",
        tech: "Tech Stack Examples: React, node.js, etc..."
    },
    {
        title: "Project 6",
        description: "Project description filler text",
        tech: "Tech Stack Examples: React, node.js, etc..."
    },  
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="border border-[var(--terminal-green)] p-4">
          <h3 className="text-xl mb-2"> {project.title}</h3>
          <p className="opacity-80">{project.description}</p>
          <p className="mt-2 text-sm opacity-60">[{project.tech}]</p>
        </div>
      ))}
    </div>
  );
}

