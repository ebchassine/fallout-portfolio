import React from 'react';

export function FalloutButton({ onClick, children, isActive, className = '' }) {
  return (
    <div className={`fallout-button-container ${className} ${isActive ? 'active' : ''}`}>
      <div className="screw top-left" />
      <div className="screw top-right" />
      <div className="screw bottom-left" />
      <div className="screw bottom-right" />
      <button
        onClick={onClick}
        className="fallout-button"
      >
        <span className="button-text">{children}</span>
        <div className={`indicator-light ${isActive ? 'active' : ''}`} />
      </button>
    </div>
  );
}

export function DecorativePanel({ pattern = 'dots' }) {
  return (
    <div className={`decorative-panel ${pattern}`}>
      <div className="screw top-left" />
      <div className="screw top-right" />
      <div className="screw bottom-left" />
      <div className="screw bottom-right" />
    </div>
  );
}

