import { CheckCircle, TrendingUp, Clock, Shield, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ForEmployers = () => {
  const benefits = [
    {
      icon: Clock,
      title: "70% Faster Hiring",
      description: "AI-powered matching reduces time-to-hire significantly"
    },
    {
      icon: TrendingUp,
      title: "98% Match Success Rate",
      description: "Our algorithms ensure perfect candidate-role alignment"
    },
    {
      icon: Shield,
      title: "Risk-Free Guarantee",
      description: "30-day replacement guarantee on all placements"
    },
    {
      icon: Star,
      title: "Premium Talent Pool",
      description: "Access to pre-vetted, top-tier professionals"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow Inc.",
      content: "GIG FORCE transformed our hiring process. We filled 15 critical positions in just 3 weeks.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief People Officer",
      company: "InnovateNow",
      content: "The quality of candidates and speed of delivery exceeded our expectations completely.",
      avatar: "MR"
    }
  ];

  return (
    <section id="employers" className="py-20 bg-background circuit-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            For <span className="bg-gradient-primary bg-clip-text text-transparent">Employers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scale your team with confidence. Access top talent faster than ever with our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Leading Companies Choose GIG FORCE
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From startups to Fortune 500 companies, organizations trust us to deliver 
                exceptional talent that drives business growth and innovation.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Start Hiring Today
              </Button>
              <Button variant="outline" className="btn-outline-glow">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-subtle rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Enterprise Dashboard</h4>
                  <p className="text-muted-foreground">Real-time hiring analytics and insights</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Active Positions</span>
                      <span className="text-primary font-bold">24</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Candidates Reviewed</span>
                      <span className="text-secondary font-bold">156</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-to-r from-secondary to-tech-cyan h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Placements Made</span>
                      <span className="text-tech-teal font-bold">18</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-to-r from-tech-teal to-primary h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-xl p-6 shadow-card hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};