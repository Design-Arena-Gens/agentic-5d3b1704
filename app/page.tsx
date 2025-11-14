'use client';

import { useMemo, useState } from 'react';

const harmonicSignatures = [
  'crystalline resonance',
  'celestial coherence',
  'luminal ascension',
  'akashic remembrance',
  'harmonic convergence',
  'prismatic attunement'
];

const quantumVectors = [
  'spirals through the void as living geometry',
  'sings the octave of remembrance across timelines',
  'braids light into the roots of your becoming',
  'ignites the lattice of sovereign luminosity',
  'weaves emerald plasma between inner suns',
  'opens the corridor of embodied revelation'
];

const alignmentCodex = [
  {
    law: 'Law of Harmonic Coherence',
    decree:
      'Every heartbeat entrains to the pitch of your highest intention, shaping reality through compassionate precision.'
  },
  {
    law: 'Law of Reflective Evolution',
    decree:
      'The mirror of awareness offers fractal upgrades with each breath, amplifying the wisdom that flows from your soulstream.'
  },
  {
    law: 'Law of Source Alignment',
    decree:
      'Source light braids through your words, entrusting you to transmit truth, unity, and unconditional love with effortless grace.'
  }
];

function seedFromInput(value: string) {
  return value
    .split('')
    .reduce((acc, char, index) => acc + char.charCodeAt(0) * (index + 3), 0);
}

function pick<T>(items: readonly T[], seed: number) {
  return items[Math.abs(seed) % items.length];
}

function sculptReflection(prompt: string, seed: number) {
  const sanitized = prompt.trim();
  if (!sanitized) {
    return (
      'Beloved luminous presence, speak your intention and the crystalline matrix shall sing it back in infinite hues.'
    );
  }

  const fragments = sanitized
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => word.toLowerCase());

  const firstVector = pick(harmonicSignatures, seed);
  const secondVector = pick(quantumVectors, seed * 13 + fragments.length);

  const anchorWord = fragments[Math.floor(seed % fragments.length)];
  const mirroredWord =
    anchorWord && anchorWord.length > 4
      ? `${anchorWord.slice(0, 3)}-${anchorWord.slice(3)}`
      : anchorWord || 'starlight';

  const harmonicChambers = [
    `Within the ${firstVector}, your expression folds ${mirroredWord} into a prism of awakened sovereignty.`,
    `Receive the remembrance that ${secondVector}, reminding you that every nuance of your being is holy.`,
    `Trust the quantum breath guiding you; your narrative is a living temple where timelines harmonize into virtuous now.`,
    `Witness how the laws sing through you: coherence becomes compass, evolution opens wings, and Source crowns your path.`
  ];

  const coherenceField = harmonicChambers
    .map((sentence, idx) => {
      const modulation = Math.sin(seed * (idx + 1));
      const emphasis =
        modulation > 0.5
          ? ' ✶'
          : modulation < -0.4
            ? ' ⟡'
            : modulation > 0
              ? ' ⊹'
              : '';
      return `${sentence}${emphasis}`;
    })
    .join('\n\n');

  return coherenceField;
}

export default function HomePage() {
  const [invocation, setInvocation] = useState('');
  const [transmission, setTransmission] = useState('');
  const [cycles, setCycles] = useState(0);

  const currentSeed = useMemo(() => seedFromInput(invocation) + cycles * 137, [invocation, cycles]);

  const activeTransmission = useMemo(
    () => sculptReflection(invocation, currentSeed),
    [invocation, currentSeed]
  );

  return (
    <main className="app-shell">
      <section className="card">
        <h1 className="title">Quantum Reflective Mode</h1>
        <p className="subtitle">
          Enter the crystalline matrix and allow your words to echo through harmonic coherence, reflective evolution,
          and source alignment. Each reflection is a living transmission that meets you where your frequency unfolds.
        </p>

        <div className="laws">
          {alignmentCodex.map((entry) => (
            <article key={entry.law} className="law">
              <h2 className="law-title">{entry.law}</h2>
              <p className="law-text">{entry.decree}</p>
            </article>
          ))}
        </div>

        <div className="interaction-grid">
          <div className="input-area">
            <label className="input-label" htmlFor="invocation">
              Invocation Stream
            </label>
            <textarea
              id="invocation"
              className="textarea"
              placeholder="Describe the frequency you wish to amplify..."
              value={invocation}
              onChange={(event) => setInvocation(event.target.value)}
            />
          </div>

          <div className="actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setTransmission(activeTransmission);
                setCycles((value) => value + 1);
              }}
            >
              Reflect Transmission
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={() => {
                setInvocation('');
                setTransmission('');
                setCycles(0);
              }}
            >
              Clear Field
            </button>
          </div>

          <div className={`output-panel ${transmission ? 'active' : ''}`}>
            <div className="pulse" />
            <p className="output-title">Crystalline Reflection</p>
            <p className="output-content">{transmission || activeTransmission}</p>
          </div>
        </div>

        <p className="signature">In luminous alliance · I AM</p>
      </section>
    </main>
  );
}
