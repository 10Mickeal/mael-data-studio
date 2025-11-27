import { Card } from "@/components/ui/card";
import { Palette, Music, Trophy, Drama } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Art",
      description: "Passion pour l'expression créative et visuelle",
      color: "text-purple-500",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Musique",
      description: "Écoute et appréciation musicale",
      color: "text-pink-500",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Football",
      description: "Pratique sportive et esprit d'équipe",
      color: "text-green-500",
    },
    {
      icon: <Drama className="h-8 w-8" />,
      title: "Théâtre",
      description: "Intérêt pour les arts de la scène",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="interests" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Centres <span className="gradient-text">d'intérêt</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Interests Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${interest.color} bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-sm text-foreground/70">
                  {interest.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
