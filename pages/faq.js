import Head from 'next/head';
import Script from 'next/script';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import { FaqSection, FAQ_ITEMS } from '@/components/sections/faq';
import { BRAND } from '@/data/brand';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>คำถามที่พบบ่อย | BalloonPA ร้านลูกโป่งกรุงเทพฯ</title>
        <meta
          name="description"
          content="รวมคำถามที่พบบ่อยเกี่ยวกับบริการลูกโป่ง BalloonPA ราคา การจัดส่ง การสั่งงาน และอื่นๆ สอบถามเพิ่มเติมผ่าน LINE ได้ตลอด 24 ชั่วโมง"
          key="desc"
        />
        <meta property="og:title" content="คำถามที่พบบ่อย | BalloonPA" />
        <meta property="og:description" content="รวมคำถามที่พบบ่อยเกี่ยวกับบริการลูกโป่ง BalloonPA ราคา การจัดส่ง การสั่งงาน และอื่นๆ" />
        <meta property="og:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://balloonpabkk.com/faq/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="คำถามที่พบบ่อย | BalloonPA ร้านลูกโป่งกรุงเทพฯ" />
        <meta name="twitter:description" content="รวมคำถามที่พบบ่อยเกี่ยวกับบริการลูกโป่ง BalloonPA ราคา การจัดส่ง การสั่งงาน และอื่นๆ" />
        <meta name="twitter:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <link rel="canonical" href="https://balloonpabkk.com/faq/" />
      </Head>

      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, '\\u003c'),
        }}
      />

      <Header />

      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #e8f6ff 100%)' }}
      >
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow border text-sm mb-6 text-gray-700">
              🎈 BalloonPA · คำถามที่พบบ่อย
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black">
              คำถามที่พบบ่อย
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              รวมคำถามและคำตอบที่ลูกค้าถามบ่อย หากยังมีข้อสงสัยเพิ่มเติม ทีมงานพร้อมให้คำปรึกษาฟรีผ่าน LINE ตลอด 24 ชั่วโมง
            </p>
            <a
              href={`${BRAND.socials.lineUrl}?text=${encodeURIComponent('สวัสดีครับ มีคำถามเพิ่มเติมอยากสอบถามเรื่องบริการลูกโป่งครับ 🙏')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg transition hover:scale-105 inline-block"
              style={{ background: BRAND.colors.pink }}
            >
              ถามผ่าน LINE ได้เลย
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ accordion */}
      <FaqSection />

      <Footer />
      <FloatingContacts />
    </div>
  );
}
