// pages/index.js — Balloonpa (Next.js Pages Router)
import FloatingContacts from "@/components/FloatingContacts";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import OccasionsNav from "@/components/sections/occasions-nav";
import Portfolio from "@/components/sections/portfolio";
import ShopSection from "@/components/sections/shop";
import FaqSection from "@/components/sections/faq";
import Head from "next/head";
import Script from "next/script";
import { getAllProducts } from "@/utils/products.server";

const FAQ_LD = [
  {
    "@type": "Question",
    "name": "ราคาลูกโป่งเริ่มต้นที่เท่าไหร่?",
    "acceptedAnswer": { "@type": "Answer", "text": "ราคาขึ้นอยู่กับประเภทและขนาดของงาน ดูราคาคร่าวๆ ได้ในหน้าสินค้า หรือสอบถามฟรีผ่าน LINE @balloonpa.th ตลอด 24 ชั่วโมง" }
  },
  {
    "@type": "Question",
    "name": "ต้องสั่งล่วงหน้ากี่วัน?",
    "acceptedAnswer": { "@type": "Answer", "text": "แนะนำสั่งล่วงหน้าอย่างน้อย 1–2 วันทำการ สำหรับงานใหญ่หรืองานออกแบบพิเศษควรสั่งล่วงหน้า 3–7 วัน รับงานด่วนได้ตามความพร้อม" }
  },
  {
    "@type": "Question",
    "name": "จัดส่งพื้นที่ไหนบ้าง?",
    "acceptedAnswer": { "@type": "Answer", "text": "บริการจัดส่งและติดตั้งทั่วกรุงเทพมหานครและปริมณฑล ครอบคลุมย่านลาดพร้าว รัชดาภิเษก สุขุมวิท ดอนเมือง จตุจักร บางนา และพื้นที่อื่นๆ" }
  },
  {
    "@type": "Question",
    "name": "รับออกแบบตามธีมและสีที่ต้องการได้ไหม?",
    "acceptedAnswer": { "@type": "Answer", "text": "รับออกแบบตามธีมและสีทุกประเภท เช่น พาสเทล Rustic Luxury สามารถส่งรูปอ้างอิงมาได้ผ่าน LINE" }
  },
  {
    "@type": "Question",
    "name": "มีบริการจัดส่งพร้อมติดตั้งหน้างานด้วยไหม?",
    "acceptedAnswer": { "@type": "Answer", "text": "มีบริการจัดส่งพร้อมติดตั้งหน้างาน ราคาขึ้นอยู่กับพื้นที่และความซับซ้อนของงาน สอบถามได้ผ่าน LINE" }
  },
  {
    "@type": "Question",
    "name": "ชำระเงินด้วยวิธีใดได้บ้าง?",
    "acceptedAnswer": { "@type": "Answer", "text": "รับชำระผ่านโอนเงินธนาคาร PromptPay และ TrueMoney Wallet" }
  },
];

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
    "description": "บริการจัดลูกโป่งและตกแต่งงาน Birthday, Congratulation, Grand Opening, Bride to be และงาน Event พร้อมส่ง/ติดตั้งทั่วกรุงเทพฯ",
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
      { "@type": "Service", "name": "บริการจัดลูกโป่งวันเกิด", "description": "จัดตกแต่งงานวันเกิดด้วยลูกโป่งสวยงามตามธีมและความต้องการ" },
      { "@type": "Service", "name": "บริการลูกโป่งเปิดร้าน", "description": "จัดลูกโป่งตกแต่งงานเปิดร้านเพื่อดึงดูดลูกค้าทั่วกรุงเทพฯ" },
      { "@type": "Service", "name": "บริการตกแต่งงานอีเวนท์", "description": "ตกแต่งสถานที่จัดงานอีเวนท์ด้วยลูกโป่งหลากหลายรูปแบบ" }
    ],
    "hasMap": "https://maps.app.goo.gl/iDZGSFzcEtGXBsnX6",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61580081014446",
      "https://www.instagram.com/balloonpa.bkk.ladprao/"
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_LD,
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>ร้านลูกโป่ง ลาดพร้าว จัดส่งทั่วกรุงเทพฯ 24 ชม. | BalloonPA</title>
        <meta
          name="description"
          content="บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening, Bride to be และงาน Event — ร้านตั้งอยู่ย่านลาดพร้าว บริการส่ง/ติดตั้งทั่วกรุงเทพฯ"
          key="desc"
        />
        <meta name="google-site-verification" content="E3kT3Yu9KiDaCqhKga5o5IySXVr5u6Jv3PXbaLnc1zU" />
        {/* Open Graph */}
        <meta property="og:title" content="ร้านลูกโป่งลาดพร้าว 24 ชม. จัดส่งทั่วกรุงเทพฯ | BalloonPA" />
        <meta property="og:description" content="บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening, Bride to be และงาน Event — ร้านตั้งอยู่ย่านลาดพร้าว บริการส่ง/ติดตั้งทั่วกรุงเทพฯ" />
        <meta property="og:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <meta property="og:url" content="https://balloonpabkk.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ร้านลูกโป่งลาดพร้าว 24 ชม. จัดส่งทั่วกรุงเทพฯ | BalloonPA" />
        <meta name="twitter:description" content="บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Grand Opening, Event ทั่วกรุงเทพฯ" />
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
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, '\\u003c'),
        }}
      />

      <Header />
      <Hero />
      <OccasionsNav />
      <Portfolio />
      <ShopSection products={initialProducts} categories={initialCategories} subCategories={initialSubCategories} />
      <FaqSection />
      <Footer />

      <FloatingContacts />
    </div>
  );
}
