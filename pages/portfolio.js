import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import Image from 'next/image';
import { BRAND } from '@/data/brand';

const portfolioItems = [
  { src: '/portfolio1.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่งวันเกิด Birthday Balloon Decoration กรุงเทพฯ' },
  { src: '/portfolio2.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่งงาน Congratulation และ Grand Opening ลาดพร้าว' },
  { src: '/portfolio3.webp', alt: 'ผลงาน BalloonPA ตกแต่งงาน Event Balloon Arch กรุงเทพฯ' },
  { src: '/portfolio4.webp', alt: 'ผลงาน BalloonPA จัดลูกโป่ง Bride to be Baby Shower Bangkok' },
  { src: '/portfolio5.webp', alt: 'ผลงาน BalloonPA ลูกโป่งตกแต่งงาน Backdrop ส่งทั่วกรุงเทพฯ' },
  { src: '/portfolio6.webp', alt: 'ผลงาน BalloonPA ลูกโป่งงานเปิดร้าน Corporate Event ย่านลาดพร้าว' },
];

const META = {
  title: 'ผลงาน BalloonPA | ตกแต่งลูกโป่งกรุงเทพฯ',
  description: 'ชมผลงานจริงจากลูกค้าของ BalloonPA ร้านลูกโป่งครบวงจรกรุงเทพฯ วันเกิด งานแต่ง Backdrop Balloon Arch และอื่นๆ',
  ogImage: '/portfolio1.webp',
  path: '/portfolio',
};

const HERO = {
  badge: 'ผลงานของเรา',
  h1: 'ผลงานจัดตกแต่งลูกโป่ง',
  description: 'ชมผลงานจริงจากลูกค้าของ BalloonPA ไม่ว่าจะเป็นงานวันเกิด งานแต่งงาน Backdrop หรือ Balloon Arch เราพร้อมสร้างสรรค์ทุกโอกาสพิเศษให้คุณ',
  lineText: 'สวัสดีครับ สนใจสั่งจัดลูกโป่ง ขอข้อมูลเพิ่มเติมด้วยนะครับ 🎈🙏',
};

export default function PortfolioPage() {
  return (
    <ContentPageLayout meta={META} hero={HERO}>
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">ผลงานบางส่วนของเรา</h2>
            <p className="mt-2 text-gray-500">ผลงานจริงจากลูกค้าที่ไว้วางใจ BalloonPA</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioItems.map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={alt}
                  width={0}
                  height={0}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </ContentPageLayout>
  );
}
