import { Chapter } from '../components/Chapter';
import { CLIMAX } from '../data/content';
import './ClimaxSection.css';

export function ClimaxSection() {
  return (
    <Chapter id="climax" label="The climax" className="climax-section">
      <div className="climax-section__inner">
        <div className="climax-section__main">
          <h2 className="climax-section__title">{CLIMAX.title}</h2>
          <span className="climax-section__rule" aria-hidden="true" />
          <p className="climax-section__text">{CLIMAX.text}</p>
          <div className="climax-section__meta">
            {CLIMAX.meta.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <p className="climax-section__footer">{CLIMAX.footer}</p>
      </div>
    </Chapter>
  );
}
