import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

const META = {
  title: 'Studio ถ่ายภาพ Boxshot | BalloonPA — บริการถ่ายภาพสินค้าคุณภาพสูง',
  description: 'BalloonPA Studio บริการถ่ายภาพสินค้า Boxshot คุณภาพสูง เหมาะสำหรับร้านค้าออนไลน์ ผลิตภัณฑ์ทุกประเภท รูปสวย คมชัด เหมาะลง Social Media และ E-commerce',
  ogImage: '/hero-balloon.webp',
  path: '/studio',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Studio ถ่ายภาพ Boxshot',
    description: 'บริการถ่ายภาพสินค้า Boxshot คุณภาพสูง สำหรับร้านค้าออนไลน์และธุรกิจทุกประเภท',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/studio',
  },
};

const HERO = {
  badge: 'Studio ถ่ายภาพ',
  h1: 'บริการถ่ายภาพสินค้า Boxshot',
  description: 'ถ่ายภาพสินค้าของคุณให้สวยงาม คมชัด และเป็นมืออาชีพ ด้วย Boxshot Studio พร้อมแสงสตูดิโอที่ได้มาตรฐาน เหมาะสำหรับลง Social Media, E-commerce และสื่อโฆษณาทุกประเภท',
  lineText: '📸 สนใจบริการถ่ายภาพสินค้า Boxshot ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
};

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: 'ภาพคมชัด พร้อมใช้งาน',
    desc: 'ถ่ายด้วยกล้องและแสงสตูดิโอมาตรฐาน ได้ภาพที่คมชัด สวยงาม พร้อมนำไปใช้งานได้ทันที',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'พื้นหลังสะอาด เน้นสินค้า',
    desc: 'Boxshot ให้พื้นหลังสีขาวหรือสีที่เลือกได้ เน้นตัวสินค้าให้โดดเด่น เหมาะกับ E-commerce ทุกแพลตฟอร์ม',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'เหมาะกับสินค้าทุกขนาด',
    desc: 'รองรับสินค้าขนาดเล็กถึงกลาง ไม่ว่าจะเป็นสินค้าบรรจุภัณฑ์ ลูกโป่ง ของขวัญ หรือผลิตภัณฑ์ทั่วไป',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'รวดเร็ว ส่งไฟล์ได้ทันที',
    desc: 'ถ่ายเสร็จรีทัชและส่งไฟล์คุณภาพสูงให้รวดเร็ว พร้อมนำไปใช้งานได้เลย ไม่ต้องรอนาน',
  },
];

const WHO_ITS_FOR = [
  { emoji: '🛍️', label: 'ร้านค้าออนไลน์' },
  { emoji: '🎈', label: 'แพ็กเกจลูกโป่ง' },
  { emoji: '🎁', label: 'ของขวัญและ Gift Set' },
  { emoji: '💄', label: 'สินค้าบิวตี้ / สกินแคร์' },
  { emoji: '🍽️', label: 'Food & Beverage' },
  { emoji: '🏷️', label: 'บรรจุภัณฑ์สินค้า' },
];

export default function StudioPage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>

      {/* Features */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ทำไมต้องถ่ายกับ BalloonPA Studio</h2>
            <p className="mt-2 text-gray-500">ภาพสวย คุ้มค่า พร้อมใช้งานได้ทันที</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 mt-0.5" style={{ color: PINK }}>{f.icon}</span>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-black">เหมาะกับสินค้าทุกประเภท</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.label} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
                <span className="text-lg">{w.emoji}</span>
                {w.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </ContentPageLayout>
  );
}
