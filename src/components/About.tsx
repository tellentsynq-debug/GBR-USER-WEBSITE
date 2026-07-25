import { Shield, Target, Heart, Award } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting partnerships through transparent communication and dependable service delivery."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Leveraging cutting-edge AI technology to revolutionize workforce management and talent acquisition."
    },
    {
      icon: Heart,
      title: "People First",
      description: "Putting talent and client success at the center of everything we do, creating meaningful connections."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional results through rigorous quality standards and continuous improvement."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle circuit-bg animate-fade-in scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Trusted Partner in <span className="bg-gradient-primary bg-clip-text text-transparent">Talent Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We connect exceptional talent with outstanding opportunities. The right people in the right roles transform businesses and careers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between exceptional talent and innovative companies, 
              GIG FORCE Management Group has emerged as a leader in AI-powered workforce solutions. 
              We understand that in today's rapidly evolving business landscape, traditional staffing 
              approaches simply aren't enough.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform combines the power of artificial intelligence with deep human insights to 
              create meaningful connections that drive success for both talent and organizations. 
              We're not just a staffing agency – we're your strategic partner in building the future workforce.
            </p>
            
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground">
                "Empowering talent and transforming organizations through innovative workforce solutions 
                that create lasting value and meaningful career opportunities."
              </p>
            </div>
          </div>

          {/* Animated Stats Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Placements Made</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cyan mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-teal mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-float"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="service-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                <value.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};