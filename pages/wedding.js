import OccasionPageLayout from '@/components/OccasionPageLayout';
import { getProductsBySubDir } from '@/utils/products.server';

const META = {
  title: 'ลูกโป่งงานแต่ง Bride to be กรุงเทพฯ | BalloonPA',
  description: 'บริการจัดลูกโป่งงานแต่งงาน Bridal Shower Bride to be Wedding Balloon Decoration ออกแบบตามธีม จัดส่งและติดตั้งทั่วกรุงเทพฯ',
  ogImage: '/hero-balloon.webp',
  path: '/wedding',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการลูกโป่งงานแต่งงาน / Bride to be',
    description: 'บริการจัดลูกโป่งและตกแต่งงานแต่งงาน งาน Bride to be และ Bridal Shower ออกแบบตามธีมรัก พร้อมจัดส่งทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/wedding',
  },
};

const HERO = {
  badge: 'ลูกโป่งงานแต่งงาน',
  h1: 'บริการลูกโป่งงานแต่ง / Bride to be',
  description:
    'สร้างบรรยากาศโรแมนติกด้วยลูกโป่งสวยงาม ตกแต่งงานแต่งงาน งาน Bride to be Bridal Shower และงานฉลองความรัก ออกแบบตามธีมที่ต้องการ พร้อมจัดส่งและติดตั้งทั่วกรุงเทพฯ',
  lineText: '💍 สนใจสั่งลูกโป่งงานแต่ง/Bride to be ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
  productsTitle: 'แพ็กเกจลูกโป่งงานแต่งงาน',
};

export async function getStaticProps() {
  const products = await getProductsBySubDir('3.Wedding');
  return { props: { products } };
}

export default function WeddingPage({ products }) {
  return (
    <OccasionPageLayout meta={META} hero={HERO} keyword="งานแต่งงาน" products={products} />
  );
}
