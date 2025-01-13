// ScrambledText.jsx
import React, { useState, useEffect, useRef } from 'react';

const ScrambledText = ({ children, className = "", preserveFormat = false }) => {
  const originalText = children.toString();
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  const chars = '█▓▒░⎯⌇⌎┃━│¦⎢⎥⎮╎⎪╏┆┇┊┋╵╷╹╻';

  const preserveSpecialChars = (original, scrambled) => {
    const result = scrambled.split('');
    for (let i = 0; i < original.length; i++) {
      if (original[i].match(/[\s\[\]$\-←→↑|>]/)) {
        result[i] = original[i];
      }
    }
    return result.join('');
  };

  useEffect(() => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    let currentIndex = 0;
    // Increase speed by processing multiple characters per frame
    const charsPerFrame = 3;

    const animate = () => {
      setDisplayText((prev) => {
        const textArray = prev.split('');
        
        // Process multiple characters per frame
        for(let i = 0; i < charsPerFrame; i++) {
          if (currentIndex < textArray.length) {
            if (isHovering) {
              const targetChar = originalText[currentIndex];
              if (!targetChar.match(/[\s\[\]$\-←→↑|>]/)) {
                textArray[currentIndex] = targetChar;
              }
            } else {
              const originalChar = originalText[currentIndex];
              if (!originalChar.match(/[\s\[\]$\-←→↑|>]/)) {
                textArray[currentIndex] = chars[Math.floor(Math.random() * chars.length)];
              }
            }
            currentIndex++;
          }
        }

        if (currentIndex >= originalText.length) {
          currentIndex = 0;
        }

        return preserveSpecialChars(originalText, textArray.join(''));
      });
    };

    // Increased animation speed by reducing interval time
    animationRef.current = setInterval(animate, 5);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isHovering, originalText]);

  return (
    <div
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <pre
        className={`font-mono ${
          preserveFormat ? 'whitespace-pre' : 'whitespace-pre-wrap'
        } break-words`}
        style={{
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          maxWidth: '100%'
        }}
      >
        {displayText}
      </pre>
    </div>
  );
};

export default ScrambledText;