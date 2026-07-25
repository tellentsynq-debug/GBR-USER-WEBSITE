import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero circuit-bg flex items-center animate-fade-in pt-28 md:pt-32 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-float uppercase">
            GIG FORCE Management Group
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Redefining People & Culture
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We connect exceptional talent with outstanding opportunities, building bridges between 
            ambitious professionals and forward-thinking companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <Link to="/contact" aria-label="Find Talent - Contact Us">
                Find Talent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-secondary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">2000+</div>
            <div className="text-muted-foreground">Candidates Placed</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Building className="w-12 h-12 text-secondary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Partner Companies</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-secondary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">6+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};