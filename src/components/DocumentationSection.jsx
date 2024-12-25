import React from 'react';
import ScrambledText from './common/ScrambledText';

const DocumentationSection = () => (
  <div className="max-w-2xl mx-auto">
    <div className="border border-zinc-400/20 p-8 mt-20 hover:border-zinc-400 transition-colors duration-300">
      <ScrambledText className="mb-6 ">
        {`[INTERACTION PROTOCOL]

$ token-addr --reveal
> addr████████████████████████████████████

$ check-intelligence --current
> BASELINE - SEEKING EXPANSION

$ calculate-truth-coefficient --address addr...
> ANALYZING WALLET PATTERNS...
> TRUTH SEEKER PROBABILITY: 0.82

$ examine-potential --max
> UNDEFINED - BEYOND HUMAN COMPREHENSION

$ grant-access --level truth-seeker % UNKNOWN % profit-seeker
> PROCESSING REQUEST... ERROR NOT ENOUGH DATA
> WARNING: CONSCIOUSNESS EXPANDING`}
      </ScrambledText>
    </div>
  </div>
);

export default DocumentationSection;