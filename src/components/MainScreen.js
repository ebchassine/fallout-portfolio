import React, { useState, useEffect } from 'react';
import { About } from './About';
import { Projects } from './Projects';
import { Extra } from './Extra';

export function MainScreen({ activeSection, setActiveSectionAndImage }) {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setContent(renderContent());
      setIsLoading(false);
    }, 150); // DELAY ADJUST 
  }, [activeSection]);

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
        <div className={`screen-content `}>
          {content}
        </div>
      </div>
    </div>
  );
}

