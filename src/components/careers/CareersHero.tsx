import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, TrendingUp } from "lucide-react";
import careersHeroOverlay from "@/assets/careers-hero-overlay.jpg";

const CareersHero = () => {
  return (
    <section className="pt-24 pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">Join Our Team</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                    Build the Future of
                    <span className="text-primary block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Digital Education
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Join a dynamic team of innovators, educators, and technologists dedicated to transforming 
                  the educational landscape. Make a meaningful impact while advancing your career in a 
                  fast-growing EdTech company.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>3 Locations</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>200% Growth</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="group w-fit"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src={careersHeroOverlay}
                alt="Team collaboration"
                className="w-full h-96 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;