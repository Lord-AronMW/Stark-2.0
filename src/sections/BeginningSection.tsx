import { Chapter } from '../components/Chapter';
import { BEGINNING } from '../data/content';
import './BeginningSection.css';

export function BeginningSection() {
  return (
    <Chapter id="beginning" label="The beginning" className="beginning-section">
      <div className="beginning-section__inner">
        <div className="beginning-section__top">
          <div className="beginning-section__heading">
            <p className="beginning-section__eyebrow">{BEGINNING.eyebrow}</p>
            <h2 className="beginning-section__title">
              <span>{BEGINNING.title[0]}</span>
              <span>{BEGINNING.title[1]}</span>
            </h2>
          </div>
          <div className="beginning-section__copy">
            <p>{BEGINNING.intro}</p>
            <p>{BEGINNING.secondary}</p>
          </div>
        </div>

        <figure className="beginning-section__band">
          <img
            src={BEGINNING.image}
            alt={BEGINNING.imageAlt}
            className="beginning-section__img"
            loading="lazy"
            draggable="false"
          />
          <div className="beginning-section__captions">
            <span>{BEGINNING.captions[0]}</span>
            <span>{BEGINNING.captions[1]}</span>
          </div>
        </figure>

        <p className="beginning-section__quote">{BEGINNING.quote}</p>
      </div>
    </Chapter>
  );
}
