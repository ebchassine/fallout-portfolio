import React from 'react';
import TextHover from '../components/TextHover';

const aboutImages = [
  { src: '/images/project1.jpg', alt: 'Vault entrance' },
  { src: '/images/screen-overlay.png', alt: 'Pip-Boy 3000' },
  { src: '/images/metal-texture.jpg', alt: 'Wasteland panorama' },
];

export function About({ setActiveSectionAndImage }) {
  return (
    <div className="space-y-4">
      <TextHover>

      
        <p>> NAME: John Doe</p>
        <p>> OCCUPATION: Full Stack Developer</p>
        <p>> STATUS: Seeking new opportunities</p>
        <p>> LOCATION: Vault 42, Digital Wasteland</p>
        <p className="mt-4">
          > A passionate developer with experience in React, Node.js, and surviving the digital apocalypse.
          Currently exploring the wasteland of web development and collecting rare NPM packages.
        </p>
      </TextHover>
      <div className="mt-6">
        <h3 className="text-xl mb-2">> Gallery</h3>
        <div className="grid grid-cols-3 gap-4">
          {aboutImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-32 object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setActiveSectionAndImage('about', image.src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

