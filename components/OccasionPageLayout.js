import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import { BRAND } from '@/data/brand';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

/**
 * Shared layout for all occasion landing pages (birthday, graduation, wedding, etc.)
 *
 * Props:
 *   meta:    { title, description, ogImage, path, jsonLd? }
 *   hero:    { badge, h1, description, lineText, productsTitle }
 *   keyword: keyword used in product alt texts (e.g. "วันเกิด")
 *   products: [{ id, name, price, image }]
 */
export default function OccasionPageLayout({ meta, hero, keyword, products }) {
  const lineUrl = `${BRAND.socials.lineUrl}?text=${encodeURIComponent(hero.lineText)}`;

  const lineLinkFor = (p) =>
    `${BRAND.socials.lineUrl}?text=${encodeURIComponent(
      `🎈 สนใจสั่งซื้อ\nชื่อสินค้า: ${p.name}\nราคา: ฿${p.price}\nโปรดแจ้งรายละเอียดเพิ่มเติมครับ 🙏`
    )}`;

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} key="desc" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://balloonpabkk.com${meta.ogImage}`} />
        <meta property="og:url" content={`https://balloonpabkk.com${meta.path}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://balloonpabkk.com${meta.path}`} />
      </Head>

      {meta.jsonLd && (
        <Script
          id={`ld-${meta.path.replace(/\//g, '')}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      )}

      <Header />

      {/* ── Hero ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #e8f6ff 100%)' }}
      >
        <Container>
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow border text-sm mb-6 text-gray-700"
            >
              🎈 BalloonPA · {hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black">
              {hero.h1}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{hero.description}</p>
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

      {/* ── Products ── */}
      {products.length > 0 && (
        <section className="py-16">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-black">{hero.productsTitle}</h2>
              <p className="mt-2 text-gray-500">เลือกแพ็กเกจที่ถูกใจ สั่งงานผ่าน LINE ได้เลย</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border shadow-sm overflow-hidden bg-white"
                >
                  <Image
                    src={p.image}
                    width={0}
                    height={0}
                    alt={`${p.name} ลูกโป่ง${keyword} — BalloonPA กรุงเทพฯ`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-4">
                    <div className="font-semibold mb-1">{p.name}</div>
                    <div className="font-bold mb-3">฿{p.price}</div>
                    <a
                      href={lineLinkFor(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center px-3 py-2 rounded-lg text-white transition hover:scale-[1.02]"
                      style={{ background: BRAND.colors.line }}
                    >
                      สั่งงาน LINE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

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
