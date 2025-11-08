import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-slate-700 leading-relaxed text-center text-lg">
              Soy estudiante de DAW2 (Desarrollo de Aplicaciones Web) y ASIX2 (Administración de Sistemas Informáticos en Red), con gran interés en el desarrollo frontend y backend. Me considero una persona trabajadora, adaptable y con facilidad para el trabajo en equipo.
              Durante mi formación he adquirido conocimientos tanto en la parte de desarrollo web como en la gestión de sistemas, lo que me permite tener una visión completa del entorno tecnológico. Busco una oportunidad para seguir aprendiendo y aportar valor en proyectos reales, contribuyendo con dedicación y entusiasmo al crecimiento del equipo y de la empresa.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
