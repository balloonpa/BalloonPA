
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const portfolioItems = [
  { src: "/portfolio1.webp", alt: "ผลงาน BalloonPA จัดลูกโป่งวันเกิด Birthday Balloon Decoration กรุงเทพฯ" },
  { src: "/portfolio2.webp", alt: "ผลงาน BalloonPA จัดลูกโป่งงาน Congratulation และ Grand Opening ลาดพร้าว" },
  { src: "/portfolio3.webp", alt: "ผลงาน BalloonPA ตกแต่งงาน Event Balloon Arch กรุงเทพฯ" },
  { src: "/portfolio4.webp", alt: "ผลงาน BalloonPA จัดลูกโป่ง Bride to be Baby Shower Bangkok" },
  { src: "/portfolio5.webp", alt: "ผลงาน BalloonPA ลูกโป่งตกแต่งงาน Backdrop ส่งทั่วกรุงเทพฯ" },
  { src: "/portfolio6.webp", alt: "ผลงาน BalloonPA ลูกโป่งงานเปิดร้าน Corporate Event ย่านลาดพร้าว" },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <Container className="py-12">
        <SectionTitle sub="ผลงานบางส่วนจากลูกค้าจริง">Portfolio</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map(({ src, alt }) => (
            <div
              key={src}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <Image
                className="w-full object-cover aspect-[6/5] transition-transform duration-300 hover:scale-105"
                alt={alt}
                src={src}
                width={0}
                height={0}
              />


            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Portfolio;