import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ARMOR } from '../data/content';
import { ARMOR_SUITS } from '../data/armor';
import { gsap } from '../lib/gsap';
import { useChapter } from '../lib/chapterContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Chapter } from '../components/Chapter';
import './ArmorSection.css';

const SUIT_COUNT = ARMOR_SUITS.length;
const FADE_OUT = 0.7;
const FADE_IN = 0.9;
const TRAVEL = 22;
const RESTORE = 0.6;

function ArmorBody() {
  const chapter = useChapter();
  const stageRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const shownRef = useRef(0);
  const [shown, setShown] = useState(0);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    shownRef.current = shown;
    const stage = stageRef.current;
    if (!stage) return;
    gsap.fromTo(
      stage,
      { opacity: 0, y: reducedMotion ? 0 : TRAVEL },
      { opacity: 1, y: 0, duration: reducedMotion ? 0.6 : FADE_IN, ease: 'power3.out' },
    );
  }, [shown, reducedMotion]);

  const goTo = (index: number) => {
    if (index === targetRef.current) return;
    targetRef.current = index;
    const stage = stageRef.current;
    if (!stage) {
      setShown(index);
      return;
    }
    gsap.killTweensOf(stage);
    gsap.to(stage, {
      opacity: 0,
      y: reducedMotion ? 0 : -TRAVEL,
      duration: reducedMotion ? 0.6 : FADE_OUT,
      ease: 'power2.inOut',
      onComplete: () => {
        const next = targetRef.current;
        if (next === shownRef.current) {
          gsap.to(stage, { opacity: 1, y: 0, duration: RESTORE, ease: 'power2.out' });
        } else {
          setShown(next);
        }
      },
    });
  };

  const goToRef = useRef(goTo);
  goToRef.current = goTo;

  useEffect(() => {
    if (!chapter) return;
    return chapter.subscribe((progress) => {
      goToRef.current(Math.min(SUIT_COUNT - 1, Math.floor(progress * SUIT_COUNT)));
    });
  }, [chapter]);

  const select = (index: number) => {
    if (chapter?.seek((index + 0.5) / SUIT_COUNT)) return;
    goTo(index);
  };

  const suit = ARMOR_SUITS[shown];

  return (
    <div className="armor-section__inner">
      <header className="armor-section__header">
        <div>
          <p className="armor-section__eyebrow">{ARMOR.eyebrow}</p>
          <h2 className="armor-section__title">{ARMOR.title}</h2>
        </div>
      </header>

      <nav className="armor-section__selector" aria-label="Armor suits">
        <ul>
          {ARMOR_SUITS.map((item, index) => {
            const active = index === shown;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`armor-section__option${active ? ' is-active' : ''}`}
                  aria-pressed={active}
                  onClick={() => select(index)}
                >
                  <span className="armor-section__option-designation">{item.designation}</span>
                  <span className="armor-section__option-tagline">{item.tagline}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="armor-section__stage" ref={stageRef} aria-live="polite">
        <div className="armor-section__info">
          <p className="armor-section__film">
            {suit.film} / {suit.year}
          </p>
          <h3 className="armor-section__designation">{suit.designation}</h3>
          <p className="armor-section__tagline">{suit.tagline}</p>
          {suit.description && <p className="armor-section__description">{suit.description}</p>}
        </div>

        <div className="armor-section__figure">
          <img
            key={suit.id}
            src={suit.image}
            alt={`${suit.designation}, ${suit.tagline}`}
            className="armor-section__img"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export function ArmorSection() {
  return (
    <Chapter id="armor" label="Armor evolution" className="armor-section" span={SUIT_COUNT}>
      <ArmorBody />
    </Chapter>
  );
}
