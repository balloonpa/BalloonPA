import Head from 'next/head';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import FloatingContacts from '@/components/FloatingContacts';
import Container from '@/components/Container';
import { BRAND } from '@/data/brand';

const LAST_UPDATED = '25 พฤษภาคม 2568';

const sections = [
  {
    title: '1. ผู้ควบคุมข้อมูลส่วนบุคคล',
    body: `BalloonPA Bangkok ("บริษัท") ดำเนินการเว็บไซต์ balloonpabkk.com ในฐานะผู้ควบคุมข้อมูลส่วนบุคคล ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)`,
  },
  {
    title: '2. ข้อมูลที่เราเก็บรวบรวม',
    list: [
      'หน้าเว็บที่เข้าชมและเส้นทางการนำทาง',
      'ตำแหน่งโดยประมาณในระดับจังหวัด/ประเทศ (จาก IP Address)',
      'ข้อมูลอุปกรณ์ ระบบปฏิบัติการ และเวอร์ชันเบราว์เซอร์',
      'เวลาที่ใช้บนหน้าเว็บ ระดับ Scroll และพฤติกรรมการใช้งาน (ผ่าน Session Cookie)',
      'ลิงก์ภายนอกที่คลิก เช่น LINE, Instagram, TikTok',
      'สินค้าที่เปิดดูรายละเอียดหรือติดต่อสอบถาม',
      'ตำแหน่ง GPS ที่แน่นอน (เฉพาะเมื่อคุณอนุญาตในเบราว์เซอร์ — ใช้ชั่วคราวเพื่อแสดงสาขาใกล้เคียง ไม่ได้เก็บบน Server)',
    ],
  },
  {
    title: '3. วัตถุประสงค์การใช้ข้อมูล',
    list: [
      'วิเคราะห์และปรับปรุงประสบการณ์การใช้งานเว็บไซต์',
      'วัดประสิทธิภาพช่องทางการสื่อสารและ Conversion',
      'ปรับปรุงการนำเสนอสินค้าให้ตรงกับความต้องการของลูกค้า',
      'แสดงสาขา BalloonPA ที่ใกล้คุณที่สุด',
    ],
  },
  {
    title: '4. ฐานทางกฎหมาย',
    list: [
      'ประโยชน์อันชอบธรรม (Legitimate Interest): สำหรับข้อมูล Analytics ทั่วไป เช่น Page Views, Device Info, Outbound Clicks',
      'ความยินยอม (Consent): สำหรับ Session Cookie และข้อมูลที่ต้องการความยินยอมชัดเจน',
      'Explicit Consent: สำหรับตำแหน่ง GPS — Browser จะขออนุญาตจากคุณโดยตรง',
    ],
  },
  {
    title: '5. บริการของบุคคลที่สาม',
    body: `เราใช้ Google Analytics 4 (GA4) เพื่อวิเคราะห์การใช้งานเว็บไซต์ Google ทำหน้าที่เป็นผู้ประมวลผลข้อมูล (Data Processor) ภายใต้นโยบายความเป็นส่วนตัวของ Google (policies.google.com/privacy) ข้อมูล IP Address จะถูก Anonymize โดย GA4 โดยอัตโนมัติ`,
  },
  {
    title: '6. ระยะเวลาการเก็บรักษาข้อมูล',
    list: [
      'ข้อมูล Google Analytics: ตามการตั้งค่าใน GA4 (สูงสุด 14 เดือน)',
      'ข้อมูลตำแหน่ง GPS: ไม่ได้เก็บบน Server ใช้ชั่วคราวในเบราว์เซอร์เท่านั้น',
      'Cookie ความยินยอม: เก็บใน Browser ของคุณจนกว่าจะล้าง Cookie',
    ],
  },
  {
    title: '7. นโยบาย Cookie',
    body: `เว็บไซต์ใช้ Cookie ประเภท First-party เพื่อวัดพฤติกรรมการใช้งาน (Session Tracking) คุณสามารถปฏิเสธ Cookie ที่ไม่จำเป็นได้ผ่าน Banner ที่แสดงเมื่อเข้าใช้งานครั้งแรก หรือล้างการตั้งค่าได้ตลอดเวลาผ่านการล้าง Cookie ในเบราว์เซอร์ของคุณ`,
  },
  {
    title: '8. สิทธิ์ของเจ้าของข้อมูล',
    list: [
      'สิทธิ์เข้าถึงข้อมูล (Right to Access)',
      'สิทธิ์แก้ไขข้อมูล (Right to Rectification)',
      'สิทธิ์ลบข้อมูล (Right to Erasure)',
      'สิทธิ์โอนข้อมูล (Right to Data Portability)',
      'สิทธิ์คัดค้านการประมวลผล (Right to Object)',
      'สิทธิ์เพิกถอนความยินยอม (Right to Withdraw Consent) ได้ตลอดเวลา',
    ],
  },
  {
    title: '9. ติดต่อเรา',
    body: `หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวหรือต้องการใช้สิทธิ์ตาม PDPA กรุณาติดต่อ`,
    contact: true,
  },
];

function Section({ title, body, list, contact }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      {body && <p className="text-gray-600 leading-relaxed">{body}</p>}
      {list && (
        <ul className="mt-2 space-y-2">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: BRAND.colors.pink }} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {contact && (
        <div className="mt-3 flex flex-col gap-1 text-gray-600">
          <span>Email: <a href={`mailto:${BRAND.email}`} className="underline" style={{ color: BRAND.colors.pink }}>{BRAND.email}</a></span>
          <span>LINE: <a href={BRAND.socials.lineUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: BRAND.colors.pink }}>@balloonpa.th</a></span>
        </div>
      )}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>นโยบายความเป็นส่วนตัว | BalloonPA</title>
        <meta name="description" content="นโยบายความเป็นส่วนตัวของ BalloonPA Bangkok — ข้อมูลที่เราเก็บ วัตถุประสงค์ และสิทธิ์ของคุณตาม PDPA พ.ศ. 2562" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://balloonpabkk.com/privacy/" />
      </Head>

      <Header />

      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #f8f9ff 100%)' }}
      >
        <Container>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow border text-sm mb-5 text-gray-600">
            🔒 ความเป็นส่วนตัว
          </div>
          <h1 className="text-4xl font-extrabold text-black mb-3">นโยบายความเป็นส่วนตัว</h1>
          <p className="text-gray-500 text-sm">ปรับปรุงล่าสุด: {LAST_UPDATED}</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-2xl text-sm leading-relaxed">
            {sections.map((s, i) => <Section key={i} {...s} />)}
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingContacts />
    </div>
  );
}
