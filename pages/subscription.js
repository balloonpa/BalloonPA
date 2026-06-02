import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

const META = {
  title: 'Monthly Balloon Subscription | BalloonPA — บริการสมาชิกลูกโป่งรายเดือน',
  description: 'BalloonPA บริการสมาชิกลูกโป่งรายเดือน เหมาะสำหรับร้านค้า คลินิก Showroom รถยนต์ ที่ต้องการลูกโป่งตกแต่งสถานที่สม่ำเสมอ ราคาประหยัด จัดส่งทั่วกรุงเทพฯ',
  ogImage: '/hero-balloon.webp',
  path: '/subscription',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Monthly Balloon Subscription — บริการสมาชิกลูกโป่งรายเดือน',
    description: 'บริการสมาชิกลูกโป่งรายเดือนสำหรับร้านค้า คลินิก และ Showroom ที่ต้องการลูกโป่งตกแต่งสถานที่อย่างสม่ำเสมอ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/subscription',
  },
};

const HERO = {
  badge: 'Monthly Subscription',
  h1: 'บริการสมาชิกลูกโป่งรายเดือน',
  description: 'เหมาะสำหรับร้านค้า คลินิก หรือ Showroom ที่ต้องการลูกโป่งตกแต่งสถานที่อย่างสม่ำเสมอ ไม่ต้องสั่งทีละครั้ง ประหยัดเวลา ประหยัดค่าใช้จ่าย',
  lineText: '🎈 สนใจบริการสมาชิกลูกโป่งรายเดือน ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
};

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'ประหยัดกว่าสั่งรายครั้ง',
    desc: 'สมาชิกรายเดือนได้ราคาพิเศษดีกว่าการสั่งแต่ละครั้ง ยิ่งใช้บ่อยยิ่งคุ้มค่า เหมาะกับธุรกิจที่ต้องการลูกโป่งต่อเนื่อง',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'จัดส่งตามรอบ ไม่ต้องนึกถึง',
    desc: 'กำหนดรอบการจัดส่งล่วงหน้า ทีมงาน BalloonPA จัดส่งตามนัดหมาย ไม่ต้องโทรสั่งซ้ำทุกเดือน',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'ปรับแต่งสีและธีมได้',
    desc: 'เลือกสีและสไตล์ลูกโป่งให้ตรงกับ Brand Identity ของธุรกิจ สร้างบรรยากาศที่สอดคล้องกับภาพลักษณ์ร้าน',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'จัดส่งทั่วกรุงเทพฯ',
    desc: 'ครอบคลุมทุกพื้นที่ในกรุงเทพฯ พร้อมบริการเปลี่ยนลูกโป่งให้ใหม่อยู่เสมอ รักษาภาพลักษณ์ร้านให้ดูดีตลอดเวลา',
  },
];

const WHO_ITS_FOR = [
  { emoji: '🏪', label: 'ร้านค้า / Retail' },
  { emoji: '🏥', label: 'คลินิก / โรงพยาบาล' },
  { emoji: '🚗', label: 'Showroom รถยนต์' },
  { emoji: '🏨', label: 'โรงแรม / รีสอร์ท' },
  { emoji: '🍽️', label: 'ร้านอาหาร / คาเฟ่' },
  { emoji: '🏢', label: 'ออฟฟิศ / Co-working' },
];

const STEPS = [
  { num: '01', title: 'ปรึกษาและเลือกแพ็กเกจ', desc: 'แชทผ่าน LINE แจ้งประเภทธุรกิจ ขนาดพื้นที่ และธีมสีที่ต้องการ' },
  { num: '02', title: 'กำหนดรอบจัดส่ง', desc: 'ตกลงรอบการจัดส่งรายเดือน วันและเวลาที่สะดวก' },
  { num: '03', title: 'จัดส่งตามนัด', desc: 'ทีมงานจัดส่งลูกโป่งใหม่พร้อมเปลี่ยนชุดเก่าออก ไม่ต้องดูแลเอง' },
  { num: '04', title: 'ปรับเปลี่ยนได้ทุกเดือน', desc: 'เปลี่ยนธีมตามเทศกาลหรือโปรโมชันของร้านได้ตามต้องการ' },
];

export default function SubscriptionPage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>

      {/* Benefits */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ทำไมต้องเลือก Subscription</h2>
            <p className="mt-2 text-gray-500">ประหยัดกว่า สะดวกกว่า ไม่ต้องจัดการเอง</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 mt-0.5" style={{ color: PINK }}>{b.icon}</span>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
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
            <h2 className="text-2xl font-extrabold text-black">เหมาะกับธุรกิจประเภทไหน?</h2>
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

      {/* Process */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">เริ่มต้นง่ายมาก</h2>
            <p className="mt-2 text-gray-500">4 ขั้นตอน แล้วปล่อยให้เราดูแลที่เหลือ</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold mb-4 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${PINK}, #F0449A)` }}
                >
                  {s.num}
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </ContentPageLayout>
  );
}
