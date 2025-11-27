import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Assistant Data Analyst",
      company: "OK Plast",
      period: "Avril 2025 – Août 2025",
      location: "Douala",
      missions: [
        "Import et préparation des données (CSV, Power Query)",
        "Création de mesures DAX et tableaux de bord interactifs",
        "Optimisation des visuels via outils IA dans Power BI Desktop",
      ],
      result:
        "Données fiables et dashboards décisionnels pour une meilleure prise de décision.",
      technologies: ["Power BI", "Power Query", "DAX", "Excel"],
    },
    {
      title: "Stagiaire Assistant Data Analyst",
      company: "Moaye Engineering",
      period: "Février 2024 – Juillet 2024",
      location: "Douala",
      missions: [
        "Import et préparation des données",
        "Création de mesures DAX et tableaux de bord interactifs",
        "Optimisation des visuels Power BI",
      ],
      result: "Rapports fiables et exploitables pour le suivi de l'activité.",
      technologies: ["Power BI", "DAX", "Power Query"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Expériences</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <Card
                    className={`p-6 hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-foreground/70">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Missions */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 text-foreground/90">
                        Missions :
                      </h4>
                      <ul className="space-y-2">
                        {exp.missions.map((mission, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-foreground/80"
                          >
                            <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span>{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="mb-4 p-3 bg-success/10 rounded-lg border border-success/20">
                      <p className="text-sm text-foreground/80">
                        <span className="font-semibold text-success">
                          Résultat :{" "}
                        </span>
                        {exp.result}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Reference */}
          <Card className="mt-12 p-6 bg-accent/20 border-accent animate-fade-in">
            <h3 className="font-semibold text-lg mb-3">Référence :</h3>
            <div className="space-y-1 text-foreground/80">
              <p>
                <span className="font-medium">Moumy Bernard</span> – Responsable
                Stagiaire, Moaye Engineering
              </p>
              <p className="text-sm">
                Email :{" "}
                <a
                  href="mailto:courriel.moaye@gmail.com"
                  className="text-primary hover:underline"
                >
                  courriel.moaye@gmail.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
