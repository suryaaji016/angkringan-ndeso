import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero-media">
        <Image
          src="/images/hero-angkringan.png"
          alt="Gerobak angkringan kayu tradisional dengan lampu gantung hangat, meja, dan bangku kayu pada malam hari"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Kuliner Tradisional Yogyakarta</span>
          <h1>
            Nikmati Suasana Angkringan <span>Khas Ndeso</span>
          </h1>
          <p>
            Aneka sate, gorengan, dan minuman hangat dengan suasana angkringan
            yang sederhana, nyaman, dan penuh keakraban.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              Lihat Menu <ArrowRight size={18} />
            </a>
            <a href="#tentang" className="btn btn-outline">
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
