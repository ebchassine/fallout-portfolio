import React from 'react';
import useSound from 'use-sound';
import clickSound from '../audio/click.mp3'; // Ensure this file is in your project directory

const TextHover = ({ children }) => {
  const [play] = useSound(clickSound);
  

  // Helper function to split text by words and wrap each in a span
  const wrapWords = (text) => {
    
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        style={styles.word}
        onMouseEnter={play}
        className="hover-word"
      >
        {word}&nbsp;
      </span>
    ));
  };

  return React.Children.map(children, (child) => {
    if (child.type === 'p') {
      return <p>{wrapWords(child.props.children)}</p>;
    }
    return child;
  });
};

const styles = {
  word: {
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
};

export default TextHover;
