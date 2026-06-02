import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

const META = {
  title: 'Organizer | BalloonPA — บริการจัดงานอีเวนท์ครบวงจร กรุงเทพฯ',
  description: 'BalloonPA รับจัดงานอีเวนท์ครบวงจร ออกแบบธีม ตกแต่งสถานที่ พร้อมทีมงานมืออาชีพดูแลทุกขั้นตอน บริการทั่วกรุงเทพฯ ปรึกษาฟรีตลอด 24 ชม. ผ่าน LINE',
  ogImage: '/hero-balloon.webp',
  path: '/organizer',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการจัดงานอีเวนท์ครบวงจร',
    description: 'บริการออกแบบและจัดงานอีเวนท์ครบวงจร ตกแต่งสถานที่ ออกแบบธีม ดูแลงานตั้งแต่ต้นจนจบ ทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/organizer',
  },
};

const HERO = {
  badge: 'Event Organizer',
  h1: 'บริการจัดงานอีเวนท์ครบวงจร',
  description: 'รับจัดงานทุกประเภท ไม่ว่าจะเป็นงานวันเกิด งานแต่งงาน งานบริษัท หรืองานพิเศษต่างๆ ครบวงจรตั้งแต่ออกแบบธีม ตกแต่งสถานที่ ไปจนถึงการดูแลงานทุกขั้นตอน',
  lineText: '🎉 สนใจบริการจัดงานอีเวนท์ ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
};

const SERVICES = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: 'ออกแบบธีมงาน',
    desc: 'ออกแบบธีมและโทนสีให้ตรงกับความต้องการ ตั้งแต่งานขนาดเล็กไปจนถึงงานระดับองค์กร',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>),
    title: 'ตกแต่งสถานที่',
    desc: 'จัดตกแต่งสถานที่ครบวงจร ทั้ง Backdrop ซุ้มลูกโป่ง เสาลูกโป่ง และจุดถ่ายรูปไฮไลท์',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
    title: 'ดูแลงานตั้งแต่ต้นจนจบ',
    desc: 'ทีมงานดูแลทุกขั้นตอน ตั้งแต่วางแผน เตรียมงาน ติดตั้ง จนถึงเก็บงาน ไม่ต้องกังวลเรื่องใด',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>),
    title: 'Drone ถ่ายภาพรวมงานมุมสูง',
    desc: 'บันทึกบรรยากาศงานทั้งหมดจากมุมสูงด้วยโดรน ให้ทุกภาพดูยิ่งใหญ่ สวยงาม น่าประทับใจ',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a6 6 0 0 1 12 0v2" /></svg>),
    title: 'ช่างถ่ายภาพ',
    desc: 'ทีมช่างภาพมืออาชีพบันทึกทุกช่วงเวลาสำคัญของงาน ทั้งภาพนิ่งและวิดีโอ ให้ทุกความประทับใจถูกเก็บไว้อย่างครบถ้วน',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
    title: 'ปรึกษาฟรี ไม่มีค่าใช้จ่าย',
    desc: 'สอบถามได้ตลอด 24 ชั่วโมงผ่าน LINE พร้อมเสนอแพ็กเกจที่เหมาะสมกับงบประมาณของคุณ',
  },
];

const EVENT_TYPES = [
  { emoji: '🎂', label: 'วันเกิด' },
  { emoji: '💍', label: 'งานแต่งงาน' },
  { emoji: '🎓', label: 'งานรับปริญญา' },
  { emoji: '🏢', label: 'งานองค์กร' },
  { emoji: '🎊', label: 'งานเปิดร้าน' },
  { emoji: '👶', label: 'Baby Shower' },
  { emoji: '🥂', label: 'งานครบรอบ' },
  { emoji: '🎉', label: 'งานพิเศษอื่นๆ' },
];

const STEPS = [
  { num: '01', title: 'ปรึกษาและวางแผน', desc: 'แชทผ่าน LINE เพื่อแจ้งรายละเอียดงาน วันเวลา สถานที่ และงบประมาณ' },
  { num: '02', title: 'รับใบเสนอราคา', desc: 'ทีมงานออกแบบและส่งใบเสนอราคาให้ภายใน 24 ชั่วโมง' },
  { num: '03', title: 'ยืนยันและเตรียมงาน', desc: 'เมื่อตกลงราคา ทีมงานเริ่มเตรียมวัสดุและนัดหมายวันติดตั้ง' },
  { num: '04', title: 'ติดตั้งและส่งมอบงาน', desc: 'ทีมงานเข้าติดตั้งตามเวลานัด พร้อมดูแลจนงานเสร็จสมบูรณ์' },
];

export default function OrganizerPage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>

      {/* What we offer */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">สิ่งที่เราดูแลให้คุณ</h2>
            <p className="mt-2 text-gray-500">ครอบคลุมทุกส่วนของงาน ไม่ต้องเป็นห่วง</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200">
                <span className="flex-shrink-0 mt-0.5" style={{ color: PINK }}>{s.icon}</span>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Event types */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-black">รับจัดงานทุกประเภท</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {EVENT_TYPES.map((e) => (
              <div key={e.label} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
                <span className="text-lg">{e.emoji}</span>
                {e.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Insurance / Safety Guarantee */}
      <section className="py-10">
        <Container>
          <div className="max-w-3xl mx-auto rounded-2xl border border-gray-100 bg-gray-50 p-6 flex gap-5 items-start">
            <span className="flex-shrink-0 mt-1" style={{ color: PINK }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <div>
              <h3 className="font-extrabold text-lg text-gray-900 mb-1">Insurance / Safety Guarantee</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                หากลูกโป่งแตกหรือแฟบก่อนเริ่มงาน <strong className="text-gray-700">BalloonPA รับประกันและเคลมให้</strong> (เฉพาะบางเงื่อนไข) ไม่ต้องกังวลเรื่องความเสียหายก่อนงาน
                ทีมงานพร้อมดูแลตั้งแต่ติดตั้งจนถึงรื้อถอนทั่วกรุงเทพฯ
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ขั้นตอนการทำงาน</h2>
            <p className="mt-2 text-gray-500">ง่าย สะดวก ไม่ยุ่งยาก</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold mb-4 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${PINK}, #F0449A)` }}>
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
