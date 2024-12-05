import React from 'react';
import TextHover from './textHover';

export function Extra() {
  return (
    <div className="space-y-4">
      <TextHover>
        <h3 className="text-xl mb-2">> Additional Information</h3>
        <p>> SKILLS: React, Node.js, TypeScript, GraphQL</p>
        <p>> INTERESTS:</p>
        <p>> ACHIEVEMENTS: </p>
        <p className="mt-4">
          > 
        </p>
      </TextHover>
    </div>
    
  );
}

