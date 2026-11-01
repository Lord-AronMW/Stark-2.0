import './styles/global.css';

import { SiteHeader } from './components/SiteHeader';
import { AvengerSection } from './sections/AvengerSection';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <AvengerSection fadeIn={false} fadeOut={false} />
      </main>
    </>
  );
}
