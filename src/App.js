import React, { useState } from 'react';
import { MetalPanel } from './components/MetalPanel';
import { MainScreen } from './components/MainScreen';
import { FalloutButton } from './components/FalloutButton';
import { ImageDisplay } from './components/ImageDisplay';
import { Socials } from './components/Socials';
import { DecorativePanel } from './components/FalloutButton';
import './styles/fallout-ui.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentImage, setCurrentImage] = useState(null);

  const setActiveSectionAndImage = (section, image = null) => {
    setActiveSection(section);
    setCurrentImage(image);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-4 md:p-8" style={{
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px'
    }}>
      <div className="max-w-6xl mx-auto">
        <MetalPanel className="mb-8">
          <h1 className="text-4xl text-center text-[var(--terminal-green)] font-bold header-glow">
            Ethan Wong-Chassine's Portfolio
          </h1>
        </MetalPanel>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[70%]">
            <MainScreen 
              activeSection={activeSection} 
              setActiveSectionAndImage={setActiveSectionAndImage}
            />
          </div>
          <div className="w-full md:w-[30%] flex flex-col justify-start gap-4">
            <FalloutButton
              onClick={() => setActiveSectionAndImage('about')}
              isActive={activeSection === 'about'}
            >
              ABOUT
            </FalloutButton>
            <FalloutButton
              onClick={() => setActiveSectionAndImage('projects')}
              isActive={activeSection === 'projects'}
            >
              PROJECTS
            </FalloutButton>
            <FalloutButton
              onClick={() => setActiveSectionAndImage('extra')}
              isActive={activeSection === 'extra'}
            >
              EXTRA
            </FalloutButton>
            <ImageDisplay imageSrc={currentImage} alt="Project Image" />
            <Socials />
            {/* <div className={`decorative-panel ${pattern}`}></div> */}
            <DecorativePanel pattern="dots" />
            {/* <DecorativePanel pattern="vents" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

