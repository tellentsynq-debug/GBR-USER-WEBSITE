import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8929be1e-2b42-4cbb-8bd6-b05bb54b4da7.png" 
              alt="GIG FORCE Management Group" 
              className="h-24 md:h-28 lg:h-32 w-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-secondary transition-colors">Home</Link>
            <Link to="/#about" className="text-foreground hover:text-secondary transition-colors">About Us</Link>
            <Link to="/#services" className="text-foreground hover:text-secondary transition-colors">Services</Link>
            <Link to="/#how-it-works" className="text-foreground hover:text-secondary transition-colors">How It Works</Link>
            <Link to="/candidates" className="text-foreground hover:text-secondary transition-colors">Candidates</Link>
            <Link to="/employers" className="text-foreground hover:text-secondary transition-colors">Employers</Link>
            <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="btn-outline">
              <Link to="/contact" aria-label="Post a Job - Contact Us">Post a Job</Link>
            </Button>
            <Button asChild className="btn-hero">
              <Link to="/contact" aria-label="Find Talent - Contact Us">Find Talent</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/#services" 
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/#how-it-works" 
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button asChild variant="outline" className="w-full btn-outline">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Post a Job</Link>
                </Button>
                <Button asChild className="w-full btn-hero">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Find Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};