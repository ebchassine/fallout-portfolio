import React from 'react';
import TextHover from './textHover';

export function About() {
  return (
    <div className="space-y-4">
      <TextHover>
        <p1>hello</p1>
      </TextHover>
      <p>> NAME: John Doe</p>
      <p>> OCCUPATION: Full Stack Developer</p>
      <p>> STATUS: Seeking new opportunities</p>
      <p>> LOCATION: Vault 42, Digital Wasteland</p>
      <p className="mt-4">
        > A passionate developer with experience in React, Node.js, and surviving the digital apocalypse.
        Currently exploring the wasteland of web development and collecting rare NPM packages.
      </p>
    </div>
  );
}

