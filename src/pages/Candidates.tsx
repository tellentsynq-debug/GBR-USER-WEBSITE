import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { ForTalent } from '@/components/ForTalent';

const Candidates = () => {
  // Basic SEO
  document.title = 'Candidates | GIG FORCE Management Group';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <ForTalent />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Candidates;
