import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Adventure Works – Exec Dashboard",
      description:
        "Dashboard exécutif complet développé avec Power BI pour analyser les performances commerciales et opérationnelles d'Adventure Works.",
      technologies: ["Power BI", "DAX", "Power Query"],
      link: "https://app.powerbi.com/groups/me/reports/cf28350a-5457-470c-8693-2b28093e9545/fe02c7d4404857993ba6?experience=power-bi",
      highlights: [
        "Visualisations interactives des ventes",
        "Analyse des tendances et KPIs",
        "Tableaux de bord décisionnels",
      ],
    },
    {
      title: "Maven Market – Topline Performance",
      description:
        "Analyse de la performance globale de Maven Market avec des visualisations détaillées et des indicateurs clés.",
      technologies: ["Power BI", "DAX", "Excel"],
      link: "https://app.powerbi.com/groups/me/reports/fe9bf110-20b7-45f3-87f3-8c65e229ef6e/ReportSection?experience=power-bi",
      highlights: [
        "Suivi des performances commerciales",
        "Analyse comparative des produits",
        "Rapports automatisés",
      ],
    },
    {
      title: "Projet DataLake – Pipelines ETL",
      description:
        "Développement de pipelines ETL automatisés pour l'ingestion, le traitement et la transformation de données massives.",
      technologies: ["Python", "Spark", "Kafka", "Hadoop", "Power BI"],
      link: null,
      highlights: [
        "Pipelines d'ingestion automatisés",
        "Nettoyage et transformation des données",
        "Optimisation des performances",
      ],
    },
    {
      title: "Projet Big Data (Académique)",
      description:
        "Projet académique complet d'ingestion, transformation, nettoyage et exposition de données pour générer de la valeur métier.",
      technologies: ["PySpark", "Databricks", "Hadoop", "SQL"],
      link: null,
      highlights: [
        "Traitement de données massives",
        "Architecture Big Data",
        "Génération de valeur à partir des données",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Folder className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4 text-sm text-foreground/70">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Voir le projet
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
                {!project.link && (
                  <div className="text-center text-sm text-muted-foreground py-2 border border-dashed rounded-md">
                    Projet académique
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
