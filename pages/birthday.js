import ProductPageLayout from '@/components/ProductPageLayout';
import { getProductsBySubDir } from '@/utils/products.server';

const META = {
  title: 'จัดลูกโป่งวันเกิด ลาดพร้าว กรุงเทพฯ 24 ชม. | BalloonPA',
  description: 'บริการจัดลูกโป่งวันเกิด ออกแบบตามธีมและสี Birthday Balloon Decoration จัดส่งและติดตั้งทั่วกรุงเทพฯ ปรึกษาฟรีตลอด 24 ชม. ผ่าน LINE',
  ogImage: '/hero-balloon.webp',
  path: '/birthday',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการจัดลูกโป่งวันเกิด',
    description: 'บริการออกแบบและจัดลูกโป่งวันเกิดครบวงจร ตกแต่งตามธีมและสีที่ต้องการ พร้อมจัดส่งและติดตั้งทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/birthday',
  },
};

const HERO = {
  badge: 'ลูกโป่งวันเกิด',
  h1: 'บริการจัดลูกโป่งวันเกิด',
  description:
    'บริการออกแบบและจัดลูกโป่งวันเกิดครบวงจร ตกแต่งตามธีมและสีที่ต้องการ ไม่ว่าจะเป็น Birthday Backdrop, Balloon Arch, ลูกโป่งฟอยล์ หรือชุดตกแต่งครบเซ็ต พร้อมจัดส่งและติดตั้งทั่วกรุงเทพฯ',
  lineText: '🎂 สนใจสั่งลูกโป่งวันเกิด ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
  productsTitle: 'แพ็กเกจลูกโป่งวันเกิดยอดนิยม',
};

export async function getStaticProps() {
  const products = await getProductsBySubDir('1.Birthday');
  return { props: { products } };
}

export default function BirthdayPage({ products }) {
  return (
    <ProductPageLayout meta={META} hero={HERO} keyword="วันเกิด" products={products} />
  );
}
