import React, { useState } from 'react';
import { MetalPanel } from './components/MetalPanel';
import { MainScreen } from './components/MainScreen';
import { CircularButton } from './components/CircularButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4 md:p-8" style={{
      // backgroundImage: `url('/images/metal-texture.jpg')`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px'
    }}>
      <div className="max-w-6xl mx-auto">
        <MetalPanel className="mb-8">
          <h1 className="text-4xl text-center text-[var(--terminal-green)] font-bold" style={{
            textShadow: '0 0 10px var(--terminal-green), 0 0 20px var(--terminal-green)'
          }}>[NAME]'s Portfolio</h1>
        </MetalPanel>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[70%]">
            <MainScreen activeSection={activeSection} />
          </div>
          <div className="w-full md:w-[30%] flex flex-row md:flex-col justify-center gap-4">
            <CircularButton
              onClick={() => setActiveSection('about')}
              isActive={activeSection === 'about'}
            >
              ABOUT
            </CircularButton>
            <CircularButton
              onClick={() => setActiveSection('projects')}
              isActive={activeSection === 'projects'}
            >
              PROJECTS
            </CircularButton>
            <CircularButton
              onClick={() => setActiveSection('extra')}
              isActive={activeSection === 'extra'}
            >
              EXTRA
            </CircularButton>
          </div>
        </div>
      </div>
    </div>
  );
}

