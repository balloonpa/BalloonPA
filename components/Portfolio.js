
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

function Portfolio() {
  return (
    <div id="portfolio">
      <Container className="py-12">
        <SectionTitle sub="ผลงานบางส่วนจากลูกค้าจริง">Portfolio</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/portfolio1.jpg",
            "/portfolio2.jpg",
            "/portfolio3.jpg",
            "/portfolio4.jpg",
            "/portfolio5.jpg",
            "/portfolio6.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={src}
                className="w-full object-cover aspect-[6/5] transition-transform duration-300 hover:scale-105"
                alt={`portfolio ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Portfolio;