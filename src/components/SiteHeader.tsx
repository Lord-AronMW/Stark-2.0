import { useState } from 'react';
import { NAV_CHAPTERS, SITE } from '../data/content';
import './SiteHeader.css';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#hero" className="site-header__brand">
          <svg className="site-header__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          <span className="site-header__name">{SITE.name}</span>
        </a>

        <nav className="site-header__nav" aria-label="Chapters">
          <ul>
            {NAV_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  <span className="site-header__number">{chapter.number}</span>
                  {chapter.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close chapter menu' : 'Open chapter menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`site-header__toggle-bar${open ? ' is-open' : ''}`} aria-hidden="true" />
          <span className={`site-header__toggle-bar${open ? ' is-open' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <nav
        id="site-menu"
        className={`site-header__menu${open ? ' is-open' : ''}`}
        aria-label="Chapter menu"
      >
        <ul>
          {NAV_CHAPTERS.map((chapter) => (
            <li key={chapter.id}>
              <a href={`#${chapter.id}`} onClick={() => setOpen(false)}>
                <span className="site-header__number">{chapter.number}</span>
                {chapter.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
