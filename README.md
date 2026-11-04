# Iron Man: The Legacy of Tony Stark

A cinematic fan tribute to Tony Stark.

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npm install gsap @gsap/react
npm run dev
```

Open the address shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
index.html                 Page title and Google Fonts
public/images/             Image files 
src/
  App.tsx                  Page order and top bar
  main.tsx                 App entry point
  components/
    Chapter.tsx            Shared page wrapper: pinning and fades
    SiteHeader.tsx         Top bar and chapter menu
    ArcReactor.tsx         Arc reactor drawing
  data/
    content.ts             All page text
    armor.ts               The six armor suits
    team.ts                Avenger roster
  hooks/
    useReducedMotion.ts    Reads the reduced motion setting
  lib/
    gsap.ts                GSAP setup
    chapterContext.ts      Passes scroll progress to page content
  sections/                One file per page
  styles/
    tokens.css             Colors, fonts, sizes, timings
    global.css             Base styles
```

## Page order

Hero, Before the armor, The beginning, Armor evolution, He could not do it alone, Behind the armor, I am Iron Man, Not the suit the heart, The legacy.

## Images

Add these files to `public/images/`. Until they are added, the pages show empty image areas.

| File | Used on |
|---|---|
| `hero/iron-man-hero.jpg` | Hero |
| `before/tony-workshop.jpg` | Before the armor |
| `beginning/forge.jpg` | The beginning |
| `armor/mk-i.jpg` | Armor evolution |
| `armor/mk-iii.jpg` | Armor evolution |
| `armor/mk-vii.jpg` | Armor evolution |
| `armor/mk-xlii.jpg` | Armor evolution |
| `armor/mk-l.jpg` | Armor evolution |
| `armor/mk-lxxxv.jpg` | Armor evolution |
| `behind/family-lake.jpg` | Behind the armor |

The arc reactor is drawn in code and needs no image.

## Editing text

All page text is in `src/data/content.ts`. Suit names and descriptions are in `src/data/armor.ts`. Team members are in `src/data/team.ts`.

## Known limitations

- Pinned pages assume a viewport of at least 900px wide. On smaller screens they scroll normally instead.
- Very short desktop windows, such as 768px tall, may cut off the bottom of pinned pages. Shorten the copy or reduce the title sizes in the matching section CSS if this happens.
