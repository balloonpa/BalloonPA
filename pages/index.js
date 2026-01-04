// pages/index.js — Balloonpa (Next.js Pages Router)
import FloatingContacts from "@/components/FloatingContacts";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ShopSection from "@/components/sections/shop";


/** ========= APP ========= */
export default function Balloonpa() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      {/* <OccasionChips /> */}
      <Portfolio />
      <ShopSection />
      <Footer />

      {/* ✅ ปุ่ม Contact us แบบกางเมนู */}
      <FloatingContacts />
    </div>
  );
}
