import { Rocket, DollarSign, Briefcase, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ForTalent = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Access high-paying opportunities with transparent salary ranges",
      stat: "30% higher than market average"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Join companies that invest in your professional development",
      stat: "85% promotion rate within 2 years"
    },
    {
      icon: Briefcase,
      title: "Flexible Work Options",
      description: "Remote, hybrid, and flexible schedule opportunities",
      stat: "95% flexible work options"
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Continuous learning and certification opportunities",
      stat: "$5K annual learning budget"
    }
  ];

  const successStories = [
    {
      name: "Alex Thompson",
      role: "Software Engineer → Senior Architect",
      company: "Leading Tech Firm",
      story: "GIG FORCE helped me transition from a junior role to senior architect in just 18 months.",
      image: "AT",
      salaryIncrease: "60%"
    },
    {
      name: "Maria Garcia",
      role: "Marketing Specialist → Director",
      company: "Fortune 500 Company",
      story: "Found my dream role at a Fortune 500 company with amazing benefits and growth potential.",
      image: "MG",
      salaryIncrease: "45%"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Build a comprehensive profile showcasing your skills and experience"
    },
    {
      step: 2,
      title: "AI Matching",
      description: "Our AI finds opportunities that perfectly match your career goals"
    },
    {
      step: 3,
      title: "Interview Prep",
      description: "Get personalized coaching and interview preparation support"
    },
    {
      step: 4,
      title: "Land Your Dream Job",
      description: "Start your new role with ongoing career support and guidance"
    }
  ];

  return (
    <section id="talent" className="py-20 bg-gradient-subtle circuit-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            For <span className="bg-gradient-primary bg-clip-text text-transparent">Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accelerate your career with opportunities that match your skills, ambitions, and values.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="service-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
              <div className="text-primary font-semibold text-sm">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process gets you from application to your dream job in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-x-8 -translate-y-0.5 z-0">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-secondary rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-hero">
              <Link to="/contact">Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={story.name}
              className="bg-card rounded-xl p-8 shadow-card hover-lift relative overflow-hidden"
            >
              {/* Success Badge */}
              <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                +{story.salaryIncrease} salary
              </div>

              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {story.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-lg">{story.name}</h4>
                  <div className="text-primary font-medium">{story.role}</div>
                  <div className="text-muted-foreground text-sm">{story.company}</div>
                </div>
              </div>

              <p className="text-muted-foreground italic mb-4">"{story.story}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-secondary fill-current" />
                  <span className="text-sm text-muted-foreground">Success Story</span>
                </div>
                <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary">
                  <Link to="/contact">Read More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              </div>

              {/* Background Pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-16 translate-y-16"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Career?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with GIG FORCE. 
              Your dream job is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/contact">Join Our Talent Network</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline-glow">
                <Link to="/contact">Browse Open Roles</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};