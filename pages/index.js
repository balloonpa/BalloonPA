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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Balloon PA",
    "description": "บริการจัดลูกโป่งและตกแต่งงาน Birthday, Congratulation, Grand Opening, Bride to be และงาน Event พร้อมส่ง/ติดตั้งทั่วกรุงเทพฯ",
    "url": "https://balloonpabkk.com/",
    "telephone": "+66822435496",
    "email": "balloonpa.lp@gmail.com",
    "image": [
      "https://balloonpabkk.com/web_Icon.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ladprao, Bangkok",
      "addressRegion": "Krung Thep Maha Nakhon",
      "postalCode": "",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.802294881734404",
      "longitude": "100.57305750921292"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "service": [
      {
        "@type": "Service",
        "name": "บริการจัดลูกโป่งวันเกิด",
        "description": "จัดตกแต่งงานวันเกิดด้วยลูกโป่งสวยงามตามธีมและความต้องการ"
      },
      {
        "@type": "Service",
        "name": "บริการลูกโป่งเปิดร้าน",
        "description": "จัดลูกโป่งตกแต่งงานเปิดร้านเพื่อดึงดูดลูกค้าทั่วกรุงเทพฯ"
      },
      {
        "@type": "Service",
        "name": "บริการตกแต่งงานอีเวนท์",
        "description": "ตกแต่งสถานที่จัดงานอีเวนท์ด้วยลูกโป่งหลากหลายรูปแบบ"
      }
    ],
    "hasMap": "https://maps.app.goo.gl/iDZGSFzcEtGXBsnX6",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61580081014446",
      "https://www.instagram.com/balloonpa.bkk.ladprao/"
    ]
  };
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
        <link rel="preload"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        >
        </script>


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
