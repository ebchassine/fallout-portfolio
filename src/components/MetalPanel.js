import React from 'react';

export function MetalPanel({ children, className = '' }) {
  return (
    <div className={`metal-panel p-4 ${className}`}>
      {children}
    </div>
  );
}

