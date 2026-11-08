import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Hubungi Kami via WhatsApp"
    >
      <span className="wa-tip">Hubungi Kami</span>
      <WhatsAppIcon size={32} />
    </a>
  );
}
