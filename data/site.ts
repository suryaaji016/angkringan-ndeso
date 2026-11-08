export const site = {
  name: "Angkringan Ndeso",
  address:
    "Jl. Gamelan Kidul No.30, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131.",
  phoneDisplay: "082332218635",
  whatsappNumber: "6282332218635",
  whatsappMessage:
    "Halo Angkringan Ndeso, saya ingin bertanya mengenai menu dan pemesanan.",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];
