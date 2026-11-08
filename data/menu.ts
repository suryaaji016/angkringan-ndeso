export type MenuCategory = "Makanan" | "Sate" | "Wedhang" | "Minuman" | "Camilan";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  image: string;
  alt: string;
  /** tampil di tab Andalan */
  featured?: boolean;
  /** keterangan setelah harga, mis. "/porsi" */
  unit?: string;
};

export const menuCategories: MenuCategory[] = ["Makanan", "Sate", "Wedhang", "Minuman", "Camilan"];

// Tambah / ubah menu cukup lewat daftar ini.
export const menuItems: MenuItem[] = [
  { id: "nasi-bakar", name: "Nasi Bakar", price: 4000, category: "Makanan", image: "/images/menu/nasi-bakar.jpg", alt: "Nasi bakar dibungkus daun pisang", featured: true },
  { id: "nasi-kucing", name: "Nasi Kucing", price: 4000, category: "Makanan", image: "/images/menu/nasi-kucing.jpg", alt: "Nasi kucing dengan sambal", featured: true },
  { id: "nasi-putih", name: "Nasi Putih", price: 5000, category: "Makanan", image: "/images/menu/nasi-putih.jpg", alt: "Sepiring nasi putih hangat" },
  { id: "indomi", name: "Indomi", price: 8000, category: "Makanan", image: "/images/menu/indomi.jpg", alt: "Indomi goreng dengan sayur dan tomat" },
  { id: "indomi-telor", name: "Indomi Telor", price: 12000, category: "Makanan", image: "/images/menu/indomi-telor.jpg", alt: "Indomi dengan telur mata sapi" },
  { id: "sate-telur-puyuh", name: "Sate Telur Puyuh", price: 3500, category: "Sate", image: "/images/menu/sate-telur-puyuh.jpg", alt: "Sate telur puyuh berbumbu", featured: true },
  { id: "sate-kerang", name: "Sate Kerang", price: 3000, category: "Sate", image: "/images/menu/sate-kerang.jpg", alt: "Sate kerang bakar", featured: true },
  { id: "sate-kulit", name: "Sate Kulit", price: 3000, category: "Sate", image: "/images/menu/sate-kulit.jpg", alt: "Sate kulit goreng renyah" },
  { id: "sate-fishrol", name: "Sate Fishrol", price: 3000, category: "Sate", image: "/images/menu/sate-fishrol.jpg", alt: "Sate fishrol bakar" },
  { id: "sate-usus", name: "Sate Usus", price: 3000, category: "Sate", image: "/images/menu/sate-usus.jpg", alt: "Sate usus bakar berbumbu", featured: true },
  { id: "sate-bakso", name: "Sate Bakso", price: 3000, category: "Sate", image: "/images/menu/sate-bakso.jpg", alt: "Sate bakso bakar" },
  { id: "wedhang-uwuh", name: "Wedhang Uwuh", price: 8000, category: "Wedhang", image: "/images/menu/wedhang-uwuh.jpg", alt: "Wedhang uwuh rempah merah", featured: true },
  { id: "wedhang-jahe", name: "Wedhang Jahe", price: 6000, category: "Wedhang", image: "/images/menu/wedhang-jahe.jpg", alt: "Wedhang jahe hangat", featured: true },
  { id: "wedhang-jeruk", name: "Wedhang Jeruk", price: 6000, category: "Wedhang", image: "/images/menu/wedhang-jeruk.jpg", alt: "Wedhang jeruk hangat" },
  { id: "wedhang-seruni", name: "Wedhang Seruni", price: 8000, category: "Wedhang", image: "/images/menu/wedhang-seruni.jpg", alt: "Wedhang seruni bunga krisan" },
  { id: "susu-jahe", name: "Susu Jahe", price: 8000, category: "Wedhang", image: "/images/menu/susu-jahe.jpg", alt: "Susu jahe hangat" },
  { id: "kopi", name: "Kopi", price: 5000, category: "Minuman", image: "/images/menu/kopi.jpg", alt: "Segelas kopi hitam", featured: true },
  { id: "godday", name: "Godday", price: 5000, category: "Minuman", image: "/images/menu/godday.jpg", alt: "Godday dingin" },
  { id: "godday-capucino", name: "Godday Capucino", price: 6000, category: "Minuman", image: "/images/menu/godday-capucino.jpg", alt: "Godday capucino dingin" },
  { id: "chocolato", name: "Chocolato", price: 6000, category: "Minuman", image: "/images/menu/chocolato.jpg", alt: "Chocolato dingin dengan saus cokelat" },
  { id: "teh-tarik", name: "Teh Tarik", price: 6000, category: "Minuman", image: "/images/menu/teh-tarik.jpg", alt: "Teh tarik dingin" },
  { id: "nutrisari", name: "Nutrisari", price: 4000, category: "Minuman", image: "/images/menu/nutrisari.jpg", alt: "Nutrisari jeruk dingin" },
  { id: "pohong-goreng", name: "Pohong Goreng", price: 10000, category: "Camilan", image: "/images/menu/pohong-goreng.jpg", alt: "Pohong goreng hangat", featured: true, unit: "/porsi" },
  { id: "pisang-goreng", name: "Pisang Goreng", price: 10000, category: "Camilan", image: "/images/menu/pisang-goreng.jpg", alt: "Pisang goreng renyah", featured: true, unit: "/porsi" },
  { id: "french-fries", name: "French Fries", price: 10000, category: "Camilan", image: "/images/menu/french-fries.jpg", alt: "French fries dengan saus", unit: "/porsi" },
];

export const formatRupiah = (n: number) =>
  "Rp" + n.toLocaleString("id-ID");

export const galleryItems = [
  { src: "/images/gallery/papan-nama-malam.jpg", alt: "Papan nama Angkringan Ndeso menyala di bawah lampu gantung pada malam hari", caption: "Papan nama Angkringan Ndeso", position: "50% 30%" },
  { src: "/images/gallery/gazebo-bambu.jpg", alt: "Gazebo bambu beratap rumbia dengan meja lesehan", caption: "Gazebo bambu bersuasana tradisional", position: "50% 62%" },
  { src: "/images/gallery/aneka-sate.jpg", alt: "Nampan berisi aneka sate, telur puyuh, dan sate usus", caption: "Aneka sate angkringan", position: "50% 38%" },
  { src: "/images/gallery/gerobak-angkringan.jpg", alt: "Meja angkringan berisi nampan sate dan gorengan dengan lampu hangat", caption: "Meja angkringan", position: "50% 70%" },
  { src: "/images/gallery/area-duduk.jpg", alt: "Area duduk bambu dan kayu dengan taman batu putih", caption: "Area duduk nyaman", position: "50% 50%" },
  { src: "/images/gallery/nasi-sambel-sate.jpg", alt: "Nasi sambal bandeng, gorengan, dan sate usus di piring enamel", caption: "Nasi sambal dan sate usus", position: "50% 38%" },
  { src: "/images/gallery/taman-batu-putih.jpg", alt: "Taman batu putih dengan air mancur kecil dan gazebo bambu", caption: "Taman batu putih", position: "50% 60%" },
  { src: "/images/gallery/suasana-pengunjung.jpg", alt: "Pengunjung bersantai di area lesehan angkringan", caption: "Berkumpul bersama", position: "50% 55%" },
  { src: "/images/gallery/pintu-masuk.jpg", alt: "Gerbang masuk Angkringan Ndeso dengan papan Sugeng Rawuh", caption: "Sugeng Rawuh", position: "50% 55%" },
];
