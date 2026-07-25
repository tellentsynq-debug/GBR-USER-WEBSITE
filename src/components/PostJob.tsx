import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Users, Zap, Shield, Send, CheckCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PostJob = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    location: '',
    jobType: 'full-time',
    salary: '',
    description: '',
    requirements: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Job Posted Successfully!",
      description: "We'll review your posting and contact you within 24 hours.",
    });
    setFormData({
      companyName: '',
      jobTitle: '',
      location: '',
      jobType: 'full-time',
      salary: '',
      description: '',
      requirements: '',
      contactEmail: '',
      contactPhone: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "AI-Powered Matching",
      description: "Our AI finds the perfect candidates for your role"
    },
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Fill positions 70% faster than traditional methods"
    },
    {
      icon: Shield,
      title: "Pre-Vetted Talent",
      description: "All candidates are thoroughly screened and verified"
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "30-day replacement guarantee on all placements"
    }
  ];

  return (
    <section id="post-job" className="py-20 bg-background circuit-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Post a <span className="bg-gradient-primary bg-clip-text text-transparent">Job</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find exceptional talent quickly with our AI-powered recruitment platform. 
            Post your job and connect with pre-vetted professionals.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center p-6 rounded-xl bg-gradient-subtle border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Posting Form */}
          <div className="bg-gradient-subtle rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Post Your Job</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground mb-2">
                    Job Title *
                  </label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. Senior Software Engineer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                    Location *
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Toronto, ON / Remote"
                  />
                </div>
                
                <div>
                  <label htmlFor="jobType" className="block text-sm font-medium text-foreground mb-2">
                    Job Type *
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    required
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-foreground mb-2">
                  Salary Range
                </label>
                <Input
                  id="salary"
                  name="salary"
                  type="text"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. $80,000 - $120,000 CAD"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Job Description *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                  Requirements *
                </label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={3}
                  placeholder="List the required skills, experience, and qualifications..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-2">
                    Contact Email *
                  </label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="hiring@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-foreground mb-2">
                    Contact Phone
                  </label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+1-905-364-4747"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full btn-hero">
                Post Job Opening
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">Why Choose GIG FORCE?</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Access to 50,000+ pre-vetted professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">AI-powered matching technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Average time-to-hire: 7 days</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Dedicated account manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">30-day replacement guarantee</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">Need Help?</h4>
              <p className="mb-6 opacity-90">
                Our team is here to help you find the perfect candidates. 
                Get personalized assistance with your hiring needs.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Ontario: +1-905-364-4747</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Alberta: +1-587-430-3038</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>support@gigforcemanagement.ca</span>
                </div>
              </div>
              <Button variant="secondary" className="mt-6 w-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};