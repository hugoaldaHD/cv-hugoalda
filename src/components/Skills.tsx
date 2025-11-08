import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Palette, Database, Wrench, Server, User } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS"]
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Express", "APIs", "MySQL", "PHPMyAdmin", "PHP", "Laravel"]
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: ["Git/GitHub", "Scrum", "VS Code"]
  },
  {
    icon: Palette,
    title: "Diseño",
    skills: ["UI/UX Design", "Responsive Design", "Figma"]
  },
  {
    icon: Server,
    title: "Sistemas",
    skills: [
      "Linux",
      "Windows Server",
      "DHCP",
      "DNS",
      "VMware",
      "VirtualBox",      
      "Apache",
      "Docker",
      "PowerShell"
    ],
  },
  {
    icon: User,
    title: "Personales",
    skills: ["Adaptabilidad", "Trabajo en equipo", "Pensamiento crítico", "Autodisciplina", "Puntualidad", "Organización", "Responsabilidad"]
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-slate-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
