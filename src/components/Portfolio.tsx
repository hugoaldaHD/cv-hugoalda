import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Dashboard Analítico",
    description: "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas y reportes personalizados.",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjEwMTgyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "TypeScript", "D3.js", "Node.js"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto"
  },
  {
    title: "App Móvil de Productividad",
    description: "Aplicación móvil para gestión de tareas y proyectos con sincronización en la nube y colaboración en equipo.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDUyMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto"
  },
  {
    title: "E-commerce Full Stack",
    description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTA4MTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto"
  },
  {
    title: "Sistema de Visualización de Datos",
    description: "Herramienta de business intelligence con gráficos avanzados y exportación de reportes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjEwMDg1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/usuario/proyecto"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Algunos de mis proyectos más destacados
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
