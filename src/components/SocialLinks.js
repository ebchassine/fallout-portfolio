import React from 'react';
import { RetroButton } from './RetroButton';
import { MetalPanel } from './MetalPanel';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <MetalPanel>
      <div className="flex flex-col gap-4">
        <RetroButton href="https://github.com/yourusername">
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </RetroButton>
        <RetroButton href="https://linkedin.com/in/yourusername">
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </RetroButton>
        <RetroButton href="mailto:your@email.com">
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </RetroButton>
      </div>
    </MetalPanel>
  );
}

