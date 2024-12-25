// src/components/common/FlapText.jsx
import React, { useState, useEffect, useCallback } from 'react';

const FlapText = ({ children, className = "" }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  // Characters to cycle through (focusing on terminal/cyber aesthetic)
  const chars = '▓▒░█▄▀■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱▲▼▽△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◉◊○●◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯◰◱◲◳◴◵◶◷◸◹◺◻◼◽◾◿';

  const getRandomChar = useCallback(() => {
    return chars[Math.floor(Math.random() * chars.length)];
  }, []);

  const animateText = useCallback((targetText) => {
    setIsAnimating(true);
    let currentText = displayText;
    const finalText = targetText;
    let positions = [];

    // Initialize positions that need to change
    for (let i = 0; i < Math.max(currentText.length, finalText.length); i++) {
      if (currentText[i] !== finalText[i]) {
        positions.push(i);
      }
    }

    // Ensure text lengths match by padding with spaces
    while (currentText.length < finalText.length) currentText += ' ';
    
    let cycles = 0;
    const maxCycles = 3; // Number of random characters to show before revealing final character
    
    const animate = () => {
      if (cycles >= maxCycles && positions.length === 0) {
        setIsAnimating(false);
        setDisplayText(finalText);
        return;
      }

      let newText = currentText.split('');
      
      positions.forEach((pos, index) => {
        // On final cycle, show actual character
        if (cycles >= maxCycles) {
          newText[pos] = finalText[pos];
          positions = positions.filter(p => p !== pos);
        } else {
          newText[pos] = getRandomChar();
        }
      });

      currentText = newText.join('');
      setDisplayText(currentText);
      cycles++;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [displayText, getRandomChar]);

  useEffect(() => {
    if (isHovering && !isAnimating) {
      animateText(children);
    } else if (!isHovering && !isAnimating) {
      animateText(''.padEnd(children.length, ' '));
    }
  }, [isHovering, children, animateText, isAnimating]);

  return (
    <span 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="inline-block font-mono">
        {displayText}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </span>
  );
};

export default FlapText;