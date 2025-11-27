import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Code, Brain, Languages, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Business Intelligence",
      color: "text-blue-500",
      skills: [
        "Power BI",
        "Power Query",
        "DAX",
        "Power BI Service",
        "Excel avancé",
        "Data Visualization",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Big Data",
      color: "text-purple-500",
      skills: ["PySpark", "Databricks", "Hadoop / HDFS", "Scala", "Kafka"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Langages",
      color: "text-green-500",
      skills: ["Python", "SQL", "Scala", "M"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bases de données",
      color: "text-orange-500",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Autres",
      color: "text-pink-500",
      skills: ["UML", "Visual Paradigm", "Analyse fonctionnelle"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      color: "text-cyan-500",
      skills: [
        "Travail en équipe",
        "Communication",
        "Résolution de problèmes",
        "Esprit d'analyse",
        "Rigueur",
        "Relationnel facile",
      ],
    },
  ];

  const languages = [
    { name: "Français", level: "C1 (DELF obtenu, score 72/100)" },
    { name: "Anglais", level: "B2" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${category.color} bg-primary/10 p-3 rounded-lg`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Languages Section */}
          <Card className="p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-indigo-500 bg-primary/10 p-3 rounded-lg">
                <Languages className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Langues</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <span className="font-semibold text-lg">{lang.name}</span>
                  <Badge variant="outline" className="text-sm">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
