import React from 'react';

export function Screen({ children, title }) {
  return (
    <div className="screen scanline">
      {title && (
        <div className="text-xl mb-4 uppercase">{title}</div>
      )}
      <div className="screen-content">
        {children}
      </div>
    </div>
  );
}

