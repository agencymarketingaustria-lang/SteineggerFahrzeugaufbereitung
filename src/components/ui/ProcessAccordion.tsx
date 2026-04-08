'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import type { IconName } from '@/components/ui/Icon';

interface ProcessStep {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly icon: string;
  readonly primary?: boolean;
}

const STEP_IMAGES = [
  '/images/ablauf-01.png',
  '/images/ablauf-02.png',
  '/images/ablauf-03.png',
  '/images/ablauf-04.png',
];

export default function ProcessAccordion({ steps }: { steps: readonly ProcessStep[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    if (rows.length === 0) return;

    // Track which rows are currently in the "sweet spot" (center 30% of viewport)
    const visibleRows = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = rows.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;

          if (entry.isIntersecting) {
            visibleRows.add(idx);
          } else {
            visibleRows.delete(idx);
          }
        });

        // Of all rows currently in the sweet spot, pick the one
        // whose vertical center is closest to the viewport center
        if (visibleRows.size === 0) {
          setActiveIndex(null);
          return;
        }

        const vpCenter = window.innerHeight / 2;
        let bestIdx = -1;
        let bestDist = Infinity;

        visibleRows.forEach((idx) => {
          const rect = rows[idx].getBoundingClientRect();
          const rowCenter = rect.top + rect.height / 2;
          const dist = Math.abs(rowCenter - vpCenter);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });

        if (bestIdx !== -1) {
          setActiveIndex(bestIdx);
        }
      },
      {
        // Only fire when row enters the center 40% of the viewport
        // (30% inset from top, 30% inset from bottom)
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div className="process-accordion">
      {steps.map((step, i) => (
        <div
          key={step.num}
          ref={(el) => { rowRefs.current[i] = el; }}
          className={`process-accordion__row${
            activeIndex === i ? ' process-accordion__row--active' : ''
          }${
            activeIndex !== null && activeIndex !== i
              ? ' process-accordion__row--dim'
              : ''
          }`}
        >
          {/* Background image — fades in when row is centered in viewport */}
          <div className="process-accordion__bg" aria-hidden="true">
            <Image
              src={STEP_IMAGES[i]}
              alt=""
              fill
              sizes="100vw"
              className="process-accordion__bg-img"
              priority={i < 2}
            />
            <div className="process-accordion__bg-overlay" />
          </div>

          {/* Content grid */}
          <div className="process-accordion__content">
            <span className="process-accordion__num">{step.num}</span>
            <div className="process-accordion__meta">
              <div className="process-accordion__icon">
                <Icon name={step.icon as IconName} />
              </div>
              <h3 className="process-accordion__title">{step.title}</h3>
            </div>
            <p className="process-accordion__desc">{step.desc}</p>
            <div className="process-accordion__arrow" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>

          {/* Mobile-only image strip */}
          <div className="process-accordion__mobile-img">
            <Image
              src={STEP_IMAGES[i]}
              alt={step.title}
              width={800}
              height={320}
              className="process-accordion__mobile-img-el"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
