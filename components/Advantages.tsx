import { CalendarCheck, Leaf, Sofa, Wallet } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: Wallet, title: "Harga Terjangkau", text: "Mulai dari Rp3.000, ramah di kantong." },
  { icon: Leaf, title: "Bahan Berkualitas", text: "Bahan segar dipilih setiap hari." },
  { icon: Sofa, title: "Tempat Nyaman", text: "Suasana santai dengan lampu hangat." },
  { icon: CalendarCheck, title: "Buka Setiap Hari", text: "Siap menemani malam Anda setiap hari." },
];

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <Reveal className="section-head light">
          <span className="eyebrow">Keunggulan Kami</span>
          <h2>Kenapa Memilih Angkringan Ndeso</h2>
          <div className="divider" />
        </Reveal>
        <div className="adv-grid">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="adv-item">
              <span className="icon-badge dark"><Icon size={28} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
