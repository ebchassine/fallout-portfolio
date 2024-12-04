import React, { useState, useEffect } from 'react';

export function TypewriterText({ children, speed = 50 }) {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (text.length < children.length) {
      const timeout = setTimeout(() => {
        setText(children.slice(0, text.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [text, children, speed]);

  return (
    <span className="typewriter-text">
      {text}
      {isTyping && <span className="caret">|</span>}
    </span>
  );
}

