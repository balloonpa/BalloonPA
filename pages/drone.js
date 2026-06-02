import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

const META = {
  title: 'Drone Service | BalloonPA — บริการถ่ายภาพโดรนมุมสูงสำหรับงานอีเวนท์',
  description: 'BalloonPA Drone Service รับถ่ายภาพและวิดีโองานอีเวนท์มุมสูงด้วยโดรน ครอบคลุมงานแต่งงาน งานองค์กร งานปาร์ตี้ทุกขนาด บันทึกทุกความประทับใจในมุมมองที่พิเศษ',
  ogImage: '/hero-balloon.webp',
  path: '/drone',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Drone Service — บริการถ่ายภาพโดรนมุมสูง',
    description: 'บริการถ่ายภาพและวิดีโองานอีเวนท์มุมสูงด้วยโดรน สำหรับงานแต่งงาน งานองค์กร และงานปาร์ตี้ทุกประเภท',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/drone',
  },
};

const HERO = {
  badge: 'Drone Service',
  h1: 'บริการถ่ายภาพโดรนมุมสูง',
  description: 'บันทึกทุกช่วงเวลาสำคัญของงานคุณจากมุมสูงด้วยโดรน ไม่ว่าจะเป็นงานแต่งงาน งานองค์กร หรืออีเวนท์ Full-scale ให้ทุกภาพดูยิ่งใหญ่และน่าประทับใจ',
  lineText: '🚁 สนใจบริการถ่ายภาพโดรน ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
};

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'ภาพมุมสูงภาพรวมงาน',
    desc: 'บันทึกบรรยากาศงานทั้งหมดจากมุมสูง ให้เห็นภาพรวมของสถานที่และผู้ร่วมงานได้อย่างสวยงามครบถ้วน',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'วิดีโอความละเอียดสูง',
    desc: 'บันทึกวิดีโอคุณภาพสูง คมชัด ทุกรายละเอียดของงานถูกเก็บไว้อย่างครบถ้วนและสวยงาม',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'ตรงเวลา ไม่พลาดทุกโมเมนต์',
    desc: 'ทีมงานเข้าพื้นที่ก่อนเวลา เตรียมอุปกรณ์พร้อมก่อนงานเริ่ม ไม่พลาดทุกช่วงเวลาสำคัญของงาน',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'ปลอดภัย มีมาตรฐาน',
    desc: 'ทีมงานมีประสบการณ์การบินโดรนในพื้นที่จำกัด พร้อมปฏิบัติตามกฎหมายและมาตรฐานความปลอดภัย',
  },
];

const OCCASIONS = [
  { emoji: '💍', label: 'งานแต่งงาน' },
  { emoji: '🏢', label: 'งานองค์กร' },
  { emoji: '🎊', label: 'งานเปิดตัว' },
  { emoji: '🎓', label: 'งานรับปริญญา' },
  { emoji: '🎂', label: 'งานวันเกิด' },
  { emoji: '🎉', label: 'อีเวนท์ Full-scale' },
];

export default function DronePage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>

      {/* Features */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ทำไมต้องถ่ายโดรนกับ BalloonPA</h2>
            <p className="mt-2 text-gray-500">บันทึกงานของคุณในมุมที่ไม่เคยเห็นมาก่อน</p>
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

      {/* Occasions */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-black">เหมาะกับงานทุกประเภท</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {OCCASIONS.map((o) => (
              <div key={o.label} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
                <span className="text-lg">{o.emoji}</span>
                {o.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </ContentPageLayout>
  );
}
