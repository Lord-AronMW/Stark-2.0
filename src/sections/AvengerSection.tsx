import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AVENGER } from '../data/content';
import { TEAM_MEMBERS } from '../data/team';
import { gsap } from '../lib/gsap';
import { useChapter } from '../lib/chapterContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Chapter } from '../components/Chapter';
import './AvengerSection.css';

const STORY_STEP = TEAM_MEMBERS.length;
const STEP_COUNT = TEAM_MEMBERS.length + 1;
const FADE_OUT = 0.7;
const FADE_IN = 0.9;
const TRAVEL = 22;
const SAME_STATE_RESTORE = 0.6;

function AvengerBody() {
  const chapter = useChapter();
  const panelRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const shownRef = useRef(0);
  const [shown, setShown] = useState(0);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    shownRef.current = shown;
    const panel = panelRef.current;
    if (!panel) return;
    gsap.fromTo(
      panel,
      { opacity: 0, y: reducedMotion ? 0 : TRAVEL },
      { opacity: 1, y: 0, duration: reducedMotion ? 0.6 : FADE_IN, ease: 'power3.out' },
    );
  }, [shown, reducedMotion]);

  const goTo = (index: number) => {
    if (index === targetRef.current) return;
    targetRef.current = index;
    const panel = panelRef.current;
    if (!panel) {
      setShown(index);
      return;
    }
    gsap.killTweensOf(panel);
    gsap.to(panel, {
      opacity: 0,
      y: reducedMotion ? 0 : -TRAVEL,
      duration: reducedMotion ? 0.6 : FADE_OUT,
      ease: 'power2.inOut',
      onComplete: () => {
        const next = targetRef.current;
        if (next === shownRef.current) {
          gsap.to(panel, { opacity: 1, y: 0, duration: SAME_STATE_RESTORE, ease: 'power2.out' });
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
      goToRef.current(Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT)));
    });
  }, [chapter]);

  const select = (index: number) => {
    if (chapter?.seek((index + 0.5) / STEP_COUNT)) return;
    goTo(index);
  };

  const isStory = shown === STORY_STEP;
  const member = isStory ? null : TEAM_MEMBERS[shown];

  return (
    <div className="avenger-section__inner">
      <div className="avenger-section__top">
        <div className="avenger-section__heading">
          <p className="avenger-section__eyebrow">{AVENGER.eyebrow}</p>
          <h2 className="avenger-section__title">
            <span>{AVENGER.title[0]}</span>
            <span>{AVENGER.title[1]}</span>
          </h2>
          <p className="avenger-section__intro">{AVENGER.intro}</p>
        </div>

        <nav className="avenger-section__roster" aria-label="Team members">
          <ul>
            {TEAM_MEMBERS.map((item, index) => {
              const active = !isStory && shown === index;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`avenger-section__roster-button${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                    onClick={() => select(index)}
                  >
                    {item.surname}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="avenger-section__panel" ref={panelRef} aria-live="polite">
        {member && (
          <article className="avenger-section__member">
            <div>
              <p className="avenger-section__alias">{member.alias}</p>
              <h3 className="avenger-section__name">{member.fullName}</h3>
            </div>
            <div>
              <p className="avenger-section__relation-label">
                {member.id === 'stark' ? 'Role on the team' : 'Relationship to Stark'}
              </p>
              <ul className="avenger-section__tags">
                {member.relations.map((relation) => (
                  <li key={relation} className="avenger-section__tag">
                    {relation}
                  </li>
                ))}
              </ul>
              <p className="avenger-section__text">{member.text}</p>
            </div>
          </article>
        )}

        {isStory && (
          <div className="avenger-section__story">
            <h3 className="avenger-section__story-title">{AVENGER.heading}</h3>
            <ul className="avenger-section__story-grid">
              {AVENGER.stories.map((story) => (
                <li key={story.year} className="avenger-section__story-card">
                  <p className="avenger-section__story-year">{story.year}</p>
                  <h4 className="avenger-section__story-heading">{story.title}</h4>
                  <p className="avenger-section__story-text">{story.text}</p>
                  <p className="avenger-section__story-film">{story.film}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

interface AvengerSectionProps {
  fadeIn?: boolean;
  fadeOut?: boolean;
}

export function AvengerSection({ fadeIn = true, fadeOut = true }: AvengerSectionProps) {
  return (
    <Chapter
      id="avenger"
      label="He could not do it alone"
      className="avenger-section"
      span={STEP_COUNT}
      fadeIn={fadeIn}
      fadeOut={fadeOut}
    >
      <AvengerBody />
    </Chapter>
  );
}
