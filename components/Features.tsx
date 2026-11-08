import { Flame, Heart, MapPin, UtensilsCrossed } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: UtensilsCrossed, title: "Menu Beragam", text: "Sate, gorengan, nasi kucing, dan minuman hangat." },
  { icon: Flame, title: "Cita Rasa Tradisional", text: "Dimasak dengan resep dan bumbu khas Jawa." },
  { icon: Heart, title: "Suasana Hangat", text: "Tempat akrab untuk berkumpul dan bersantai." },
  { icon: MapPin, title: "Lokasi Strategis", text: "Di kawasan Kraton, Kota Yogyakarta." },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container features-grid">
        {features.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80} className="feature">
            <span className="icon-badge"><Icon size={26} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
