import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Briefcase } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEwNjMzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-cover border-4 border-slate-200"
        />
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-slate-900 mb-2">Hugo Alda</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-600 mb-3">
            <Briefcase className="w-5 h-5" />
            <p>Desarrollador Full Stack</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-600">
            <MapPin className="w-4 h-4" />
            <p>Ciudad, País</p>
          </div>
        </div>
      </div>
    </header>
  );
}
