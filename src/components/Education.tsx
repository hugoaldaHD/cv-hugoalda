import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "CFGS - Administración de Servicios Informáticos y Redes",
    institution: "Jesuïtas Bellvitge",
    period: "2025 - Presente",
    description: "Desarrollo de tareas de configuración, administración y mantenimiento de sistemas informáticos libres y propietarios, tanto cliente como en contexto servidor. Diseño e implementación de sistemas en red. Aplicar y configurar aspectos de seguridad informática y sistemas de alta disponibilidad de recursos en red. Instalación, administración y gestión de bases de datos libres y propietarias. Implantación de gestores de contenidos Web."
  },
  {
    degree: "CFGS - Desarrollo de Aplicaciones Web",
    institution: "Jesuïtas Bellvitge",
    period: "2024 - 2025",
    description: "Desarrollo de tareas de creación de aplicaciones Web utilizando diversos lenguajes de programación y plataformas de desarrollo. Diseño de contenidos gráficos y multimedia, aplicando criterios de usabilidad y accesibilidad. Creación de aplicaciones Web en entorno cliente y en entorno servidor. Desarrollo de aplicaciones interactivas y juegos Web con HTML5."
  }
];

export function Education() {
  return (
    <section id="educacion" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Educación</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-4 pb-4 last:pb-0">
                <h3 className="text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-slate-700 mb-2">{edu.institution}</p>
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <p className="text-slate-600">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
