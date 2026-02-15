
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

function Portfolio() {
  return (
    <section id="portfolio">
      <Container className="py-12">
        <SectionTitle sub="ผลงานบางส่วนจากลูกค้าจริง">Portfolio</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/portfolio1.webp",
            "/portfolio2.webp",
            "/portfolio3.webp",
            "/portfolio4.webp",
            "/portfolio5.webp",
            "/portfolio6.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <Image
                className="w-full object-cover aspect-[6/5] transition-transform duration-300 hover:scale-105"
                alt={`portfolio ${i + 1}`}
                fetchPriority="high"
                loading="lazy"
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