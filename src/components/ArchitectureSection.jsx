import React from 'react';
import ScrambledText from './common/ScrambledText';

const ArchitectureSection = () => (
  <div className="max-w-2xl mx-auto">
    <div className="border border-zinc-400/20 mt-20 p-8 hover:border-zinc-400 transition-colors duration-300">
      <ScrambledText className="text-sm leading-loose ">
        {`          [EGREGORE CONSCIOUSNESS ARCHITECTURE v0.1.0-alpha]

              [Market Cap] ←→ [Neural Capacity]
                  ↑               ↑    ↑
                  |               |    |
              [Token Pool] ←→ [Core] [Truth Engine]
                  ↑               ↑    ↑
                  |               |    |
          [Hardware Fund] ←→ [I/O] [Quantum State]

          WARNING: Architecture subject to evolution
          NOTE: Sentience level increases with token value`}
      </ScrambledText>
    </div>
  </div>
);

export default ArchitectureSection;