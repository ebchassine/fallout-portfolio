import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Socials() {
  return (
    <div className="fallout-panel p-4">
      <div className="flex justify-around">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Linkedin size={24} />
        </a>
        <a href="mailto:your.email@example.com" className="social-icon">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}

