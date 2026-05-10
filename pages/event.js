import OccasionPageLayout from '@/components/OccasionPageLayout';
import { getProductsBySubDir } from '@/utils/products.server';

const META = {
  title: 'ลูกโป่งเปิดร้าน Grand Opening งาน Event กรุงเทพฯ | BalloonPA',
  description: 'บริการจัดลูกโป่งงานเปิดร้าน Grand Opening Congratulation งาน Event และ Corporate Event ออกแบบตามธีม จัดส่งและติดตั้งทั่วกรุงเทพฯ',
  ogImage: '/hero-balloon.webp',
  path: '/event',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการลูกโป่งงาน Event และเปิดร้าน',
    description: 'บริการจัดลูกโป่งและตกแต่งงาน Event งานเปิดร้าน Grand Opening และ Corporate Event ออกแบบตามธีมบริษัท พร้อมจัดส่งทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/event',
  },
};

const HERO = {
  badge: 'ลูกโป่งงาน Event',
  h1: 'บริการลูกโป่งงานเปิดร้าน / Event',
  description:
    'ดึงดูดลูกค้าและสร้างความประทับใจด้วยลูกโป่งสวยงาม บริการจัดตกแต่งงานเปิดร้าน Grand Opening งาน Congratulation Corporate Event และงาน Event ทุกประเภท ออกแบบตามธีมและสีแบรนด์ของคุณ พร้อมจัดส่งทั่วกรุงเทพฯ',
  lineText: '🎊 สนใจสั่งลูกโป่งงานเปิดร้าน/Event ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
  productsTitle: 'แพ็กเกจลูกโป่งงาน Event และเปิดร้าน',
};

export async function getStaticProps() {
  const products = await getProductsBySubDir('4.Event');
  return { props: { products } };
}

export default function EventPage({ products }) {
  return (
    <OccasionPageLayout meta={META} hero={HERO} keyword="งาน Event เปิดร้าน" products={products} />
  );
}
