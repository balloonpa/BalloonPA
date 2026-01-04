import Container from "@/components/Container";
import { BRAND } from "@/data/brand";
import { useEffect, useState } from "react";

function Hero() {
  const images = ["/hero-balloon.jpg", "/hero-balloon2.jpg", "/hero-balloon3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
      {/* ชั้นภาพสไลด์ */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Balloon Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        {/* ม่านเงาทับภาพ (ลดความสว่าง) */}
        <div className="absolute inset-0 bg-black/25 md:bg-black/50" />
      </div>

      {/* เนื้อหาบนภาพ */}
      <Container className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow border text-base mb-6 text-gray-800">
            🎈 Premium Balloon & Party Decoration
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {/* <img
              src={"/web_Icon.png"}
              className="md:w-120 w-100 object-cover pointer-events-none"
            /> */}
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>PA</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl leading-relaxed font-bold">
            บริการจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening,
            Bride to be และงาน Event — บริการส่ง/ติดตั้งทั่วกรุงเทพฯ
          </p>
          <div className="flex gap-4">
            <a
              href="#shop"
              className="px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg"
              style={{ background: BRAND.colors.pink }}
            >
              เลือกชมสินค้า
            </a>
            <a
              href={BRAND.socials.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border text-lg font-semibold shadow-lg"
              style={{ borderColor: BRAND.colors.pink, color: BRAND.colors.pink }}
            >
              แชทสั่งงาน LINE
            </a>

          </div>
        </div>
      </Container>

      {/* ปุ่มเลื่อนซ้าย/ขวา */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        aria-label="Next"
      >
        ›
      </button>

      {/* จุดบอกสถานะ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;