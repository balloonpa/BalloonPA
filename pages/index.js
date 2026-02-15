// pages/index.js — Balloonpa (Next.js Pages Router)
import FloatingContacts from "@/components/FloatingContacts";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import ShopSection from "@/components/sections/shop";
import Head from "next/head";


/** ========= APP ========= */

export default function Balloonpa() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>BalloonPA</title>
        <meta
          name="description"
          content="บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening, Bride to be และงาน Event — ร้านตั้งอยู่ย่านลาดพร้าว บริการส่ง/ติดตั้งทั่วกรุงเทพฯ" key={"desc"}
        />
        <meta
          property="og:title"
          content="ร้านลูกโป่งลาดพร้าว 24 ชม. จัดส่งทั่วกรุงเทพฯ"
        />
        <meta
          name="og:description"
          content="บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening, Bride to be และงาน Event — ร้านตั้งอยู่ย่านลาดพร้าว บริการส่ง/ติดตั้งทั่วกรุงเทพฯ"
        />
        

      </Head>
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
