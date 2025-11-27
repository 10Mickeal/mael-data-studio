import { Target, GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Étudiant en Master 2 Management des Solutions Digitales et Data, je
                développe des compétences en gestion de projets numériques, analyse de
                données, business intelligence et pilotage de la transformation digitale.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                Mon objectif est de devenir Data Analyst afin d'accompagner les
                organisations orientées data.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                Je recherche un stage de 6 mois débutant en février 2026.
              </p>
            </Card>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Formation</h3>
                <p className="text-foreground/70">
                  Master 2 Management des Solutions Digitales & Data
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-400">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expérience</h3>
                <p className="text-foreground/70">
                  Stages en tant qu'Assistant Data Analyst
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in animation-delay-600">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Objectif</h3>
                <p className="text-foreground/70">
                  Accompagner les organisations orientées data
                </p>
              </Card>
            </div>

            {/* Mobilité */}
            <Card className="p-6 bg-accent/20 border-accent animate-fade-in">
              <p className="text-center text-lg">
                <span className="font-semibold text-primary">Mobilité :</span>{" "}
                <span className="text-foreground/80">Toute la France</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
