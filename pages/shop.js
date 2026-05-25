import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import ProductDetailModal from '@/components/ProductDetailModal';
import ProductCard from '@/components/ProductCard';
import { BRAND } from '@/data/brand';
import NameUtil from '@/utils/name.util';
import { getAllProducts } from '@/utils/products.server';

export async function getStaticProps() {
  const { categories, subCatagories, products } = await getAllProducts();
  return { props: { categories, subCatagories, products } };
}

export default function ShopPage({ categories, subCatagories, products }) {
  const [activeCat, setActiveCat] = useState(categories[0] ?? '');
  const [activeSub, setActiveSub] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { cat, sub } = router.query;
    if (cat && categories.includes(cat)) {
      setActiveCat(cat);
      setActiveSub(subCatagories[cat]?.includes(sub) ? sub : '');
      const el = document.getElementById('catalog');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [router.isReady, router.query.cat, router.query.sub]);

  const filtered = products.filter((p) => {
    if (p.category !== activeCat) return false;
    if (!activeSub) return true;
    return (p.sub || '') === activeSub;
  });

  const PINK = BRAND.colors.pink;
  const subs = subCatagories[activeCat] ?? [];

  const SIDEBAR_TRANSITION = 'width 0.3s ease-out, box-shadow 0.3s ease-out, background-color 0.2s ease-out, color 0.2s ease-out';

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>หมวดหมู่สินค้าลูกโป่ง | BalloonPA กรุงเทพฯ</title>
        <meta name="description" content="เลือกชมสินค้าลูกโป่งทุกหมวดหมู่ของ BalloonPA ตั้งแต่เซ็ตวันเกิด งานแต่งงาน Backdrop ไปจนถึงของขวัญพิเศษ สั่งซื้อง่ายผ่าน LINE ตลอด 24 ชั่วโมง" key="desc" />
        <meta property="og:title" content="หมวดหมู่สินค้าลูกโป่ง | BalloonPA" />
        <meta property="og:description" content="เลือกชมสินค้าลูกโป่งทุกหมวดหมู่ของ BalloonPA ตั้งแต่เซ็ตวันเกิด งานแต่งงาน Backdrop ไปจนถึงของขวัญพิเศษ สั่งซื้อง่ายผ่าน LINE ตลอด 24 ชั่วโมง" />
        <meta property="og:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://balloonpabkk.com/shop/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="หมวดหมู่สินค้าลูกโป่ง | BalloonPA กรุงเทพฯ" />
        <meta name="twitter:description" content="เลือกชมสินค้าลูกโป่งทุกหมวดหมู่ของ BalloonPA ตั้งแต่เซ็ตวันเกิด งานแต่งงาน Backdrop ไปจนถึงของขวัญพิเศษ สั่งซื้อง่ายผ่าน LINE ตลอด 24 ชั่วโมง" />
        <meta name="twitter:image" content="https://balloonpabkk.com/hero-balloon.webp" />
        <link rel="canonical" href="https://balloonpabkk.com/shop/" />
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
              🎈 BalloonPA · หมวดหมู่สินค้า
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-black">
              เลือกสินค้าลูกโป่ง
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              เลือกชมสินค้าลูกโป่งทุกหมวดหมู่ ตั้งแต่เซ็ตวันเกิด งานแต่งงาน Backdrop ไปจนถึงของขวัญพิเศษ
              สั่งซื้อได้ง่ายๆ ผ่าน LINE ตลอด 24 ชั่วโมง
            </p>
            <a
              href={BRAND.socials.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg transition hover:scale-105 inline-block"
              style={{ background: PINK }}
            >
              สอบถาม / สั่งงาน LINE
            </a>
          </div>
        </Container>
      </section>

      {/* ── Catalog ── */}
      <section id="catalog" className="py-12">
        <Container>
          <div className="lg:flex lg:gap-12">

            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-44 flex-shrink-0">
              <div className="flex flex-col">
                {categories.map((cat) => {
                  const active = cat === activeCat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setActiveCat(cat); setActiveSub(''); }}
                      className={`text-left px-4 py-3.5 text-sm rounded-r-xl ${
                        active
                          ? 'font-semibold shadow-md'
                          : 'font-medium text-gray-500 bg-white shadow-sm hover:text-gray-800'
                      }`}
                      style={active
                        ? { color: PINK, background: '#fff8fb', borderLeft: `4px solid ${PINK}`, width: 'calc(100% + 24px)', transition: SIDEBAR_TRANSITION }
                        : { width: '100%', transition: SIDEBAR_TRANSITION }}
                    >
                      {NameUtil.displayName(cat)}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content area */}
            <div className="flex-1 min-w-0">

              {/* Mobile tab bar */}
              <div className="flex lg:hidden gap-2 overflow-x-auto pb-3 mb-3 -mx-4 px-4">
                {categories.map((cat) => {
                  const active = cat === activeCat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setActiveCat(cat); setActiveSub(''); }}
                      className="flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm border-2 transition-colors duration-200"
                      style={active
                        ? { background: PINK, color: '#fff', borderColor: PINK }
                        : { background: '#fff', color: PINK, borderColor: PINK }}
                    >
                      {NameUtil.displayName(cat)}
                    </button>
                  );
                })}
              </div>

              {/* Active category title — desktop only */}
              <h2 className="hidden lg:block text-xl font-extrabold text-black mb-4">
                {NameUtil.displayName(activeCat)}
              </h2>

              {/* Sub-category chips */}
              {subs.length > 0 && (
                <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap">
                  <button
                    onClick={() => setActiveSub('')}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-colors duration-200"
                    style={activeSub === ''
                      ? { background: PINK, color: '#fff', borderColor: PINK }
                      : { background: '#fff', color: PINK, borderColor: PINK }}
                  >
                    ทั้งหมด
                  </button>
                  {subs.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSub(sub)}
                      className="flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-colors duration-200"
                      style={activeSub === sub
                        ? { background: PINK, color: '#fff', borderColor: PINK }
                        : { background: '#fff', color: PINK, borderColor: PINK }}
                    >
                      {NameUtil.displayName(sub)}
                    </button>
                  ))}
                </div>
              )}

              {/* Product grid */}
              {filtered.length === 0 ? (
                <div className="text-center text-gray-500 py-16">ยังไม่มีสินค้าในหมวดนี้</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filtered.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onOpenModal={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </div>
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

      <Footer />
      <FloatingContacts />

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
