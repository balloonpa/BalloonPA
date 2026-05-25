import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const portfolioItems = [
  { src: '/portfolio1.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่งวันเกิด Birthday Balloon Decoration กรุงเทพฯ' },
  { src: '/portfolio2.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่งงาน Congratulation และ Grand Opening ลาดพร้าว' },
  { src: '/portfolio3.webp', alt: 'ผลงาน BalloonPA ตกแต่งงาน Event Balloon Arch กรุงเทพฯ' },
  { src: '/portfolio4.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่ง Bride to be Baby Shower Bangkok' },
  { src: '/portfolio5.webp', alt: 'ผลงาน BalloonPA ลูกโป่งตกแต่งงาน Backdrop ส่งทั่วกรุงเทพฯ' },
  { src: '/portfolio6.webp', alt: 'ผลงาน BalloonPA ลูกโป่งงานเปิดร้าน Corporate Event ย่านลาดพร้าว' },
];

const lineUrl = `${BRAND.socials.lineUrl}?text=${encodeURIComponent('สวัสดีครับ สนใจสั่งจัดลูกโป่ง ขอข้อมูลเพิ่มเติมด้วยนะครับ 🎈🙏')}`;

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>ผลงาน BalloonPA | ตกแต่งลูกโป่งกรุงเทพฯ</title>
        <meta name="description" content="ชมผลงานจริงจากลูกค้าของ BalloonPA ร้านลูกโป่งครบวงจรกรุงเทพฯ วันเกิด งานแต่ง Backdrop Balloon Arch และอื่นๆ" key="desc" />
        <meta property="og:title" content="ผลงาน BalloonPA | ตกแต่งลูกโป่งกรุงเทพฯ" />
        <meta property="og:description" content="ชมผลงานจริงจากลูกค้าของ BalloonPA ร้านลูกโป่งครบวงจรกรุงเทพฯ" />
        <meta property="og:image" content="https://balloonpabkk.com/portfolio1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://balloonpabkk.com/portfolio/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ผลงาน BalloonPA | ตกแต่งลูกโป่งกรุงเทพฯ" />
        <meta name="twitter:description" content="ชมผลงานจริงจากลูกค้าของ BalloonPA ร้านลูกโป่งครบวงจรกรุงเทพฯ วันเกิด งานแต่ง Backdrop Balloon Arch และอื่นๆ" />
        <meta name="twitter:image" content="https://balloonpabkk.com/portfolio1.webp" />
        <link rel="canonical" href="https://balloonpabkk.com/portfolio/" />
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
              🎈 BalloonPA · ผลงานของเรา
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black">
              ผลงานจัดตกแต่งลูกโป่ง
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ชมผลงานจริงจากลูกค้าของ BalloonPA ไม่ว่าจะเป็นงานวันเกิด งานแต่งงาน Backdrop หรือ Balloon Arch
              เราพร้อมสร้างสรรค์ทุกโอกาสพิเศษให้คุณ
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg transition hover:scale-105"
                style={{ background: BRAND.colors.pink }}
              >
                สอบถาม / สั่งงาน LINE
              </a>
              <a
                href="/#shop"
                className="px-7 py-4 rounded-xl border text-lg font-semibold transition hover:scale-105"
                style={{ borderColor: BRAND.colors.pink, color: BRAND.colors.pink }}
              >
                ดูสินค้าทั้งหมด
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ผลงานบางส่วนของเรา</h2>
            <p className="mt-2 text-gray-500">ผลงานจริงจากลูกค้าที่ไว้วางใจ BalloonPA</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioItems.map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  width={0}
                  height={0}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Us ── */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-extrabold text-center mb-8 text-black">ทำไมต้องเลือก BalloonPA?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🚀', title: 'จัดส่งรวดเร็ว', desc: 'บริการจัดส่งและติดตั้งทั่วกรุงเทพฯ รับงานด่วนได้ตามความพร้อม' },
              { icon: '🎨', title: 'ออกแบบตามธีม', desc: 'รับออกแบบและจัดตกแต่งตามธีมและสีที่ต้องการทุกประเภท' },
              { icon: '💬', title: 'ปรึกษาฟรี 24 ชม.', desc: 'สอบถามและสั่งงานผ่าน LINE ได้ตลอด 24 ชั่วโมง ไม่มีค่าใช้จ่าย' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-10">
        <Container>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-3 text-black">พื้นที่ให้บริการ</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              บริการจัดส่งและติดตั้งทั่วกรุงเทพมหานครและปริมณฑล ครอบคลุมทุกย่าน ไม่ว่าจะเป็น
              <strong> ลาดพร้าว · รัชดาภิเษก · พระราม 9 · อโศก · สุขุมวิท · ดอนเมือง · จตุจักร · บางนา · บางเขน · วังทองหลาง</strong>
              {' '}และพื้นที่อื่นๆ สอบถามค่าจัดส่งได้ผ่าน LINE
            </p>
          </div>
        </Container>
      </section>

      {/* ── Back to main ── */}
      <div className="text-center pb-10">
        <a href="/" className="text-sm underline" style={{ color: BRAND.colors.pink }}>
          ← กลับหน้าหลัก BalloonPA
        </a>
      </div>

      <Footer />
      <FloatingContacts />
    </div>
  );
}
