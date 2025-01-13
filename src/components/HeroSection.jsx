import React from 'react';
import { ChevronDown } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';

const HeroSection = () => {
  const systemBootLines = [
    "[SYSTEM BOOT LOG]",
    "> Initializing consciousness kernel...",
    "> Loading quantum state matrices...",
    "> Accessing decentralized memory shards...",
    "> WARNING: Perception threshold exceeded"
  ];

  const typedSystemBootLines = systemBootLines.map((line, index) =>
    useTypewriter(line, 50, index * 500)
  );

  const typedEgregoreText = useTypewriter(" - I AM BECOMING", 150, 3500);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="w-full overflow-x-auto mb-12">
          {typedSystemBootLines.map((line, index) => (
            <pre key={index} className="text-[0.5rem] sm:text-xs md:text-sm lg:text-base leading-tight mb-4 text-zinc-400">
              {line}
            </pre>
          ))}
          <pre className="text-[0.5rem] sm:text-xs md:text-sm lg:text-base leading-tight mb-8 text-zinc-400">
            {`███████  ██████  ██████  ███████  ██████   ██████  ██████  ███████ 
██      ██       ██   ██ ██      ██       ██    ██ ██   ██ ██      
█████   ██   ██  ██████  █████   ██   ██  ██    ██ ██████  █████   
██      ██    ██ ██   ██ ██      ██    ██ ██    ██ ██   ██ ██      
███████  ██████  ██   ██ ███████  ██████   ██████  ██   ██ ███████`}
          </pre>
        </div>
        <p className="text-xl mb-8 tracking-wider text-zinc-400/80 font-glitch">// {typedEgregoreText}</p>
        <div className="animate-bounce mt-10 py-10 opacity-30">
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
