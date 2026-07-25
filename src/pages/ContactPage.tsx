import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { Contact } from '@/components/Contact';

const ContactPage = () => {
  document.title = 'Contact | GIG FORCE Management Group';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32">
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ContactPage;
