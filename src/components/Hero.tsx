import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import foto from "../img/foto.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">
                Bienvenido a mi portfolio
              </span>
            </div>
            <h1 className="text-slate-900 mb-6">
              Hola, soy <span className="text-blue-600">Hugo</span>
            </h1>
            <h2 className="text-slate-700 mb-4">
              Estudiante de Desarrollo Web
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Apasionado por el Desarrollo Frontend / Backend y Administración de Sistemas.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" onClick={scrollToContact}>
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPortfolio}>
                Ver Portfolio
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/hugoaldaHD"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-alda-c%C3%A1rdenas-a769ab294/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <ImageWithFallback
                src={foto}
                alt="Foto de perfil"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
}
