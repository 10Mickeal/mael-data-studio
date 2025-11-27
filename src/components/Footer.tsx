import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:maelmbida10@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+33753887398",
      label: "Téléphone",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/Mickael%20Stephane%20Mael%20Kaptue%20Mbida",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Mickael Kaptue
              </h3>
              <p className="text-white/80 text-sm">
                Data Analyst / Business Analyst passionné par l'analyse et la
                valorisation des données. Disponible pour un stage de 6 mois dès
                février 2026.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Accueil", href: "#home" },
                  { label: "À propos", href: "#about" },
                  { label: "Compétences", href: "#skills" },
                  { label: "Expériences", href: "#experience" },
                  { label: "Projets", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    <div className="bg-white/10 p-2 rounded-lg">
                      {link.icon}
                    </div>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
              <p>
                © {currentYear} Mickael Stephane Mael Kaptue Mbida. Tous droits
                réservés.
              </p>
              <p className="flex items-center gap-1">
                Fait avec <Heart className="h-4 w-4 text-red-500 fill-current" />{" "}
                et passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
