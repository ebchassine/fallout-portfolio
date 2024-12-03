import React from 'react';
import { Screen } from './Screen';
import { About } from './About';
import { Projects } from './Projects';
import { Extra } from './Extra';

export function MainScreen({ activeSection }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'extra':
        return <Extra />;
      default:
        return <About />;
    }
  };

  return (
    <Screen title={activeSection.toUpperCase()}>
      <div className="content-area">
        {renderContent()}
      </div>
    </Screen>
  );
}

