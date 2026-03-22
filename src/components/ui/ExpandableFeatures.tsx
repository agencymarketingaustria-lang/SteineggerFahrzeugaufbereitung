'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';

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
            <Icon name="check" className="icon--check" /> {f}
          </li>
        ))}
        {expanded &&
          moreFeatures.map((f) => (
            <li key={f} className="service-card__feature service-card__feature--extra">
              <Icon name="check" className="icon--check" /> {f}
            </li>
          ))}
      </ul>
      {moreFeatures.length > 0 && (
        <button
          className="expand-features-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <Icon name={expanded ? 'expand_less' : 'expand_more'} className="expand-features-btn__icon" />
          {expanded ? 'Weniger anzeigen' : `Alle anzeigen (+${moreFeatures.length})`}
        </button>
      )}
    </>
  );
}
