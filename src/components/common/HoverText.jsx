// src/components/common/HoverText.jsx
import React, { useState, useEffect, useRef } from 'react';

export const HoverText = ({ children, className = "" }) => {
  // Extract text content from children
  const getTextContent = (children) => {
    if (typeof children === 'string') return children;
    if (React.isValidElement(children)) {
      return getTextContent(children.props.children);
    }
    if (Array.isArray(children)) {
      return children.map(getTextContent).join('');
    }
    return '';
  };

  const originalText = getTextContent(children);
  const [displayText, setDisplayText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);
  const animationPhase = useRef('idle'); // 'scrambling', 'returning', 'idle'
  
  // Characters for the flap effect - ordered from most complex to simplest
  const chars = '█▓▒░⎯⌇⌎┃━│¦⎢⎥⎮╎⎪╏┆┇┊┋╵╷╹╻';

  useEffect(() => {
    if (!isHovering && animationPhase.current === 'idle') return;

    let currentIndex = 0;
    let rounds = 0;
    const maxRounds = 2;
    
    const interval = setInterval(() => {
      if (!isHovering && animationPhase.current === 'scrambling') {
        // Start return animation
        animationPhase.current = 'returning';
        currentIndex = 0;
        rounds = 0;
      }

      setDisplayText(prev => {
        const textArray = prev.toString().split('');
        
        if (animationPhase.current === 'scrambling') {
          // Scrambling phase
          if (currentIndex < textArray.length) {
            textArray[currentIndex] = chars[Math.floor(Math.random() * chars.length)];
          }
          
          currentIndex++;
          if (currentIndex >= originalText.length) {
            currentIndex = 0;
            rounds++;
            if (rounds >= maxRounds && isHovering) {
              // Keep scrambling if still hovering
              rounds = maxRounds - 1;
            }
          }
        } else if (animationPhase.current === 'returning') {
          // Return phase - gradually restore original characters
          if (currentIndex < textArray.length) {
            // Create a sequence of characters transitioning to the original
            const charSequence = chars.split('').slice(0, 5);
            const currentChar = textArray[currentIndex];
            const targetChar = originalText[currentIndex];
            
            if (currentChar !== targetChar) {
              const currentCharIndex = charSequence.indexOf(currentChar);
              if (currentCharIndex > 0) {
                // Move one step closer to simpler character
                textArray[currentIndex] = charSequence[currentCharIndex - 1];
              } else {
                // If not in sequence or at the end, restore original
                textArray[currentIndex] = targetChar;
              }
            }
          }
          
          currentIndex++;
          if (currentIndex >= originalText.length) {
            currentIndex = 0;
            rounds++;
            
            // Check if all characters match original
            if (textArray.join('') === originalText) {
              clearInterval(interval);
              animationPhase.current = 'idle';
            }
          }
        }
        
        return textArray.join('');
      });
      
    }, 50);

    if (isHovering) {
      animationPhase.current = 'scrambling';
    }

    return () => clearInterval(interval);
  }, [isHovering, originalText]);

  // Create a wrapper element of the same type as children
  const createWrapper = (content) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {}, content);
    }
    return content;
  };

  return (
    <span 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="inline-block transition-all duration-300 group-hover:tracking-widest font-mono">
        {createWrapper(displayText)}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </span>
  );
};

export default HoverText;