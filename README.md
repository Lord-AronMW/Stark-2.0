# Iron Man: The Legacy of Tony Stark

## Description

A tribute to Tony Stark and his armor, built with React, TypeScript, Vite and GSAP.

Each page fades out as you scroll, and the next page fades in. The armor suits change as you scroll through them. The team members in "He could not do it alone" come up one at a time. On the reactor page, the arc reactor rises from the bottom of the screen and zooms in.

On screens narrower than 900px, the pages scroll normally instead of pinning.

## Getting Started

### Dependencies

- Node.js 18 or newer (download from https://nodejs.org)
- npm, which comes with Node.js
- Windows 10 or 11, macOS, or Linux
- A recent version of Chrome, Edge, or Firefox

### Installing

1. Download the project folder and open a terminal inside it.
2. Install the packages:

   ```bash
   npm install
   npm install gsap @gsap/react
   ```

3. Add the images listed in the Images section below to `public/images/`.

### Executing program

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open the address shown in the terminal, usually `http://localhost:5173`.
3. Stop the server with `Ctrl + C`.

## Images

Put these files in `public/images/`. Until they are added, the pages show empty image areas.

| File | Used on |
|---|---|
| `hero/iron-man-hero.jpg` | Hero |
| `before/tony-workshop.jpg` | Before the armor |
| `beginning/forge.jpg` | The beginning |
| `armor/mk1.jpg` | Armor evolution |
| `armor/mk3.jpg` | Armor evolution |
| `armor/mk7.jpg` | Armor evolution |
| `armor/mk42.jpg` | Armor evolution |
| `armor/mk-50.jpg` | Armor evolution |
| `armor/mk85.jpg` | Armor evolution |
| `behind/family.jpg` | Behind the armor |
| `nav/arc-reactor.png` | Top bar logo |

The arc reactor on the reactor page is drawn in code and does not need an image.

## Editing the text

- Page text is in `src/data/content.ts`.
- Suit names and descriptions are in `src/data/armor.ts`.
- Team members are in `src/data/team.ts`.

Check the quotes and dates against the films before you publish the site.

## Project structure

```
index.html                 Page title and fonts
public/images/             Image files
src/
  App.tsx                  Page order
  main.tsx                 Entry point
  components/              Shared parts: page wrapper, stage, top bar, reactor drawing
  data/                    Text, suit data, team data
  hooks/                   Reduced motion setting
  lib/                     GSAP setup and page scroll helpers
  sections/                One file per page
  styles/                  Colors, fonts, spacing, base styles
```

## Help

- **The page is blank.** Press `F12`, open the Console tab, and read the first red line. A missing package or a file in the wrong folder is the usual cause.
- **`Missing script: "dev"` appears.** You are in a folder that does not have the Vite project files. Run the command from the folder that contains `package.json` with the Vite scripts.
- **Empty spaces where the photos should be.** The image files are not in `public/images/` yet, or they have different names. Check the Images table above.
- **Pages are cut off on a short window.** Make the browser window taller, or shorten the text in the matching file in `src/sections/`.
- **Scrolling feels slow on an older computer.** Close other browser tabs and try again.
- To see every available command, run `npm run`.

## License

This is a personal project. It is not affiliated with, endorsed by, or connected to Marvel Studios, Marvel Entertainment, or The Walt Disney Company. Iron Man, Tony Stark, and related names and marks belong to their owners.
