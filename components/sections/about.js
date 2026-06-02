
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/data/brand";

const PINK = "#FF8FB4";
const BLUE = BRAND.colors.blue;

const services = [
  {
    title: "ออกแบบได้ดั่งใจตามสไตล์คุณ",
    desc: "รับออกแบบและสร้างสรรค์ลูกโป่งตามรูปแบบ ธีม และโทนสีที่คุณต้องการ เพื่อให้ตรงกับคอนเซปต์และสร้างเอกลักษณ์เฉพาะตัวในทุกโอกาสสำคัญ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "ให้คำปรึกษาพร้อมจัดสรรตามงบประมาณ",
    desc: "บริการให้คำปรึกษาโดยทีมงานมืออาชีพ เพื่อให้ได้เซ็ตลูกโป่งที่สวยงามตรงใจที่สุดภายใต้งบประมาณที่คุณเป็นคนกำหนดเอง",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "บริการจัดส่งและติดตั้งทั่วกรุงเทพฯ",
    desc: "อำนวยความสะดวกด้วยบริการจัดส่งด่วนพร้อมทีมงานติดตั้งมืออาชีพที่ครอบคลุมทุกพื้นที่ทั่วกรุงเทพฯ มั่นใจได้ในความรวดเร็วและงานที่สมบูรณ์แบบ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "เปิดให้บริการ 24 ชั่วโมง ไม่มีวันหยุด",
    desc: "ร้านลูกโป่งพร้อมให้บริการจองและจัดส่งตลอด 24 ชั่วโมง เพื่อรองรับทุกการเซอร์ไพรส์และการจัดงานในทุกช่วงเวลาที่คุณต้องการ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  // {
  //   title: "ปลอดภัยด้วยก๊าซฮีเลียมแท้ 100% ไม่ติดไฟ",
  //   desc: "มั่นใจในความปลอดภัยสูงสุดด้วยก๊าซฮีเลียมแท้บริสุทธิ์ 100% ที่มีคุณสมบัติไม่ติดไฟ พร้อมใบรับรองมาตรฐานสากลสำหรับการจัดงานทุกประเภท",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
  //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  //     </svg>
  //   ),
  // },
  // **Do not remove this comment**
  // {
  //   title: "รับจัดตกแต่งลูกโป่งนอกสถานที่",
  //   desc: "บริการเนรมิตสถานที่จริงด้วยทีมงานจัดตกแต่งลูกโป่งนอกสถานที่ ทั้งในบ้าน โรงแรม และออฟฟิศ พร้อมเปลี่ยนทุกพื้นที่ให้กลายเป็นจุดไฮไลท์สุดประทับใจ",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
  //       <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  //       <polyline points="9 22 9 12 15 12 15 22" />
  //     </svg>
  //   ),
  // },
];

const NAV_SERVICES = [
  {
    href: '/shop',
    label: 'Shop',
    sub: 'เลือกชมแพ็กเกจลูกโป่งทุกแบบ สั่งง่าย จัดส่งทั่วกรุงเทพฯ',
    bg: 'linear-gradient(135deg, #FF8FB4 0%, #F0449A 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="9" rx="7" ry="8" />
        <path d="M10 17 Q12 19.5 14 17" />
        <line x1="12" y1="19.5" x2="11.5" y2="22" />
      </svg>
    ),
  },
  {
    href: '/organizer',
    label: 'Organizer',
    sub: 'รับจัดงานครบวงจร ออกแบบธีม ตกแต่งสถานที่',
    bg: 'linear-gradient(135deg, #6EC8F0 0%, #1D8FD4 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    href: '/drone',
    label: 'Drone',
    sub: 'ถ่ายภาพโดรนมุมสูงสำหรับทุกงาน',
    bg: 'linear-gradient(135deg, #1E1E3F 0%, #6D28D9 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
];

const portfolioRow = [
  { src: "/portfolio1.webp", alt: "ผลงาน BalloonPA จัดลูกโป่งวันเกิด Birthday Balloon Decoration กรุงเทพฯ" },
  { src: "/portfolio2.webp", alt: "ผลงาน BalloonPA จัดลูกโป่งงาน Congratulation และ Grand Opening ลาดพร้าว" },
  { src: "/portfolio3.webp", alt: "ผลงาน BalloonPA ตกแต่งงาน Event Balloon Arch กรุงเทพฯ" },
  { src: "/portfolio4.webp", alt: "ผลงาน BalloonPA จัดลูกโป่ง Bride to be Baby Shower Bangkok" },
  { src: "/portfolio5.webp", alt: "ผลงาน BalloonPA ลูกโป่งตกแต่งงาน Backdrop ส่งทั่วกรุงเทพฯ" },
  { src: "/portfolio6.webp", alt: "ผลงาน BalloonPA ลูกโป่งงานเปิดร้าน Corporate Event ย่านลาดพร้าว" },
];

function About() {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* Left column: text + portfolio images */}
        <div className="flex gap-5">
          <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ backgroundColor: PINK }} />

          <div className="flex flex-col gap-5 w-full">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                About <span style={{ color: PINK }}>Balloon</span><span style={{ color: BLUE }}>PA</span>
              </h2>
              <p className="mt-2 text-lg font-medium" style={{ color: PINK }}>
                สร้างสรรค์ความประทับใจในทุกโอกาสพิเศษ
              </p>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              BalloonPA คือผู้เชี่ยวชาญด้านการตกแต่งลูกโป่งแบบครบวงจร ด้วยก๊าซฮีเลียมแท้ 100% ที่ปลอดภัย ไม่ติดไฟ
              ทีมงานของเราพร้อมรับจัดตกแต่งนอกสถานที่ทั้งในบ้าน โรงแรม และออฟฟิศทั่วกรุงเทพฯ
              พร้อมให้คำปรึกษาและจัดสรรรูปแบบลูกโป่งที่สวยงามที่สุดภายใต้งบที่คุณกำหนด
            </p>

            <Link
              href="/portfolio"
              className="inline-block self-start px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80"
              style={{ backgroundColor: PINK }}
            >
              ชมผลงานของเรา
            </Link>

            {/* 6 images in 3×2 grid */}
            <div className="grid grid-cols-3 gap-3">
              {portfolioRow.map(({ src, alt }) => (
                <div key={src} className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={src}
                    alt={alt}
                    width={0}
                    height={0}
                    className="w-full object-cover aspect-[6/5] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: service nav circles + feature list */}
        <div className="flex flex-col gap-7">
          <h3 className="text-xl font-bold text-gray-900">บริการของเรา</h3>

          {/* 3 circular nav buttons */}
          <div className="flex gap-3 justify-between">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center gap-2 flex-1 group"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </div>
                <span className="font-bold text-sm text-gray-900 text-center leading-tight">{s.label}</span>
                <span className="text-xs text-gray-500 text-center leading-snug">{s.sub}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100" />

          {/* Service feature list */}
          <div className="flex flex-col gap-5">
            {services.map((s) => (
              <div key={s.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1" style={{ color: PINK }}>
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
