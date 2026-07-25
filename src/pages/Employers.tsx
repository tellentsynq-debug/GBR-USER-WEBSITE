import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { ForEmployers } from '@/components/ForEmployers';

const Employers = () => {
  document.title = 'Employers | GIG FORCE Management Group';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <ForEmployers />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Employers;
