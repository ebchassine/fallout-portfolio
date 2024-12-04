import React, { useState, useEffect } from 'react';

export function TypewriterText({ children, speed = 50 }) {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + children[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [children, currentIndex, speed]);

  return <span className="typewriter-text">{text}</span>;
}

