import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuSection />
        <About />
        <Advantages />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
