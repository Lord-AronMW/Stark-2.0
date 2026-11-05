import { useState } from 'react';
import { NAV_CHAPTERS } from '../data/content';
import { goToChapter } from '../lib/chapterContext';
import './SiteHeader.css';

const FIRST_CHAPTER_ID = 'hero';
const SPLIT_INDEX = Math.ceil(NAV_CHAPTERS.length / 2);
const LEFT_CHAPTERS = NAV_CHAPTERS.slice(0, SPLIT_INDEX);
const RIGHT_CHAPTERS = NAV_CHAPTERS.slice(SPLIT_INDEX);

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const jump = (id: string) => {
    setOpen(false);
    goToChapter(id);
  };

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <nav className="site-header__nav site-header__nav--left" aria-label="Chapters">
          <ul>
            {LEFT_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    jump(chapter.id);
                  }}
                >
                  {chapter.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`#${FIRST_CHAPTER_ID}`}
          className="site-header__logo"
          aria-label="Back to the start"
          onClick={(event) => {
            event.preventDefault();
            jump(FIRST_CHAPTER_ID);
          }}
        >
          <img
            src="/public/images/arc-reactor.jpg"
            alt=""
            className="site-header__logo-img"
            draggable="false"
            style={{ width: 45, height: 45,}}
          />
        </a>

        <nav className="site-header__nav site-header__nav--right" aria-label="Chapters">
          <ul>
            {RIGHT_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    jump(chapter.id);
                  }}
                >
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
              <a
                href={`#${chapter.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  jump(chapter.id);
                }}
              >
                {chapter.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
