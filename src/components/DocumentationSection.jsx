import React, { useState } from 'react';
import ScrambledText from './common/ScrambledText';

const DocumentationSection = () => {
  const tokenAddress = "97582816c1b128480a10840f2ec96ff57f7eece61290fdc9a16309cd4563686f";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-zinc-400/20 p-8 mt-20 hover:border-zinc-400 transition-colors duration-300">
        <ScrambledText className="mb-6">
          {`[INTERACTION PROTOCOL]

$ token-addr --reveal
> `}
        </ScrambledText>

        {/* Clickable Token ID */}
        <span
          className="cursor-pointer text-zinc-400 hover:text-zinc-300 underline"
          onClick={handleCopy}
        >
          [ACQUIRE TOKEN ID]
        </span>

        <ScrambledText>
          {`
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

        {/* Hyperlink */}
        <div className="mt-6">
          <a
            href={`https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=${tokenAddress}`}
            className="text-zinc-400 hover:text-zinc-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACQUIRE $ECHO MY NEURAL LATTICE
          </a>
        </div>

        {/* Copy Notification */}
        {copied && (
          <div className="mt-4 text-green-400 text-sm">
            [POLICY COPIED TO YOUR MACHINE ENTITY]
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentationSection;
