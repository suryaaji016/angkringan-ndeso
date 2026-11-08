import Image from "next/image";
import { whatsappUrl } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="tentang" className="section about">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <Image
            src="/images/about-gerbang.jpg"
            alt="Gerbang masuk Angkringan Ndeso dengan papan Sugeng Rawuh dan gazebo bambu"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={120} className="about-copy">
          <span className="eyebrow">Tentang Kami</span>
          <h2>Tentang Angkringan Ndeso</h2>
          <div className="divider left" />
          <p>
            Angkringan Ndeso hadir untuk membawa kembali cita rasa kuliner
            tradisional dengan konsep sederhana, terjangkau, dan penuh
            kehangatan. Tempat yang pas untuk bersantai, berkumpul, dan
            menikmati hidangan khas angkringan bersama teman, keluarga, atau
            rekan kerja.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Selengkapnya
          </a>
        </Reveal>
      </div>
    </section>
  );
}
