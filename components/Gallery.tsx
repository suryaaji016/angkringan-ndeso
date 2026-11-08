"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryItems } from "@/data/menu";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const total = galleryItems.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + total) % total)),
    [total],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="galeri" className="section gallery">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Galeri</span>
          <h2>Galeri Suasana</h2>
          <div className="divider" />
        </Reveal>

        <div className="gallery-grid">
          {galleryItems.map((g, i) => (
            <Reveal key={g.src} delay={i * 60} className={`g-cell g-${i}`}>
              <button className="g-item" onClick={() => setActive(i)} aria-label={`Perbesar: ${g.caption}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  style={{ objectPosition: g.position }}
                />
                <span className="g-overlay">
                  <ZoomIn size={26} />
                  <small>{g.caption}</small>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Pratinjau foto" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Tutup"><X size={26} /></button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Sebelumnya"><ChevronLeft size={30} /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryItems[active].src}
              alt={galleryItems[active].alt}
              width={1400}
              height={1000}
              sizes="90vw"
              className="lb-img"
            />
            <figcaption>{galleryItems[active].caption}</figcaption>
          </figure>
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Berikutnya"><ChevronRight size={30} /></button>
        </div>
      )}
    </section>
  );
}
