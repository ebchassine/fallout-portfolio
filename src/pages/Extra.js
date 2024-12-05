import React from 'react';
import TextHover from '../components/TextHover';

const extraImages = [
  { src: '/images/terminal.jpg', alt: 'Retro terminal' },
  { src: '/images/circuit.jpg', alt: 'Circuit board' },
  { src: '/images/holotape.jpg', alt: 'Holotape collection' },
];

export function Extra({ setActiveSectionAndImage }) {
  return (
    <div className="space-y-4">
      <TextHover>

      
      <h3 className="text-xl mb-2">> Additional Information</h3>
      <p>> SKILLS: React, Node.js, TypeScript, GraphQL</p>
      <p>> INTERESTS: Post-apocalyptic user interfaces, Retro-futuristic design</p>
      <p>> ACHIEVEMENTS: Survived 3 framework migrations, Collected all rare NPM packages</p>
      <p className="mt-4">
        > "In the wasteland of code, only the adaptable survive. And those with a good package manager."
      </p>
      <div className="mt-6">
        <h3 className="text-xl mb-2">> Tech Artifacts</h3>
        <div className="grid grid-cols-3 gap-4">
          {extraImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-32 object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setActiveSectionAndImage('extra', image.src)}
            />
          ))}
        </div>
      </div>
      </TextHover>
    </div>
  );
}

