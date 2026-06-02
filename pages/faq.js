import ContentPageLayout from '@/components/ContentPageLayout';
import { FaqSection, FAQ_ITEMS } from '@/components/sections/faq';

const META = {
  title: 'คำถามที่พบบ่อย | BalloonPA ร้านลูกโป่งกรุงเทพฯ',
  description: 'รวมคำถามที่พบบ่อยเกี่ยวกับบริการลูกโป่ง BalloonPA ราคา การจัดส่ง การสั่งงาน และอื่นๆ สอบถามเพิ่มเติมผ่าน LINE ได้ตลอด 24 ชั่วโมง',
  ogImage: '/hero-balloon.webp',
  path: '/faq',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
};

const HERO = {
  badge: 'คำถามที่พบบ่อย',
  h1: 'คำถามที่พบบ่อย',
  description: 'รวมคำถามและคำตอบที่ลูกค้าถามบ่อย หากยังมีข้อสงสัยเพิ่มเติม ทีมงานพร้อมให้คำปรึกษาฟรีผ่าน LINE ตลอด 24 ชั่วโมง',
  lineText: 'สวัสดีครับ มีคำถามเพิ่มเติมอยากสอบถามเรื่องบริการลูกโป่งครับ 🙏',
};

export default function FaqPage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>
      <FaqSection />
    </ContentPageLayout>
  );
}
