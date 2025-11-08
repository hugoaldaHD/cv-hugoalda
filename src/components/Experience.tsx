import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Becario en prácticas (FCTS)",
    company: "Sosmatic S.L",
    period: "8 de Octubre 2025 - Presente",
    description: "Soporte tecnico de incidencias para la UOC (Universidad Abierta de Cataluña).",
    technologies: ["HelpDesk", "Soporte IT", "Atención al cliente"]
  },
  {
    title: "Becario en prácticas (FCTS Duales)",
    company: "GEPROM - Ingeniería de Automatización Industrial Barcelona",
    period: "3 de Junio 2024 - 30 de Abril de 2025",
    description: "Soluciones que permiten integrar máquinas, personas y sistemas en entornos altamente automatizados, favoreciendo la eficiencia y la toma de decisiones basada en datos.",
    technologies: ["Legato", "LC2", "Draw.io"]
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Experiencia Laboral</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4 pb-4 last:pb-0">
                <div className="mb-2">
                  <h3 className="text-slate-900">{exp.title}</h3>
                  <p className="text-slate-700">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <p className="text-slate-600 mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
