import { MapPin, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/data/site";
import { Logo, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer id="kontak" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#beranda" className="brand">
            <Logo size={58} />
            <span className="brand-text"><strong>Angkringan</strong><em>Ndeso</em></span>
          </a>
          <p>Kuliner tradisional yang sederhana, terjangkau, dan penuh kehangatan.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="TikTok"><TikTokIcon /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={20} /></a>
          </div>
        </div>

        <div>
          <h4>Navigasi Cepat</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Kontak</h4>
          <ul className="contact">
            <li>
              <Phone size={18} />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp: {site.phoneDisplay}</a>
            </li>
            <li><MapPin size={18} /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright © 2026 Angkringan Ndeso.</span>
      </div>
    </footer>
  );
}
