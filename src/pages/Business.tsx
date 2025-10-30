import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import businessHeroImage from "@/assets/enterprise-hero.png";
import {
  Building2,
  Users,
  BarChart3,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
} from "lucide-react";

const Business = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track learning progress, measure ROI, and identify skills gaps with AI-powered insights."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with SSO, GDPR compliance, and end-to-end encryption."
    },
    {
      icon: Globe,
      title: "HRIS Integration",
      description: "Seamless integration with Workday, SAP, BambooHR, and 50+ HR systems."
    },
    {
      icon: Target,
      title: "Custom Learning Paths",
      description: "Personalized training programs tailored to your organization's goals."
    },
    {
      icon: Award,
      title: "White-Label Platform",
      description: "Fully customizable with your branding, domain, and corporate identity."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated customer success team and 24/7 technical support."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Formacad | Corporate Learning Platform</title>
        <meta name="description" content="Scale your team's excellence with Formacad's enterprise learning platform. AI-powered analytics, custom learning paths, and enterprise-grade security." />
        <meta name="keywords" content="corporate training, enterprise learning, business education, team development, LMS, learning management system" />
        <link rel="canonical" href="/business" />
      </Helmet>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto pt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                      Scale Your Team's
                      <span className="text-primary block">Excellence</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Advanced corporate learning platform with AI-powered analytics and personalized training paths.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-lg px-8">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Schedule Demo
                    </Button>
                  </div>

                  <div className="flex items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={businessHeroImage}
                    alt="Professional team collaboration"
                    className="w-full h-[400px] lg:h-[500px] rounded-xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent/5 border-y border-border/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "500+", label: "Companies" },
                { value: "100K+", label: "Employees Trained" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "50+", label: "Countries" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Enterprise-Grade Features
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to scale learning across your organization
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-accent/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Get Started Today
                </h2>
                <p className="text-lg text-muted-foreground">
                  Schedule a demo and discover how we can transform your organization's learning
                </p>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Inc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employees">Company Size</Label>
                        <Input
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          placeholder="50-100 employees"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your learning needs..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Business;
