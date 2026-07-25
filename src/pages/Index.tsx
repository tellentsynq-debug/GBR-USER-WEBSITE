import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';
import { AppBanner } from '@/components/AppBanner';
import { HowItWorks } from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Header />
      <Hero />
      <AppBanner />
      <HowItWorks />
      <About />
      <Services />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
