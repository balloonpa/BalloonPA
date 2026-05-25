import Head from 'next/head';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>บทความลูกโป่ง | เคล็ดลับตกแต่งงาน | BalloonPA</title>
        <meta name="description" content="รวมบทความและเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาส วันเกิด งานแต่งงาน งาน Event จาก BalloonPA ร้านลูกโป่งกรุงเทพฯ" key="desc" />
        <meta property="og:title" content="บทความลูกโป่ง | BalloonPA" />
        <meta property="og:description" content="รวมบทความและเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาสจาก BalloonPA" />
        <meta property="og:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://balloonpabkk.com/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="บทความลูกโป่ง | BalloonPA" />
        <meta name="twitter:description" content="รวมบทความและเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาสจาก BalloonPA" />
        <meta name="twitter:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <link rel="canonical" href="https://balloonpabkk.com/blog/" />
      </Head>

      <Header />

      {/* ── Hero ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #e8f6ff 100%)' }}
      >
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow border text-sm mb-6 text-gray-700">
              🎈 BalloonPA · บทความ
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black">
              บทความและเคล็ดลับ
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              รวมบทความ ไอเดีย และเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาสพิเศษ
              จากทีมงาน BalloonPA ที่มีประสบการณ์ตรง
            </p>
            <a
              href={BRAND.socials.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg transition hover:scale-105 inline-block"
              style={{ background: BRAND.colors.pink }}
            >
              สอบถาม / สั่งงาน LINE
            </a>
          </div>
        </Container>
      </section>

      {/* ── Coming Soon ── */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-lg mx-auto">
            <div className="text-6xl mb-6">✍️</div>
            <h2 className="text-2xl font-extrabold text-black mb-3">บทความกำลังจะมาเร็วๆ นี้</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              ทีมงานกำลังเตรียมบทความและเคล็ดลับดีๆ เกี่ยวกับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาส
              กลับมาติดตามได้เร็วๆ นี้
            </p>
            <a
              href="/"
              className="text-sm font-medium underline"
              style={{ color: BRAND.colors.pink }}
            >
              ← กลับหน้าหลัก BalloonPA
            </a>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingContacts />
    </div>
  );
}
