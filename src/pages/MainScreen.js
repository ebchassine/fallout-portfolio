import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import { Extra } from './Extra';
import TextHover  from '../components/TextHover';

export function MainScreen({ activeSection, setActiveSectionAndImage }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About setActiveSectionAndImage={setActiveSectionAndImage} />;
      case 'projects':
        return <Projects setActiveSectionAndImage={setActiveSectionAndImage} />;
      case 'extra':
        return <Extra setActiveSectionAndImage={setActiveSectionAndImage} />;
      default:
        return <About setActiveSectionAndImage={setActiveSectionAndImage} />;
    }
  };

  return (
    <div className="fallout-panel">
      <div className="screen">
        <div className="screen-content">
          <TextHover>
            {renderContent()}
          </TextHover>
        </div>
      </div>
    </div>
  );
}

