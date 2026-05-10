import OccasionPageLayout from '@/components/OccasionPageLayout';
import { getProductsBySubDir } from '@/utils/products.server';

const META = {
  title: 'ลูกโป่ง Baby Shower Welcome Baby กรุงเทพฯ | BalloonPA',
  description: 'บริการจัดลูกโป่ง Baby Shower Welcome Baby Photo Corner ออกแบบตามธีมน่ารัก จัดส่งและติดตั้งทั่วกรุงเทพฯ สั่งผ่าน LINE ได้เลย',
  ogImage: '/hero-balloon.webp',
  path: '/baby-shower',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการลูกโป่ง Baby Shower / Welcome Baby',
    description: 'บริการจัดลูกโป่งและตกแต่งงาน Baby Shower งาน Welcome Baby และงานฉลองต้อนรับสมาชิกใหม่ ออกแบบตามธีมน่ารัก พร้อมจัดส่งทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/baby-shower',
  },
};

const HERO = {
  badge: 'ลูกโป่ง Baby Shower',
  h1: 'บริการลูกโป่ง Baby Shower / Welcome Baby',
  description:
    'ต้อนรับสมาชิกใหม่ด้วยลูกโป่งสวยงาม บริการจัดตกแต่งงาน Baby Shower งาน Welcome Baby และงาน Gender Reveal ออกแบบตามธีมที่น่ารักและอบอุ่น พร้อมจัดส่งและติดตั้งทั่วกรุงเทพฯ',
  lineText: '🍼 สนใจสั่งลูกโป่ง Baby Shower/Welcome Baby ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
  productsTitle: 'แพ็กเกจลูกโป่ง Baby Shower',
};

export async function getStaticProps() {
  const products = await getProductsBySubDir('5.Welcome_Baby');
  return { props: { products } };
}

export default function BabyShowerPage({ products }) {
  return (
    <OccasionPageLayout meta={META} hero={HERO} keyword="Baby Shower" products={products} />
  );
}
