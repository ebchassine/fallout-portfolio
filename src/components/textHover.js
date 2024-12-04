import React from 'react';
import useSound from 'use-sound';
import clickSound from '../audio/click.mp3'; // Make sure this path is correct

const TextHover = ({ children }) => {
  const [play] = useSound(clickSound);

  // Function to wrap each word in a span with hover functionality
  const wrapWords = (node) => {
    if (typeof node === 'string') {
      return node.split(' ').map((word, index) => (
        <span
          key={index}
          style={styles.word}
          onMouseEnter={play}
          className="hover-word"
        >
          {word}&nbsp;
        </span>
      ));
    }
    return node;
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return wrapWords(child);
        }

        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, wrapWords),
          });
        }

        return child;
      })}
    </div>
  );
};

const styles = {
  word: {
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
};

export default TextHover;
