import React from 'react';

export function ImageDisplay({ imageSrc, alt, className }) {
  return (
    <div className={`fallout-panel image-display h-full ${className}`}>
      <div className="screw top-left" />
      <div className="screw top-right" />
      <div className="screw bottom-left" />
      <div className="screw bottom-right" />
      <div className="screen h-full">
        {imageSrc ? (
          <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--terminal-green)]">
            No image available
          </div>
        )}
      </div>
    </div>
  );
}

