// pages/index.js — Balloonpa (Next.js Pages Router)
import FloatingContacts from "@/components/FloatingContacts";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import OccasionsNav from "@/components/sections/occasions-nav";
import About from "@/components/sections/about";
import ShopSection from "@/components/sections/shop";
import ContactSection from "@/components/sections/contact";
import Head from "next/head";
import Script from "next/script";
import { getAllProducts } from "@/utils/products.server";

/** ========= DATA ========= */

export async function getStaticProps() {
  const { categories, subCatagories, products } = await getAllProducts();
  return {
    props: { initialCategories: categories, initialSubCategories: subCatagories, initialProducts: products },
  };
}

/** ========= APP ========= */

export default function Balloonpa({ initialCategories, initialSubCategories, initialProducts }) {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Balloon PA",
    "description": "BalloonPA ร้านลูกโป่งกรุงเทพ 3 สาขา ย่านเสนานิคม-เกษตร สาทร-วงเวียนใหญ่ และรัชดา-ลาดพร้าว เปิดบริการตลอด 24 ชั่วโมง รับจัดลูกโป่งและตกแต่งสถานที่สำหรับทุกโอกาส พร้อมบริการจัดส่งและติดตั้งทั่วกรุงเทพ ออกแบบได้ตามธีมและปรับได้ตามงบประมาณ ปรึกษาฟรีผ่าน LINE",
    "url": "https://balloonpabkk.com/",
    "telephone": "+66822435496",
    "email": "balloonpa.lp@gmail.com",
    "image": ["https://balloonpabkk.com/web_Icon.webp"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ladprao, Bangkok",
      "addressRegion": "Krung Thep Maha Nakhon",
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
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "service": [
      {
        "@type": "Service",
        "name": "บริการจัดเซ็ตลูกโป่ง",
        "description": "บริการจัดเซ็ตลูกโป่งครบวงจรสำหรับทุกโอกาสสำคัญ ครอบคลุมทั้งช่อลูกโป่งฮีเลียม ช่อลูกโป่งดอกไม้ เซ็ตลูกโป่ง เสาลูกโป่ง กล่องเซอร์ไพร์ส ตกแต่งห้องพักหรือสถานที่จัดงาน และจัดทำฉากหลัง (Backdrop) ในสไตล์ที่คุณต้องการภายใต้งบประมาณที่กำหนด พร้อมบริการจัดส่งและติดตั้งนอกสถานที่ทั่วกรุงเทพ"
      },
      {
        "@type": "Service",
        "name": "บริการตกแต่งห้องด้วยลูกโป่งสำหรับโอกาสพิเศษ",
        "description": "บริการเนรมิตห้องนอน ห้องพักโรงแรม หรือสถานที่ส่วนตัวให้พิเศษยิ่งขึ้นด้วยการตกแต่งลูกโป่งสำหรับเซอร์ไพร์สวันเกิด วันครบรอบ ขอแต่งงาน หรือโอกาสสำคัญ ภายใต้งบประมาณที่กำหนด"
      },
      {
        "@type": "Service",
        "name": "บริการตกแต่งงานอีเวนท์",
        "description": "รับออกแบบและตกแต่งสถานที่ด้วยลูกโป่งสำหรับงานอีเวนท์บริษัท งานเปิดตัวสินค้า และกิจกรรมทางการตลาดทุกรูปแบบด้วยดีไซน์ที่เป็นมืออาชีพ รวมถึงรับจัดทำซุ้มลูกโป่ง (Balloon Arch) และฉากหลัง (Backdrop) สำหรับตกแต่งทางเข้างานหรือสร้างจุดไฮไลท์สำคัญให้งานโดดเด่นน่าสนใจ"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "บริการจัดลูกโป่ง BalloonPA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "บริการจัดเซ็ตลูกโป่ง",
            "description": "บริการจัดเซ็ตลูกโป่งครบวงจรสำหรับทุกโอกาสสำคัญ ครอบคลุมทั้งช่อลูกโป่งฮีเลียม ช่อลูกโป่งดอกไม้ เซ็ตลูกโป่ง เสาลูกโป่ง กล่องเซอร์ไพร์ส ตกแต่งห้องพักหรือสถานที่จัดงาน และจัดทำฉากหลัง (Backdrop) ในสไตล์ที่คุณต้องการภายใต้งบประมาณที่กำหนด พร้อมบริการจัดส่งและติดตั้งนอกสถานที่ทั่วกรุงเทพ"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "บริการตกแต่งห้องด้วยลูกโป่งสำหรับโอกาสพิเศษ",
            "description": "บริการเนรมิตห้องนอน ห้องพักโรงแรม หรือสถานที่ส่วนตัวให้พิเศษยิ่งขึ้นด้วยการตกแต่งลูกโป่งสำหรับเซอร์ไพร์สวันเกิด วันครบรอบ ขอแต่งงาน หรือโอกาสสำคัญ ภายใต้งบประมาณที่กำหนด"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "บริการตกแต่งงานอีเวนท์",
            "description": "รับออกแบบและตกแต่งสถานที่ด้วยลูกโป่งสำหรับงานอีเวนท์บริษัท งานเปิดตัวสินค้า และกิจกรรมทางการตลาดทุกรูปแบบด้วยดีไซน์ที่เป็นมืออาชีพ รวมถึงรับจัดทำซุ้มลูกโป่ง (Balloon Arch) และฉากหลัง (Backdrop) สำหรับตกแต่งทางเข้างานหรือสร้างจุดไฮไลท์สำคัญให้งานโดดเด่นน่าสนใจ"
          }
        }
      ]
    },
    "hasMap": "https://maps.app.goo.gl/iDZGSFzcEtGXBsnX6",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61580081014446",
      "https://www.instagram.com/balloonpa.bkk.ladprao/",
      "https://www.tiktok.com/@balloonpabkk.ladprao"
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>ร้านลูกโป่ง จัดส่งทั่วกรุงเทพฯ 24 ชม. | BalloonPA</title>
        <meta
          name="description"
          content="BalloonPA ร้านลูกโป่งกรุงเทพ เปิดตลอด 24 ชม. รับจัดงานนอกสถานที่ บริการจัดส่งและติดตั้งทั่วกรุงเทพ ออกแบบตามธีม ปรับได้ตามงบประมาณ ครอบคลุมพื่นที่รัชดา ลาดพร้าว เสนานิคม และสาทร"
          key="desc"
        />
        <meta name="google-site-verification" content="E3kT3Yu9KiDaCqhKga5o5IySXVr5u6Jv3PXbaLnc1zU" />
        {/* Open Graph */}
        <meta property="og:title" content="ร้านลูกโป่ง จัดส่งทั่วกรุงเทพฯ 24 ชม. | BalloonPA" />
        <meta property="og:description" content="BalloonPA ร้านลูกโป่งกรุงเทพ เปิดตลอด 24 ชม. รับจัดงานนอกสถานที่ บริการจัดส่งและติดตั้งทั่วกรุงเทพ ออกแบบตามธีม ปรับได้ตามงบประมาณ ครอบคลุมพื่นที่รัชดา ลาดพร้าว เสนานิคม และสาทร" />
        <meta property="og:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://balloonpabkk.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ร้านลูกโป่ง จัดส่งทั่วกรุงเทพฯ 24 ชม. | BalloonPA" />
        <meta name="twitter:description" content="BalloonPA ร้านลูกโป่งกรุงเทพ เปิดตลอด 24 ชม. รับจัดงานนอกสถานที่ บริการจัดส่งและติดตั้งทั่วกรุงเทพ ออกแบบตามธีม ปรับได้ตามงบประมาณ  ครอบคลุมพื่นที่รัชดา ลาดพร้าว เสนานิคม และสาทร" />
        <meta name="twitter:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        {/* Canonical */}
        <link rel="canonical" href="https://balloonpabkk.com/" />
      </Head>

      <Script
        id="ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessLd).replace(/</g, '\\u003c'),
        }}
      />
      <Header />
      <Hero />
      <OccasionsNav />
      <About />
      <ShopSection products={initialProducts} categories={initialCategories} subCategories={initialSubCategories} />
      <ContactSection />
      <Footer />

      <FloatingContacts />
    </div>
  );
}
