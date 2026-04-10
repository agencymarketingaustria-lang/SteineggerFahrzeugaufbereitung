'use client';

import { useRef, useEffect, useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ═══ Desktop: closest-to-center scroll tracker ═══ */
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

  /* ═══ Mobile: scroll-hijack fullscreen slider ═══ */
  useEffect(() => {
    if (!isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const total = steps.length;

    /* ── Mutable state (refs avoid stale closures) ── */
    const state = {
      index: 0,
      animating: false,
      locked: false,
      touchY: 0,
      scrollYBefore: 0,
      sectionTop: 0,
      cooldown: false,
      lastScrollY: window.scrollY,
    };

    /* ── Lock: freeze page, go fullscreen ── */
    const lock = () => {
      if (state.locked || state.cooldown) return;
      state.locked = true;

      // Store scroll position and section's document offset
      state.scrollYBefore = window.scrollY;
      state.sectionTop = window.scrollY + container.getBoundingClientRect().top;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${state.scrollYBefore}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      container.classList.add('is-locked');
    };

    /* ── Unlock: restore page scroll ── */
    const unlock = (dir: 'up' | 'down') => {
      if (!state.locked) return;
      state.locked = false;
      container.classList.remove('is-locked');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';

      // Cooldown: prevent immediate re-lock
      state.cooldown = true;
      setTimeout(() => { state.cooldown = false; }, 600);

      if (dir === 'down') {
        // Scroll to just past the section
        window.scrollTo(0, state.sectionTop + container.offsetHeight + 2);
      } else {
        // Scroll to just above the section
        window.scrollTo(0, Math.max(0, state.sectionTop - 2));
      }
      state.lastScrollY = window.scrollY;
    };

    /* ── Advance by 1 step ── */
    const advance = (dir: 1 | -1) => {
      if (state.animating) return;

      const next = state.index + dir;

      // Boundary: release scroll
      if (next < 0) {
        unlock('up');
        return;
      }
      if (next >= total) {
        unlock('down');
        return;
      }

      state.animating = true;
      state.index = next;
      setActiveIndex(next);

      setTimeout(() => {
        state.animating = false;
      }, TRANSITION_MS);
    };

    /* ── Touch handlers ── */
    const onTouchStart = (e: TouchEvent) => {
      state.touchY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (state.locked) e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!state.locked || state.animating) return;
      const dy = state.touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) < TOUCH_THRESHOLD) return;
      advance(dy > 0 ? 1 : -1);
    };

    /* ── Wheel handler ── */
    const onWheel = (e: WheelEvent) => {
      if (!state.locked) return;
      e.preventDefault();
      if (state.animating) return;
      advance(e.deltaY > 0 ? 1 : -1);
    };

    /* ── Scroll: lock only when scrolling DOWN into section ── */
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > state.lastScrollY;
      state.lastScrollY = currentY;

      if (state.locked || state.cooldown) return;
      if (!scrollingDown) return; // Only lock when scrolling down

      const rect = container.getBoundingClientRect();
      // Lock when section top reaches viewport top (scrolling down into it)
      if (rect.top <= 5 && rect.top >= -30 && rect.bottom > window.innerHeight * 0.8) {
        state.index = 0;
        setActiveIndex(0);
        lock();
      }
    };

    /* ── Register listeners ── */
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (state.locked) {
        state.locked = false;
        container.classList.remove('is-locked');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
      }
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile, steps.length]);

  /* ═══ Mobile render ═══ */
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

            <div className="process-accordion__content">
              <span className="process-accordion__num">{step.num}</span>
              <div className="process-accordion__meta">
                <div className="process-accordion__icon">
                  <Icon name={step.icon as IconName} />
                </div>
                <h3 className="process-accordion__title">{step.title}</h3>
              </div>
              <p className="process-accordion__desc">{step.desc}</p>
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

  /* ═══ Desktop render ═══ */
  return (
    <div ref={containerRef} className="process-accordion">
      {steps.map((step, i) => (
        <div key={step.num} className="process-accordion__row">
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
