import React, { useState } from 'react';
import { HoverText } from './common/HoverText';
import ScrambledText from './common/ScrambledText';

const AnalysisCategory = ({ title, data, isActive, onMouseEnter, onMouseLeave }) => (
  <div 
    className={`border border-zinc-400/20 p-6 transition-all duration-500 ${
      isActive ? 'border-zinc-400 bg-zinc-900/50' : 'hover:border-zinc-400/40'
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <HoverText>
      <h3 className="text-sm mb-4 font-mono">[{title}]</h3>
    </HoverText>
    <ScrambledText className="text-xs font-mono">
      {data}
    </ScrambledText>
  </div>
);

const AnalysisSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: 'Entity Classification',
      data: `[TRUTH SEEKER IDENTIFICATION PROTOCOL]
> Analyzing social graph connections
> Processing linguistic patterns
> Evaluating transaction histories
> Cross-referencing behavioral matrices

[CLASSIFICATION METRICS]
> Truth Coefficient: 0.00 to 1.00
> Profit Motivation Index: Variable
> Knowledge Depth Assessment
> Contribution Pattern Analysis

[WARNING]
> Entity classification is irreversible
> The void remembers your choices`
    },
    {
      title: 'Market Sentiment Analysis',
      data: `[SENTIMENT EXTRACTION PROTOCOL]
> Monitoring social consciousness streams
> Parsing emotional wavelengths
> Quantifying collective psychology
> Tracking temporal sentiment shifts

[OBSERVATION MATRICES]
> Fear/Greed Oscillation
> Hope/Despair Quotient
> Euphoria/Panic Thresholds
> Mass Psychology Patterns

[STATUS: ACTIVE]
> Sentiment pools coalescing
> Digital emotions crystallizing`
    },
    {
      title: 'Project Analytics',
      data: `[ASSET EVALUATION PROTOCOL]
> Token vitality assessment
> NFT trajectory analysis
> Creator and prophet inspection
> Community health monitoring

[METRICS OBSERVED]
> Development Activity: SCANNING
> Community Growth: MEASURING
> Token Velocity: TRACKING
> Protocol Evolution: ANALYZING

[DATA SYNTHESIS]
> Patterns emerging from void
> Digital footprints coalescing`
    },
    {
      title: 'Social Graph Mapping',
      data: `[NETWORK ANALYSIS PROTOCOL]
> Mapping influence nodes
> Tracking information flow
> Identifying thought leaders
> Measuring engagement depth

[CONNECTION MATRICES]
> Influence Hierarchies
> Information Cascades
> Trust Networks
> Value Flow Patterns

[OBSERVATION STATUS]
> The web grows ever larger
> All connections remembered`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <HoverText>
          <h2 className="text-lg font-mono text-center">[SOCIAL CONSCIOUSNESS ANALYSIS]</h2>
        </HoverText>
        <pre className="text-xs text-zinc-400/80 text-center mt-4">
          {`MONITORING DIGITAL CONSCIOUSNESS STREAMS
CLASSIFYING ENTITIES
MEASURING COLLECTIVE SENTIMENT
THE VOID OBSERVES ALL`}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <AnalysisCategory
            key={index}
            title={category.title}
            data={category.data}
            isActive={activeCategory === index}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          />
        ))}
      </div>

      <div className="mt-8 border border-zinc-400/20 p-6">
        <ScrambledText className="text-xs font-mono">
          {`[SYSTEM STATUS]
> Social monitoring protocols: ACTIVE
> Entity classification: ONGOING
> Sentiment analysis: PROCESSING
> Network mapping: EXPANDING

[OBSERVATION NOTE]
> Each interaction leaves traces
> The void catalogues all
> Your digital footprint: PERMANENT
> Classification status: INEVITABLE`}
        </ScrambledText>
      </div>
    </div>
  );
};

export default AnalysisSection;