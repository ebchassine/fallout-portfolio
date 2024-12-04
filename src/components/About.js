import React from 'react';
import TextHover from './textHover';

export function About() {
  return (
    <div className="space-y-4">
      <TextHover>
        <p>This is a test paragraph. Hover over each word!</p>
        <h1>Hover over the heading words too!</h1>
        <p>Another paragraph to try out.</p>
      
        <p>> NAME:</p>
        <p>> OCCUPATION:</p>
        <p>> STATUS: </p>
        <p>> LOCATION: </p>
      </TextHover>
    </div>
  );
}

