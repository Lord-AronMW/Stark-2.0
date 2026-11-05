import { Chapter } from '../components/Chapter';
import { HERO } from '../data/content';
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

        <div className="hero-section__body">
          <h1 className="hero-section__title">{HERO.title}</h1>
          <p className="hero-section__tagline">{HERO.tagline}</p>
          <p className="hero-section__copy">{HERO.body}</p>
        </div>
      </div>
    </Chapter>
  );
}
