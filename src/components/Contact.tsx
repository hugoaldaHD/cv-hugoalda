import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, Copy, Check, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hugo.aldacardenas@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 615 44 93 59",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hugo-alda/",
    href: "https://www.linkedin.com/in/hugo-alda-c%C3%A1rdenas-a769ab294/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/hugoaldaHD",
    href: "https://github.com/hugoaldaHD",
  },
];

export function Contact() {
  const [copiado, setCopiado] = useState(null);

  const copiar = (texto, label) => {
    navigator.clipboard.writeText(texto);
    setCopiado(label);
    setTimeout(() => setCopiado(null), 1500);
  };

  const descargarCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/CV-HugoAlda.pdf";
    link.download = "CV-HugoAlda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const isCopiable = !contact.href; // Solo email/teléfono

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <a
                      href={contact.href}
                      target={contact.href ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-1"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{contact.label}</p>
                        <p className="text-slate-700 break-all">{contact.value}</p>
                      </div>
                    </a>

                    {isCopiable && (
                      <button
                        onClick={() => copiar(contact.value, contact.label)}
                        className="ml-3 p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
                        title="Copiar"
                      >
                        {copiado === contact.label ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-200">
              <Button className="w-full" size="lg" onClick={descargarCV}>
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}