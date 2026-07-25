import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Search, Star, Users, Zap, Shield, Send, CheckCircle, Phone, User, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

export const FindTalent = () => {
  const { toast } = useToast();
  const [searchForm, setSearchForm] = useState({
    skills: '',
    location: '',
    experience: '',
    jobType: 'any',
    company: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Request Submitted!",
      description: "We'll find matching candidates and contact you within 24 hours.",
    });
    setSearchForm({
      skills: '',
      location: '',
      experience: '',
      jobType: 'any',
      company: '',
      email: '',
      phone: '',
      requirements: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  const talentCategories = [
    {
      icon: Code,
      title: "Software Developers",
      count: "15,000+",
      skills: ["React", "Node.js", "Python", "Java", "TypeScript"],
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Business Professionals",
      count: "12,000+",
      skills: ["Project Management", "Sales", "Marketing", "Finance"],
      color: "secondary"
    },
    {
      icon: GraduationCap,
      title: "Specialists",
      count: "8,000+",
      skills: ["Data Science", "AI/ML", "Cybersecurity", "DevOps"],
      color: "tech-cyan"
    },
    {
      icon: User,
      title: "Creative Professionals",
      count: "5,000+",
      skills: ["UI/UX Design", "Content Creation", "Branding"],
      color: "tech-teal"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Pre-Vetted Talent",
      description: "All professionals are thoroughly screened and verified"
    },
    {
      icon: Zap,
      title: "Quick Matching",
      description: "Get matched candidates within 24 hours"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "30-day replacement guarantee on all placements"
    },
    {
      icon: Star,
      title: "Top 5% Talent",
      description: "Access to the top tier of professionals in each field"
    }
  ];

  return (
    <section id="find-talent" className="py-20 bg-gradient-subtle circuit-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find <span className="bg-gradient-primary bg-clip-text text-transparent">Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our curated network of 50,000+ pre-vetted professionals. 
            From freelancers to full-time employees, find the perfect match for your needs.
          </p>
        </div>

        {/* Talent Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {talentCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-card hover-lift border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color}/10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-6 h-6 text-${category.color}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{category.title}</h3>
              <div className={`text-2xl font-bold text-${category.color} mb-3`}>{category.count}</div>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Search Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center mb-6">
              <Search className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Find Your Ideal Candidate</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-foreground mb-2">
                  Required Skills *
                </label>
                <Input
                  id="skills"
                  name="skills"
                  type="text"
                  required
                  value={searchForm.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, Python, Project Management"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                    Location Preference
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    value={searchForm.location}
                    onChange={handleChange}
                    placeholder="Remote / Toronto, ON"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={searchForm.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Any Level</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior (5-8 years)</option>
                    <option value="lead">Lead/Principal (8+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-foreground mb-2">
                  Employment Type *
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  required
                  value={searchForm.jobType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="any">Any Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                  Additional Requirements
                </label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={searchForm.requirements}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe any specific requirements, certifications, or preferences..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={searchForm.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={searchForm.phone}
                    onChange={handleChange}
                    placeholder="+1-905-364-4747"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Contact Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={searchForm.email}
                  onChange={handleChange}
                  placeholder="hiring@company.com"
                />
              </div>

              <Button type="submit" className="w-full btn-hero">
                Find Matching Candidates
                <Search className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h4 className="text-xl font-bold text-foreground mb-6">Why Our Talent Network?</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{benefit.title}</h5>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-6">Our Network Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-sm opacity-90">Active Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-90">Match Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24hrs</div>
                  <div className="text-sm opacity-90">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Companies Served</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-subtle rounded-xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-4">Need Immediate Assistance?</h4>
              <p className="text-muted-foreground mb-6">
                Speak directly with our talent specialists for urgent hiring needs or complex requirements.
              </p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Ontario: +1-905-364-4747</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Alberta: +1-587-430-3038</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4 text-primary" />
                  <span className="text-foreground">support@gigforcemanagement.ca</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full btn-outline-glow">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};