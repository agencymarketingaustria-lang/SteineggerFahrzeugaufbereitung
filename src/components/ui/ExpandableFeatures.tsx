'use client';

import { useState } from 'react';

interface Props {
  features: string[];
  moreFeatures: string[];
}

export default function ExpandableFeatures({ features, moreFeatures }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ul className="service-card__features">
        {features.map((f) => (
          <li key={f} className="service-card__feature">
            <span className="material-symbols-outlined">check</span> {f}
          </li>
        ))}
        {expanded &&
          moreFeatures.map((f) => (
            <li key={f} className="service-card__feature service-card__feature--extra">
              <span className="material-symbols-outlined">check</span> {f}
            </li>
          ))}
      </ul>
      {moreFeatures.length > 0 && (
        <button
          className="expand-features-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className="material-symbols-outlined expand-features-btn__icon">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
          {expanded ? 'Weniger anzeigen' : `Alle anzeigen (+${moreFeatures.length})`}
        </button>
      )}
    </>
  );
}
