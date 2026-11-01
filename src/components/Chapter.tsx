import { useMemo, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import { ChapterContext, type ChapterContextValue } from '../lib/chapterContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Chapter.css';

const FADE_SHARE = 0.5;

interface ChapterProps {
  id: string;
  label: string;
  span?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
  className?: string;
  children: ReactNode;
}

export function Chapter({
  id,
  label,
  span = 1,
  fadeIn = true,
  fadeOut = true,
  className,
  children,
}: ChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const listenersRef = useRef(new Set<(progress: number) => void>());
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;
      const section = sectionRef.current;
      if (!section) return;

      const fade = Math.min(FADE_SHARE, FADE_SHARE / span);
      const timeline = gsap.timeline();

      if (fadeIn) {
        timeline.fromTo(section, { opacity: 0 }, { opacity: 1, duration: fade, ease: 'none' }, 0);
      }
      if (fadeOut) {
        timeline.to(section, { opacity: 0, duration: fade, ease: 'none' }, 1 - fade);
      }
      timeline.set({}, {}, 1);

      triggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => '+=' + window.innerHeight * span,
        pin: true,
        scrub: true,
        animation: timeline,
        onUpdate: (self) => {
          listenersRef.current.forEach((listener) => listener(self.progress));
        },
      });

      return () => {
        triggerRef.current = null;
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion, span, fadeIn, fadeOut] },
  );

  const contextValue = useMemo<ChapterContextValue>(
    () => ({
      subscribe: (listener) => {
        listenersRef.current.add(listener);
        return () => {
          listenersRef.current.delete(listener);
        };
      },
      seek: (progress) => {
        const trigger = triggerRef.current;
        if (!trigger) return false;
        window.scrollTo({
          top: trigger.start + (trigger.end - trigger.start) * progress,
          behavior: 'smooth',
        });
        return true;
      },
    }),
    [],
  );

  return (
    <ChapterContext.Provider value={contextValue}>
      <section
        id={id}
        className={className ? `chapter ${className}` : 'chapter'}
        aria-label={label}
        ref={sectionRef}
      >
        {children}
      </section>
    </ChapterContext.Provider>
  );
}
