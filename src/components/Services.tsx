import { Search, Users, Briefcase, UserCheck, Building2, CreditCard, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions for permanent placements across all industries and levels.",
      features: ["Executive Search", "Volume Hiring", "Campus Recruitment"]
    },
    {
      icon: Users,
      title: "Temp & Contract",
      description: "Flexible staffing solutions for temporary, contract, and project-based workforce needs.",
      features: ["Temporary Staffing", "Contract-to-Hire", "Project Teams"]
    },
    {
      icon: Briefcase,
      title: "RPO Services",
      description: "Complete recruitment process outsourcing to optimize your hiring efficiency and quality.",
      features: ["Process Optimization", "Technology Integration", "Scalable Solutions"]
    },
    {
      icon: UserCheck,
      title: "HR Consulting",
      description: "Strategic HR advisory services to enhance your people management and organizational effectiveness.",
      features: ["Policy Development", "Performance Management", "Training & Development"]
    },
    {
      icon: Building2,
      title: "Executive Search",
      description: "Specialized search services for senior leadership and C-suite positions across industries.",
      features: ["Leadership Assessment", "Market Mapping", "Succession Planning"]
    },
    {
      icon: CreditCard,
      title: "Payroll Services",
      description: "Comprehensive payroll management solutions to streamline your HR operations.",
      features: ["Payroll Processing", "Tax Compliance", "Benefits Administration"]
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline hiring workflows and boost productivity.",
      features: ["AI-Powered Sourcing", "Workflow Automation", "5+ Years Experience"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative circuit-bg scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive staffing solutions designed to meet your unique business needs. 
            From talent acquisition to HR consulting, we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="outline" className="btn-outline w-full group-hover:bg-secondary group-hover:text-secondary-foreground">
                <Link to="/contact" aria-label="Learn more - Contact us">Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};