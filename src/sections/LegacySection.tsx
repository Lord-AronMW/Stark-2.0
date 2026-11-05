import { Chapter } from '../components/Chapter';
import { LEGACY } from '../data/content';
import { goToChapter } from '../lib/chapterContext';
import './LegacySection.css';

export function LegacySection() {
  return (
    <Chapter id="legacy" label="The legacy" className="legacy-section" fadeOut={false}>
      <div className="legacy-section__inner">
        <div className="legacy-section__main">
          <h2 className="legacy-section__title">
            <span>{LEGACY.title[0]}</span>
            <span>{LEGACY.title[1]}</span>
          </h2>
          <p className="legacy-section__name">{LEGACY.name}</p>
        </div>

        <footer className="legacy-section__footer">
          <p className="legacy-section__footer-title">{LEGACY.footerTitle}</p>
        </footer>
      </div>
    </Chapter>
  );
}
