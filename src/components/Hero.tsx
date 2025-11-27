import { ArrowRight, Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-primary overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Mickael Stephane Mael
              <br />
              <span className="text-accent">Kaptue Mbida</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-semibold">
              Data Analyst / Business Analyst
            </p>
            <p className="text-lg md:text-xl text-white/80">
              Power BI • Python • Big Data
            </p>
          </div>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Étudiant en Master 2 Management des Solutions Digitales et Data —
            Passionné par l'analyse, la visualisation et la valorisation des données.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:maelmbida10@gmail.com" className="hover:text-white transition-colors">
                maelmbida10@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+33 07 53 88 73 98</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Limoges, France</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary-dark hover:bg-white/90 font-semibold"
              onClick={handleContactClick}
            >
              Me contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold"
              onClick={() => window.open("#", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark"
              onClick={() => window.open("https://www.linkedin.com/in/Mickael%20Stephane%20Mael%20Kaptue%20Mbida", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          {/* Stage Info */}
          <div className="pt-8">
            <p className="text-white/90 font-medium bg-white/10 backdrop-blur-sm py-3 px-6 rounded-full inline-block">
              🎯 Recherche un stage de 6 mois dès Février 2026
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
