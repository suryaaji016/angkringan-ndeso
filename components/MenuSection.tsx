"use client";

import { useState } from "react";
import Image from "next/image";
import { formatRupiah, menuCategories, menuItems } from "@/data/menu";
import Reveal from "./Reveal";

type Tab = "Andalan" | "Semua" | (typeof menuCategories)[number];

const tabs: Tab[] = ["Andalan", "Semua", ...menuCategories];

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>("Andalan");

  const items = menuItems.filter((m) => {
    if (tab === "Semua") return true;
    if (tab === "Andalan") return m.featured;
    return m.category === tab;
  });

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Menu Andalan</span>
          <h2>Pilihan Favorit Pelanggan</h2>
          <div className="divider" />
        </Reveal>

        <div className="menu-tabs" role="tablist" aria-label="Kategori menu">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={`menu-tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((item, i) => (
            <Reveal key={`${tab}-${item.id}`} delay={(i % 5) * 60}>
              <article className="menu-card">
                <div className="menu-img">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1100px) 30vw, 20vw"
                  />
                </div>
                <div className="menu-body">
                  <h3>{item.name}</h3>
                  <p className="price">
                    {formatRupiah(item.price)}
                    {item.unit && <small>{item.unit}</small>}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {tab === "Andalan" && (
          <div className="center">
            <button className="btn btn-dark" onClick={() => setTab("Semua")}>
              Lihat Semua Menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
