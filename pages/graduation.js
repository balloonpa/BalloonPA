import ProductPageLayout from '@/components/ProductPageLayout';
import { getProductsBySubDir } from '@/utils/products.server';

const META = {
  title: 'ลูกโป่งรับปริญญา ปัจฉิม กรุงเทพฯ | BalloonPA',
  description: 'บริการจัดลูกโป่งวันรับปริญญาและงานปัจฉิม Graduation Balloon Decoration ออกแบบตามธีม จัดส่งทั่วกรุงเทพฯ สั่งงานผ่าน LINE',
  ogImage: '/hero-balloon.webp',
  path: '/graduation',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'บริการลูกโป่งวันรับปริญญา / ปัจฉิม',
    description: 'บริการจัดลูกโป่งและตกแต่งงานวันรับปริญญา งานปัจฉิม และงานสำเร็จการศึกษา พร้อมจัดส่งทั่วกรุงเทพฯ',
    provider: { '@type': 'LocalBusiness', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    url: 'https://balloonpabkk.com/graduation',
  },
};

const HERO = {
  badge: 'ลูกโป่งรับปริญญา',
  h1: 'บริการลูกโป่งวันรับปริญญา / ปัจฉิม',
  description:
    'ฉลองความสำเร็จด้วยลูกโป่งสวยงาม ตกแต่งงานรับปริญญา งานปัจฉิม และงานสำเร็จการศึกษา ออกแบบตามธีมและสีที่ต้องการ พร้อมจัดส่งและถ่ายรูปสวยงามทั่วกรุงเทพฯ',
  lineText: '🎓 สนใจสั่งลูกโป่งรับปริญญา/ปัจฉิม ช่วยแนะนำแพ็กเกจด้วยนะครับ 🙏',
  productsTitle: 'แพ็กเกจลูกโป่งรับปริญญา',
};

export async function getStaticProps() {
  const products = await getProductsBySubDir('2.Graduation');
  return { props: { products } };
}

export default function GraduationPage({ products }) {
  return (
    <ProductPageLayout meta={META} hero={HERO} keyword="รับปริญญา" products={products} />
  );
}
