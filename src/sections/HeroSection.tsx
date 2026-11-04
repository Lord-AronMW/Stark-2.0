import { Chapter } from '../components/Chapter';
import { HERO } from '../data/content';
import { goToChapter } from '../lib/chapterContext';
import './HeroSection.css';

export function HeroSection() {
  return (
    <Chapter id="hero" label="Hero" fadeIn={false} fadeOut>
      <div className="hero-section__bg" aria-hidden="true">
        <img
          src={HERO.image}
          alt=""
          className="hero-section__img"
          fetchPriority="high"
          draggable="false"
        />
        <div className="hero-section__overlay" />
      </div>

      <div className="hero-section__inner">
        <div className="hero-section__top">
          <p className="hero-section__eyebrow">{HERO.eyebrow}</p>
          <p className="hero-section__sub">{HERO.subtitle}</p>
        </div>

        <div className="hero-section__body">
          <h1 className="hero-section__title">{HERO.title}</h1>
          <p className="hero-section__tagline">{HERO.tagline}</p>
          <p className="hero-section__copy">{HERO.body}</p>
          <a
            href="#before"
            className="hero-section__cta"
            onClick={(event) => {
              event.preventDefault();
              goToChapter('before');
            }}
          >
            {HERO.cta} ↓
          </a>
        </div>

        <nav className="hero-section__chapters" aria-label="Chapter numbers">
          <ol>
            {['01', '02', '03', '04', '05', '06', '07', '08'].map((n) => (
              <li key={n}>
                <span className="hero-section__chapter-num">{n}</span>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </Chapter>
  );
}
