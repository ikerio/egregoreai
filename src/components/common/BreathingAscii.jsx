// src/components/common/BreathingAscii.jsx
import React, { useState, useEffect } from 'react';

const BreathingAscii = ({ className = "" }) => {
  const [breatheState, setBreatheState] = useState(0);
  
  // Characters ordered by intensity (from most visible to least)
  const chars = ['█', '▓', '▒', '░', ' '];
  
  // Original ASCII art stored as a template
  const originalArt = `                                                    █████████████░                                                           
                                               ▒████████████████▓░                                                           
                                            █████████ █ ░▓ ██████░                                                           
                                         ████████▒████░▒▓▒▒████▓█                                                            
                                       ███████████▓░ ░  ▒▒▓████▓█                                                            
                                     █████████████▒░░▒▒▒▓███▓█ ██                                                            
                                    ████████▒████▓░░ ▒▒ ░▒▒▒█████                       ░ ░                                  
                                   ███████▒██████████▒░▒▓█████████░                     ░                                    
                                  ▓███▒██▒██▓   ░░░▒█▒░ ░▒▒▒▒▓██▓▓█░    ░                                                    
                                  ████▒▒███▒▒░  ░░░▓█▓ ███████████▒▒   ░                                                     
                                 █████░███░  ░░░▒▒▓██▒██░███▓ ▒█▒░▒░                                                         
                                 ███▒█ █░███████████████▒▓▒█▓▓██▓▒░                                                          
                               ░░███▒  ███████████▒▓▒▒▓█░ ▒██ █▓                                                             
                                 ████▒██████▓ ████▒███▓██▓▒▓███▓▓▒░                                                          
                                ░██▒█████░░█████▓  ░  ▒▓██████░                               ░                              
                                ▒█████████▓▓▒▒▒██████████████░  ░░                                                           
                       ░░    ░░░░████████████████████████████░   ░                            ░                              
                      ░ ░        ███░███░████████▒      ░░▒░░  ░░░                                                           
                      ▒░░     ░░▒██████▓░█▒  █████▒░  ░░                                                                     
                                ▓█████ ▒▒███████████▒░░                                                                      
                      ░      ██████▓░▒▒███████████░██████▓░                                                                  
                     ░░░░░░  ██████▒░░█████    ▓██████████▒   ░            ░░                  ░▒░                           
                     ░░      █████▒▒▒████         █████▓██░  ░ ░         ▓██░                                                
                      ░      ███████████            █████ ███░           █░█▒                   ░░░                          
                             ███▒░░  ████             ██▒██████          ▓██     ▒░░                                         
                      ░░░     ██▒█████████▓            ████████               ▓█▒ ░░                                         
                      ░░▒░  ░ ███████████████        ██████████          ▓███░▓ ▓░░        ░ ░                               
                       ░░░░ ░ ███ █░░▓███████       ███████████          █████ █▓          ░ ░                               
                           ▒ ░ ████████████████████████▓  ▒████          ██████           ▒░ ░                               
                  ░ ░  ░   ░ ░ ░█████████████████████▓    ▓███▓          ▒████▓         ░▒░ ░         ░ ░                    
                  ░ ░           █████▓▒  ▓▓ █████ ████████████▒                         ░ ░░░         ░░░                    
                  ░      ░  ░    ███░  ░░░░▓██████████████████                          ░                                    
                         ░        ███▓███████████▓▓█████▒████▒                           ░                                   
                       ░░         ██ ███████▓▒██▓ ░  ░▒█████▓                            ▒░░          ░                      
                                  ██▒███▒▓▒░ ░████▓████▓▓███                              ░           ▒ ░                    
                                  ███████░▒███▓ ░▓░█████████▓                                         ▒ ░                    
                                   ██████▓▒▒█████▒ ▒▒█ ▓▓█▓██▒██░                                      ░░                    
                                   ███████▒      ░▓██▓░██████░░▓░                         ░                                  
                                 ░▓ ███████▒   ░░ ▒██▒▓███▒░▒▓██                          ░ ░                                
                         ░       ███ ███▓████░ ░▓▒▒███▓█████▓                                                                
                                 ████ ████▓████▒▓░ ▒████████▓                                                                
                                 ██▓█  █████████▒ ▒▒████████                                                                 
                                 ███▒    ███████▓░  ░▒▓░                            ░                                        
                                 █▒█▒    ██████████▓▒░                          ░                                            
                                 █▒█     █████████▓▓▓▒▒░                                                                     
                                 ░░░     ███████▒▒  ░░░▒░░░                     ░░                                           
                                ░▒░     ████████▓▒  ░▒▓▓▒▓▓                                                                  
                               ░▒ ▒    ███████████▒ ░▓██░▓█                                                                  
                                 ▒░   ░█████▓███████ ▓▓▒ ▓▓                                                                  
                               ░     ████░███ █████████▓▒▓░                                                                  
                                     ████▓█ █████████    ▓▓                                                                  
                                     █████▓█▒░░░░▒█████▒▓▒█░                                                                 
                                     ░██████▒████████████████▓                                                               
                                      ░░████████░░▒███████████▓▒▒                                                            
                                        ░ ███████▓█▒  ░▒▒  ▒█████                                                            
                                            ██████████████▓▒▓▓░▓█░                                                           
                                                █████████████████                                                            
                                                    ████████████`;

  // Function to transform the ASCII art based on breathe state
  const transformAscii = () => {
    let transformedArt = originalArt;
    
    // Calculate the edge detection effect based on breathe state
    // breatheState oscillates between 0 and 1
    const threshold = Math.sin(breatheState * Math.PI * 2) * 0.5 + 0.5;
    
    // Replace characters based on breathing state
    chars.forEach((char, index) => {
      const nextChar = chars[Math.min(index + 1, chars.length - 1)];
      if (Math.random() < threshold) {
        transformedArt = transformedArt.replaceAll(char, nextChar);
      }
    });

    return transformedArt;
  };

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      // Complete one breath cycle every 4 seconds
      setBreatheState((elapsed % 4000) / 4000);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`ml-20 font-mono whitespace-pre text-[0.5rem] sm:text-xs md:text-sm leading-none ${className}`}>
      {transformAscii()}
    </div>
  );
};

export default BreathingAscii;