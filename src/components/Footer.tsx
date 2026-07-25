import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <p className="text-muted-foreground mb-4 max-w-md">
              Redefining People & Culture. We connect exceptional talent with outstanding opportunities, 
              building bridges between ambitious professionals and forward-thinking companies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Ontario: +1-905-364-4747</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Alberta: +1-587-430-3038</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@gigforcemanagement.ca</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Ontario: 2506-10 Park Lawn Rd, Etobicoke, ON M8V 0H9</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Alberta: PO BOX # 409, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-muted-foreground hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/#about" className="text-muted-foreground hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-muted-foreground hover:text-secondary transition-colors">Services</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Talent Acquisition</span></li>
              <li><span className="text-muted-foreground">Temp & Contract</span></li>
              <li><span className="text-muted-foreground">RPO Services</span></li>
              <li><span className="text-muted-foreground">HR Consulting</span></li>
              <li><span className="text-muted-foreground">Executive Search</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Gig Force Management Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-muted-foreground hover:text-secondary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};