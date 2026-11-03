import './styles/global.css';

import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './sections/HeroSection';
import { BeforeSection } from './sections/BeforeSection';
import { BeginningSection } from './sections/BeginningSection';
import { ArmorSection } from './sections/ArmorSection';
import { AvengerSection } from './sections/AvengerSection';
import { BehindSection } from './sections/BehindSection';
import { ClimaxSection } from './sections/ClimaxSection';
import { ReactorSection } from './sections/ReactorSection';
import { LegacySection } from './sections/LegacySection';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <BeforeSection />
        <BeginningSection />
        <ArmorSection />
        <AvengerSection />
        <BehindSection />
        <ClimaxSection />
        <ReactorSection />
        <LegacySection />
      </main>
    </>
  );
}
