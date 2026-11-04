import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap';
import {
  ChapterContext,
  registerChapterSeeker,
  type ChapterContextValue,
} from '../lib/chapterContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Chapter.css';

const FADE_SHARE = 0.35;
const DESKTOP_QUERY = '(min-width: 900px)';
const MOBILE_QUERY = '(max-width: 899px)';

interface ChapterProps {
  id: string;
  label: string;
  span?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
  className?: string;
  children: ReactNode;
}

function buildFadeTimeline(section: HTMLElement, fade: number, fadeIn: boolean, fadeOut: boolean) {
  const timeline = gsap.timeline();
  if (fadeIn) {
    timeline.fromTo(section, { opacity: 0 }, { opacity: 1, duration: fade, ease: 'none' }, 0);
  }
  if (fadeOut) {
    timeline.to(section, { opacity: 0, duration: fade, ease: 'none' }, 1 - fade);
  }
  timeline.set({}, {}, 1);
  return timeline;
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
  const visibleRef = useRef(0);
  const listenersRef = useRef(new Set<(progress: number) => void>());
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;
      const section = sectionRef.current;
      if (!section) return;

      const notify = (progress: number) => {
        listenersRef.current.forEach((listener) => listener(progress));
      };

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_QUERY, () => {
        const fade = Math.min(FADE_SHARE, FADE_SHARE / span);
        visibleRef.current = fadeIn ? fade : 0;
        triggerRef.current = ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => '+=' + window.innerHeight * span,
          pin: true,
          scrub: true,
          animation: buildFadeTimeline(section, fade, fadeIn, fadeOut),
          onUpdate: (self) => notify(self.progress),
        });
        return () => {
          triggerRef.current = null;
        };
      });

      mm.add(MOBILE_QUERY, () => {
        visibleRef.current = 0;
        const range = section.offsetHeight + window.innerHeight;
        const fade = Math.min(FADE_SHARE, (FADE_SHARE * window.innerHeight) / range);
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          animation: buildFadeTimeline(section, fade, fadeIn, fadeOut),
          onUpdate: (self) => notify(self.progress),
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion, span, fadeIn, fadeOut] },
  );

  useEffect(() => {
    return registerChapterSeeker(id, () => {
      const trigger = triggerRef.current;
      const section = sectionRef.current;
      if (trigger) {
        window.scrollTo({
          top: trigger.start + (trigger.end - trigger.start) * visibleRef.current,
          behavior: reducedMotion ? 'auto' : 'smooth',
        });
      } else if (section) {
        section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  }, [id, reducedMotion]);

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
