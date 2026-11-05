import { Chapter } from '../components/Chapter';
import { BEHIND } from '../data/content';
import './BehindSection.css';

export function BehindSection() {
  return (
    <Chapter id="behind" label="Behind the armor" className="behind-section">
      <div className="behind-section__inner">
        <div className="behind-section__top">
          <div className="behind-section__heading">
            <p className="behind-section__eyebrow">{BEHIND.eyebrow}</p>
            <h2 className="behind-section__title">
              <span>{BEHIND.title[0]}</span>
              <span>{BEHIND.title[1]}</span>
            </h2>
          </div>
          <div className="behind-section__copy">
            {BEHIND.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <figure className="behind-section__figure">
          <img
            src={BEHIND.image}
            alt={BEHIND.imageAlt}
            className="behind-section__img"
            loading="lazy"
            draggable="false"
          />
          <figcaption className="behind-section__caption">
            <span>{BEHIND.captionRight}</span>
          </figcaption>
        </figure>

        <ul className="behind-section__people">
          {BEHIND.people.map((person) => (
            <li key={person.name} className="behind-section__person">
              <h3 className="behind-section__name">{person.name}</h3>
              <p className="behind-section__tagline">{person.tagline}</p>
              <p className="behind-section__text">{person.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  );
}
