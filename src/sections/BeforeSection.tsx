import { Chapter } from '../components/Chapter';
import { BEFORE } from '../data/content';
import './BeforeSection.css';

export function BeforeSection() {
  return (
    <Chapter id="before" label="Before the armor" fadeIn fadeOut>
      <div className="before-section__inner">
        <div className="before-section__text">
          <p className="before-section__eyebrow">{BEFORE.eyebrow}</p>
          <h2 className="before-section__title">
            <span>{BEFORE.title[0]}</span>
            <span>{BEFORE.title[1]}</span>
          </h2>
          <div className="before-section__paragraphs">
            {BEFORE.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="before-section__stats">
            {BEFORE.stats.map((stat) => (
              <div key={stat.year} className="before-section__stat">
                <p className="before-section__stat-year">{stat.year}</p>
                <p className="before-section__stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="before-section__image-col">
          <figure className="before-section__figure">
            <img
              src={BEFORE.image}
              alt={BEFORE.imageAlt}
              className="before-section__img"
              loading="lazy"
              draggable="false"
            />
            <figcaption className="before-section__caption">
              <span>{BEFORE.caption}</span>
              <span>Personal / 001</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Chapter>
  );
}
