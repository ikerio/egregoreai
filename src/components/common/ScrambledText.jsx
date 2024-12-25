// src/components/common/ScrambledText.jsx
import React, { useState, useEffect, useRef } from 'react';

const ScrambledText = ({ children, className = "" }) => {
  const originalText = children.toString();
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);
  const animationPhase = useRef('scrambling'); // 'scrambling', 'returning', 'idle'
  const animationRef = useRef(null);
  
  // Characters for the flap effect - mix of ASCII art characters
  const chars = '█▓▒░⎯⌇⌎┃━│¦⎢⎥⎮╎⎪╏┆┇┊┋╵╷╹╻';
  
  // Preserve whitespace and special characters
  const preserveSpecialChars = (original, scrambled) => {
    const result = scrambled.split('');
    for (let i = 0; i < original.length; i++) {
      if (original[i].match(/[\s\[\]←→↑|$>-]/)) {
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
    let rounds = 0;
    const maxRounds = 2;

    const animate = () => {
      setDisplayText(prev => {
        const textArray = prev.split('');
        
        if (isHovering) {
          // Return to original text
          if (currentIndex < textArray.length) {
            const targetChar = originalText[currentIndex];
            if (!targetChar.match(/[\s\[\]←→↑|$>-]/)) {
              textArray[currentIndex] = targetChar;
            }
          }
        } else {
          // Scramble text
          if (currentIndex < textArray.length) {
            const originalChar = originalText[currentIndex];
            if (!originalChar.match(/[\s\[\]←→↑|$>-]/)) {
              textArray[currentIndex] = chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }

        currentIndex++;
        if (currentIndex >= originalText.length) {
          currentIndex = 0;
          rounds++;
          
          if (isHovering && rounds >= 1) {
            clearInterval(animationRef.current);
            return originalText;
          }
          
          if (!isHovering && rounds >= maxRounds) {
            rounds = 0; // Keep scrambling when not hovering
          }
        }

        return preserveSpecialChars(originalText, textArray.join(''));
      });
    };

    animationRef.current = setInterval(animate, 1);

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
      <pre className="font-mono whitespace-pre">
        {displayText}
      </pre>
    </div>
  );
};

export default ScrambledText;