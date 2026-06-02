import Container from "@/components/Container";
import { BRAND } from "@/data/brand";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  { src: "/hero-balloon.webp",  alt: "BalloonPA จัดลูกโป่งวันเกิด Birthday Balloon Decoration ลาดพร้าว กรุงเทพฯ" },
  { src: "/hero-balloon2.webp", alt: "BalloonPA ลูกโป่งงาน Grand Opening Congratulation จัดส่งทั่วกรุงเทพฯ" },
  { src: "/hero-balloon3.webp", alt: "BalloonPA ลูกโป่งงาน Event Bride to be Baby Shower ลาดพร้าว" },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
      {/* ชั้นภาพสไลด์ */}
      <div className="absolute inset-0">
        {heroImages.map(({ src, alt }, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            priority={i === 0}
            width={0}
            height={0}
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
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow border text-base mb-6 text-gray-800">
            🎈 Premium Balloon & Party Decoration
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {/* <img
              src={"/web_Icon.webp"}
              className="md:w-120 w-100 object-cover pointer-events-none"
            /> */}
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>PA</span>
          </h1>
          <p className="mb-8 text-xl sm:text-xl md:text-2xl leading-relaxed font-bold">
            ร้านลูกโป่งที่เข้าใจทุกความรู้สึก<span className="hidden sm:inline"> — เพราะรอยยิ้มของคุณคือความสำเร็จของเรา<br/>พร้อมดูแลและเนรมิตงานปาร์ตี้และเซอร์ไพรส์ในฝันของคุณให้เป็นจริง</span> 
          </p>
          <div className="flex gap-4">
            <a
              href="#shop"
              className="px-4 sm:px-7 py-4 rounded-xl text-white text-lg font-semibold shadow-lg"
              style={{ background: BRAND.colors.pink }}
            >
              เลือกชมสินค้า
            </a>
            <a
              href={BRAND.socials.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-7 py-4 rounded-xl border text-lg font-semibold shadow-lg"
              style={{ borderColor: BRAND.colors.pink, color: BRAND.colors.pink }}
            >
              แชทสั่งงาน LINE
            </a>

          </div>
        </div>
      </Container>

      {/* ปุ่มเลื่อนซ้าย/ขวา */}
      <button
        onClick={() => setIndex((index - 1 + heroImages.length) % heroImages.length)}
        className="absolute z-20 cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % heroImages.length)}
        className="absolute z-20 cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        aria-label="Next"
      >
        ›
      </button>

      {/* จุดบอกสถานะ */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
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