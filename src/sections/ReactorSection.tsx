import { useEffect, useLayoutEffect, useRef } from 'react';
import { REACTOR } from '../data/content';
import { gsap } from '../lib/gsap';
import { useChapter } from '../lib/chapterContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Chapter } from '../components/Chapter';
import { ArcReactor } from '../components/ArcReactor';
import './ReactorSection.css';

const SPAN = 2;
const RISE_END = 0.5;
const RISE_DISTANCE = 0.75;
const ZOOM_SCALE = 14;

function ReactorBody() {
  const chapter = useChapter();
  const innerRef = useRef<HTMLDivElement>(null);
  const reactorRef = useRef<HTMLDivElement>(null);
  const fadeItemsRef = useRef<HTMLElement[]>([]);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const reactor = reactorRef.current;
    const inner = innerRef.current;
    if (inner) {
      fadeItemsRef.current = Array.from(inner.querySelectorAll<HTMLElement>('.reactor-section__fade'));
    }
    if (!reactor || reducedMotion) return;
    gsap.set(reactor, { y: window.innerHeight * RISE_DISTANCE, scale: 1 });
  }, [reducedMotion]);

  useEffect(() => {
    if (!chapter || reducedMotion) return;
    return chapter.subscribe((progress) => {
      const reactor = reactorRef.current;
      if (!reactor) return;

      const distance = window.innerHeight * RISE_DISTANCE;
      const rise = Math.min(progress / RISE_END, 1);
      const eased = 1 - Math.pow(1 - rise, 3);
      const zoom = Math.max(0, (progress - RISE_END) / (1 - RISE_END));

      gsap.set(reactor, {
        y: distance * (1 - eased),
        scale: 1 + ZOOM_SCALE * zoom * zoom,
      });
      gsap.set(fadeItemsRef.current, {
        opacity: 1 - Math.min(1, zoom * 2),
      });
    });
  }, [chapter, reducedMotion]);

  return (
    <div className="reactor-section__inner" ref={innerRef}>
      <div className="reactor-section__top reactor-section__fade">
        <div>
          <p className="reactor-section__eyebrow">{REACTOR.eyebrow}</p>
          <h2 className="reactor-section__title">
            <span>{REACTOR.title[0]}</span>
            <span>{REACTOR.title[1]}</span>
          </h2>
        </div>
        <p className="reactor-section__intro">{REACTOR.intro}</p>
      </div>

      <div className="reactor-section__stage">
        <blockquote className="reactor-section__quote reactor-section__fade">
          <p className="reactor-section__quote-text">{REACTOR.quote}</p>
          <cite className="reactor-section__quote-cite">{REACTOR.quoteCaption}</cite>
        </blockquote>

        <div className="reactor-section__reactor" ref={reactorRef}>
          <ArcReactor />
        </div>

        <aside className="reactor-section__artifact reactor-section__fade">
          <p className="reactor-section__artifact-label">{REACTOR.artifact.label}</p>
          <h3 className="reactor-section__artifact-title">{REACTOR.artifact.title}</h3>
          <p className="reactor-section__artifact-text">{REACTOR.artifact.text}</p>
        </aside>
      </div>

      <div className="reactor-section__footer reactor-section__fade">
        <span>{REACTOR.reactorLabels[0]}</span>
        <span>{REACTOR.footer}</span>
        <span>{REACTOR.reactorLabels[1]}</span>
      </div>
    </div>
  );
}

export function ReactorSection() {
  return (
    <Chapter id="reactor" label="Not the suit, the heart" className="reactor-section" span={SPAN}>
      <ReactorBody />
    </Chapter>
  );
}
