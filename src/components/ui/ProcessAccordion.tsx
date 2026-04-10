'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import type { IconName } from '@/components/ui/Icon';

/* ── Types ── */
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

const TRANSITION_MS = 550;
const TOUCH_THRESHOLD = 30;

/* ── Main Component ── */
export default function ProcessAccordion({
  steps,
}: {
  steps: readonly ProcessStep[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* ── Desktop: closest-to-center scroll tracker ── */
  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const rows = Array.from(
      container.querySelectorAll<HTMLElement>('.process-accordion__row'),
    );
    let rafId = 0;
    let activeRow: HTMLElement | null = null;

    const update = () => {
      const vh = window.innerHeight;
      const center = vh / 2;
      let closest: HTMLElement | null = null;
      let minDist = Infinity;

      for (const row of rows) {
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = row;
        }
      }

      const next = minDist < vh * 0.45 ? closest : null;

      if (next !== activeRow) {
        activeRow?.classList.remove('is-active');
        next?.classList.add('is-active');
        activeRow = next;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  /* ── Mobile: scroll-hijack fullscreen slider ── */
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);
  const isHijacked = useRef(false);
  const touchStartY = useRef(0);
  const total = steps.length;

  const goTo = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating.current) return;

      if (direction === 'next') {
        if (activeIndex >= total - 1) {
          // Last card → release scroll, let page continue
          isHijacked.current = false;
          return;
        }
        isAnimating.current = true;
        setActiveIndex((i) => i + 1);
      } else {
        if (activeIndex <= 0) {
          // First card → release scroll, let page go up
          isHijacked.current = false;
          return;
        }
        isAnimating.current = true;
        setActiveIndex((i) => i - 1);
      }

      setTimeout(() => {
        isAnimating.current = false;
      }, TRANSITION_MS);
    },
    [activeIndex, total],
  );

  useEffect(() => {
    if (!isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    /* ── IntersectionObserver: detect when section is in viewport ── */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isHijacked.current = true;
        }
      },
      { threshold: 0.5 },
    );
    io.observe(container);

    /* ── Wheel handler ── */
    const onWheel = (e: WheelEvent) => {
      if (!isHijacked.current) return;

      // Only hijack when the section is actually covering viewport
      const rect = container.getBoundingClientRect();
      const isCovering =
        rect.top <= 10 && rect.bottom >= window.innerHeight - 10;

      if (!isCovering) {
        // Section not covering viewport — check if we should re-engage
        const isEnteringFromTop = rect.top < window.innerHeight * 0.5 && rect.top > -10;
        if (!isEnteringFromTop) {
          isHijacked.current = false;
          return;
        }
      }

      e.preventDefault();

      if (isAnimating.current) return;

      if (e.deltaY > 0) {
        goTo('next');
      } else if (e.deltaY < 0) {
        goTo('prev');
      }
    };

    /* ── Touch handlers ── */
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isHijacked.current) return;

      const rect = container.getBoundingClientRect();
      const isCovering =
        rect.top <= 10 && rect.bottom >= window.innerHeight - 10;

      if (!isCovering) return;

      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isHijacked.current) return;
      if (isAnimating.current) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;

      if (deltaY > 0) {
        goTo('next');
      } else {
        goTo('prev');
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isMobile, goTo]);

  /* ── Re-engage hijack when scrolling back into the section ── */
  useEffect(() => {
    if (!isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (isHijacked.current) return;

      const rect = container.getBoundingClientRect();
      const isCovering =
        rect.top <= 10 && rect.bottom >= window.innerHeight - 10;

      if (isCovering) {
        isHijacked.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  /* ── Mobile render: fullscreen stacked cards ── */
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className="process-accordion process-accordion--mobile"
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`process-accordion__row ${i === activeIndex ? 'is-active' : ''}`}
          >
            {/* Background image */}
            <div className="process-accordion__bg" aria-hidden="true">
              <Image
                src={STEP_IMAGES[i]}
                alt=""
                fill
                sizes="100vw"
                priority
                className="process-accordion__bg-img"
              />
              <div className="process-accordion__bg-overlay" />
            </div>

            {/* Content */}
            <div className="process-accordion__content">
              <span className="process-accordion__num">{step.num}</span>

              <div className="process-accordion__meta">
                <div className="process-accordion__icon">
                  <Icon name={step.icon as IconName} />
                </div>
                <h3 className="process-accordion__title">{step.title}</h3>
              </div>

              <p className="process-accordion__desc">{step.desc}</p>

              {/* Step indicator dots */}
              <div className="process-accordion__dots" aria-hidden="true">
                {steps.map((_, j) => (
                  <span
                    key={j}
                    className={`process-accordion__dot ${j === activeIndex ? 'process-accordion__dot--current' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ── Desktop layout: flow rows ── */
  return (
    <div ref={containerRef} className="process-accordion">
      {steps.map((step, i) => (
        <div key={step.num} className="process-accordion__row">
          {/* Background image */}
          <div className="process-accordion__bg" aria-hidden="true">
            <Image
              src={STEP_IMAGES[i]}
              alt=""
              fill
              sizes="100vw"
              priority
              className="process-accordion__bg-img"
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>

          {/* Mobile image (not used on desktop) */}
          <div className="process-accordion__mobile-img">
            <Image
              src={STEP_IMAGES[i]}
              alt={step.title}
              width={800}
              height={400}
              sizes="(max-width: 767px) 100vw, 0px"
              className="process-accordion__mobile-img-el"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
