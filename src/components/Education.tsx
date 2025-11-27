import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const formations = [
    {
      degree: "Master 2",
      field: "Management des Solutions Digitales & Data (MS2D)",
      school: "3iL Ingénieurs",
      period: "Depuis 2024",
      location: "Limoges, France",
      description:
        "Formation avancée en gestion de projets numériques, analyse de données, business intelligence et pilotage de la transformation digitale.",
      status: "En cours",
    },
    {
      degree: "Bachelor",
      field:
        "Conception des Systèmes d'Information & Développement Logiciels et Web",
      school: "3iL Ingénieurs",
      period: "2021 – 2024",
      location: "Douala, Cameroun",
      description:
        "Formation complète en systèmes d'information, développement logiciel et web, analyse de données.",
      status: "Obtenu",
    },
  ];

  const certifications = [
    {
      title: "Power BI",
      provider: "Udemy",
      icon: "📊",
    },
    {
      title: "Apache Spark",
      provider: "Udemy",
      icon: "⚡",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ma <span className="gradient-text">Formation</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Formations */}
          <div className="space-y-8 mb-16">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {formation.degree}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                          {formation.field}
                        </p>
                      </div>
                      <Badge
                        variant={
                          formation.status === "En cours" ? "default" : "secondary"
                        }
                        className="text-sm"
                      >
                        {formation.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span className="font-medium">{formation.school}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formation.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{formation.location}</span>
                      </div>
                    </div>

                    <p className="text-foreground/70">{formation.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                      <p className="text-sm text-foreground/70">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
