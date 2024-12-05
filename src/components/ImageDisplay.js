import React from 'react';

export function ImageDisplay({ imageSrc, alt, className }) {
  return (
    <div className={`fallout-panel image-display h-full ${className}`}>
      <div className="screw top-left" />
      <div className="screw top-right" />
      <div className="screw bottom-left" />
      <div className="screw bottom-right" />
      <div className="screen h-full relative overflow-hidden">
        {imageSrc ? (
          <>
            <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none scanline-overlay" />
            <div className="absolute inset-0 pointer-events-none green-tint-overlay" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--terminal-green)]">
            No image available
          </div>
        )}
      </div>
    </div>
  );
}

