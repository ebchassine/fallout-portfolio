import React from 'react';
import { About } from './About';
import { Projects } from './Projects';
import { Extra } from './Extra';

export function MainScreen({ activeSection, setActiveSectionAndImage }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects setActiveSectionAndImage={setActiveSectionAndImage} />;
      case 'extra':
        return <Extra />;
      default:
        return <About />;
    }
  };

  return (
    <div className="fallout-panel">
      <div className="screen">
        <div className="screen-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

