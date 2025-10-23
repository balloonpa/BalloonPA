// pages/index.js — Balloonpa (Next.js Pages Router)
import { useEffect, useState } from "react";

/** ========= BRAND / CONTACT ========= */
const BRAND = {
  name: "Balloonpa",
  logoSrc: "/balloonpa-logo.png",
  colors: {
    pink: "#FF8FB4",
    blue: "#6EC8F0",
    line: "#9BE79D",
    lineHover: "#7CD67E",
  },
  phoneE164: "+66822435496",
  phoneDisplay: "082-243-5496",
  email: "balloonpa.lp@gmail.com",
  city: "BANGKOK",

  socials: {
    instagram: "https://instagram.com/balloonpa.bkk",
    messenger: "https://www.facebook.com/balloonpa.bkk",
    tiktok: "https://www.tiktok.com/@balloonpabkk",
    maps: "",
    lineUrl: "https://lin.ee/4rWUJv9", // ✅ ใช้ลิงก์สั้นแทน
  },
};


/** ========= DATA (ตัวอย่าง) ========= */
const products = [
  // Recommendation - Balloon
  { id: 1, name: "Balloon Set (S)", price: "23,990", image: "/recommended-b1.jpg", category: "Recommendation", sub: "Balloon Set" },
  { id: 2, name: "Balloon Set (M)", price: "23,990", image: "/recommended-b2.jpg", category: "Recommendation", sub: "Balloon Set" },
  { id: 3, name: "Balloon Set (L)", price: "23,990", image: "/recommended-b3.jpg", category: "Recommendation", sub: "Balloon Set" },

  // Recommendation - Event
  { id: 4, name: "Grand Openning Balloon (Pair)", price: "23,990", image: "/recommended-e1.jpg", category: "Recommendation", sub: "Event Set" },
  { id: 5, name: "Grand Openning Balloon (Pair-Connect)", price: "23,990", image: "/recommended-e2.jpg", category: "Recommendation", sub: "Event Set" },
  { id: 6, name: "Backdrop", price: "150", image: "/recommended-e3.jpg", category: "Recommendation", sub: "Event Set" },



  // Occasion - Birthday
  { id: 7, name: "Balloon Set (S)", price: "23,990", image: "/bd-balloon-set-s.jpg", category: "Occasion", sub: "Birthday" },
  { id: 8, name: "Balloon Set (M)", price: "23,990", image: "/bd-balloon-set-m.jpg", category: "Occasion", sub: "Birthday" },
  { id: 9, name: "Balloon Set (L)", price: "23,990", image: "/bd-balloon-set-l.jpg", category: "Occasion", sub: "Birthday" },
  { id: 10, name: "Birthday Set", price: "23,990", image: "/bd-set.jpg", category: "Occasion", sub: "Birthday" },
  { id: 11, name: "BD Backdrop", price: "23,990", image: "/bd-backdrop.jpg", category: "Occasion", sub: "Birthday" },
  { id: 12, name: "Flower Bouquet Balloon", price: "23,990", image: "/bd-flower-balloon.jpg", category: "Occasion", sub: "Birthday" },
  { id: 13, name: "HBD Balloon", price: "23,990", image: "/hbd-foil.jpg", category: "Occasion", sub: "Birthday" }, 
  { id: 14, name: "Age Balloon", price: "23,990", image: "/age-foil.jpg", category: "Occasion", sub: "Birthday" }, 
  { id: 15, name: "HBD & Age Balloon", price: "23,990", image: "/bd-foil.jpg", category: "Occasion", sub: "Birthday" }, 
  { id: 16, name: "Extra Gift - Flower", price: "23,990", image: "/bd-flower.jpg", category: "Occasion", sub: "Birthday" }, 
  { id: 17, name: "Extra Gift - Teddy", price: "23,990", image: "/bd-teddy.jpg", category: "Occasion", sub: "Birthday" }, 

  // Occasion - Graduation
  { id: 18, name: "Balloon Set (S)", price: "23,990", image: "/grad-balloon-set-s.jpg", category: "Occasion", sub: "Graduation" },
  { id: 19, name: "Balloon Set (M)", price: "23,990", image: "/grad-balloon-set-m.jpg", category: "Occasion", sub: "Graduation" },
  { id: 20, name: "Balloon Set (L)", price: "23,990", image: "/grad-balloon-set-l.jpg", category: "Occasion", sub: "Graduation" },
  { id: 21, name: "Graduation Backdrop", price: "23,990", image: "/graduation-backdrop.jpg", category: "Occasion", sub: "Graduation" }, 
  { id: 22, name: "Flower Bouquet Balloon", price: "23,990", image: "/grad-flower-balloon.jpg", category: "Occasion", sub: "Graduation" },
  { id: 23, name: "Extra Gift - Flower", price: "23,990", image: "/grad-flower.jpg", category: "Occasion", sub: "Graduation" },
  { id: 24, name: "Extra Gift - Teddy", price: "23,990", image: "/grad-teddy.jpg", category: "Occasion", sub: "Birthday" }, 

  // Occasion - Wedding
  { id: 25, name: "Balloon Set (S)", price: "23,990", image: "/wedding-balloon-set-s.jpg", category: "Occasion", sub: "Wedding" },
  { id: 26, name: "Balloon Set (M)", price: "23,990", image: "/wedding-balloon-set-m.jpg", category: "Occasion", sub: "Wedding" },
  { id: 27, name: "Balloon Set (L)", price: "23,990", image: "/wedding-balloon-set-l.jpg", category: "Occasion", sub: "Wedding" },
  { id: 28, name: "Wedding Set", price: "23,990", image: "/wedding-set.jpg", category: "Occasion", sub: "Wedding" },
  { id: 29, name: "Balloon Photo Corner", price: "23,990", image: "/wedding-backdrop.jpg", category: "Occasion", sub: "Wedding" },
  { id: 30, name: "Flower Bouquet Balloon", price: "23,990", image: "/wedding-flower-balloon.jpg", category: "Occasion", sub: "Wedding" },
  { id: 31, name: "Extra Gift - Flower", price: "23,990", image: "/wedding-flower.jpg", category: "Occasion", sub: "Wedding" }, 
  { id: 32, name: "Extra Gift - Teddy", price: "23,990", image: "/wedding-teddy.jpg", category: "Occasion", sub: "Wedding" }, 

  // Occasion - Event
  { id: 33, name: "Balloon Set", price: "23,990", image: "/event-balloon-set.jpg", category: "Occasion", sub: "Event" },
  { id: 34, name: "Grand Openning Balloon", price: "23,990", image: "/1-grand-openning-balloon.jpg", category: "Occasion", sub: "Event" },
  { id: 35, name: "Grand Openning Balloon (Pair)", price: "23,990", image: "/2-grand-openning-balloon.jpg", category: "Occasion", sub: "Event" },
  { id: 36, name: "Grand Openning Balloon (Pair-Connect)", price: "23,990", image: "/2-grand-openning-balloon_connected.jpg", category: "Occasion", sub: "Event" },
  { id: 37, name: "Event Backdrop", price: "23,990", image: "/event-backdrop.jpg", category: "Occasion", sub: "Event" },
  { id: 38, name: "Balloon Arch", price: "23,990", image: "/event-balloon-arch.jpg", category: "Occasion", sub: "Event" },
  { id: 39, name: "Flower Bouquet Balloon", price: "23,990", image: "/event-flower-balloon.jpg", category: "Occasion", sub: "Event" },
  { id: 40, name: "Extra Gift - Flower", price: "23,990", image: "/event-flower.jpg", category: "Occasion", sub: "Event" }, 

  // Occasion - Welcome Baby
  { id: 41, name: "Balloon Set (S)", price: "23,990", image: "/baby-balloon-set-s.jpg", category: "Occasion", sub: "Welcome Baby" },
  { id: 42, name: "Balloon Set (M)", price: "23,990", image: "/baby-balloon-set-m.jpg", category: "Occasion", sub: "Welcome Baby" },
  { id: 43, name: "Balloon Set (L)", price: "23,990", image: "/baby-balloon-set-l.jpg", category: "Occasion", sub: "Welcome Baby" },
  { id: 44, name: "Welcome Baby Set", price: "23,990", image: "/baby-set.jpg", category: "Occasion", sub: "Welcome Baby" },
  { id: 45, name: "Welcome Baby Photo Corner", price: "23,990", image: "/baby-backdrop.jpg", category: "Occasion", sub: "Welcome Baby" },
  { id: 46, name: "Mystery Box", price: "23,990", image: "/baby-mystery-box.jpg", category: "Occasion", sub: "Welcome Baby" },

  // Occasion - Special Days & Festival
  { id: 47, name: "V-Day Balloon Set", price: "23,990", image: "/v-day-balloon.jpg", category: "Occasion", sub: "Event" },
  { id: 48, name: "Special Event Backdrop", price: "23,990", image: "/special-backdrop.jpg", category: "Occasion", sub: "Special Days & Festival" },
  { id: 49, name: "Special Balloon Arch", price: "23,990", image: "/festival-balloon-arch.jpg", category: "Occasion", sub: "Special Days & Festival" },
  { id: 50, name: "Special Flower Bouquet Balloon", price: "23,990", image: "/festival-flower-balloon.jpg", category: "Occasion", sub: "Special Days & Festival" },
  { id: 51, name: "Extra Gift - Flower", price: "23,990", image: "/special-flower.jpg", category: "Occasion", sub: "Special Days & Festival" }, 



  // For Who - Couple
  { id: 52, name: "Balloon Set (S)", price: "23,990", image: "/couple-balloon-set-s.jpg", category: "For Who", sub: "Couple" },
  { id: 53, name: "Balloon Set (M)", price: "23,990", image: "/couple-balloon-set-m.jpg", category: "For Who", sub: "Couple" },
  { id: 54, name: "Balloon Set (L)", price: "23,990", image: "/couple-balloon-set-l.jpg", category: "For Who", sub: "Couple" },
  { id: 55, name: "Anniversary Set", price: "23,990", image: "/anniversary-set.jpg", category: "For Who", sub: "Couple" },
  { id: 56, name: "Flower Bouquet Balloon", price: "23,990", image: "/couple-flower-balloon.jpg", category: "For Who", sub: "Couple" },
  { id: 57, name: "D Kan Na Balloon Box", price: "23,990", image: "/d-kan-balloon-box.jpg", category: "For Who", sub: "Couple" },
  { id: 58, name: "Anniversary Balloon", price: "23,990", image: "/anniversary-foil.jpg", category: "For Who", sub: "Couple" },
  { id: 59, name: "Extra Gift - Flower", price: "23,990", image: "/couple-flower.jpg", category: "For Who", sub: "Couple" },
  { id: 60, name: "Extra Gift - Teddy", price: "23,990", image: "/couple-teddy.jpg", category: "For Who", sub: "Couple" }, 

  // For Who - Friend
  { id: 61, name: "Balloon Set (S)", price: "23,990", image: "/friend-balloon-set-s.jpg", category: "For Who", sub: "Friend" },
  { id: 62, name: "Balloon Set (M)", price: "23,990", image: "/friend-balloon-set-m.jpg", category: "For Who", sub: "Friend" },
  { id: 63, name: "Balloon Set (L)", price: "23,990", image: "/friend-balloon-set-l.jpg", category: "For Who", sub: "Friend" },
  { id: 64, name: "Extra Gift - Flower", price: "23,990", image: "/friend-flower.jpg", category: "For Who", sub: "Friend" }, 


  // For Who - Parent and Kid
  { id: 65, name: "Balloon Set (S)", price: "23,990", image: "/family-balloon-set-s.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 66, name: "Balloon Set (M)", price: "23,990", image: "/family-balloon-set-m.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 67, name: "Balloon Set (L)", price: "23,990", image: "/family-balloon-set-l.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 68, name: "Family Set", price: "23,990", image: "/family-set.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 69, name: "Family Photo Corner", price: "23,990", image: "/family-backdrop.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 70, name: "Cartoon Balloon", price: "23,990", image: "/cartoon-foil.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 71, name: "Cartoon Sculpture Balloon", price: "23,990", image: "/cartoon-sculpture.jpg", category: "For Who", sub: "Parent and Kid" },
  { id: 72, name: "Mystery Box", price: "23,990", image: "/family-mystery-box.jpg", category: "For Who", sub: "Parent and Kid" },

  // For Who - Patient
  { id: 73, name: "Balloon Set (S)", price: "23,990", image: "/hospital-balloon-set-s.jpg", category: "For Who", sub: "Patient" },
  { id: 74, name: "Balloon Set (M)", price: "23,990", image: "/hospital-balloon-set-m.jpg", category: "For Who", sub: "Patient" },
  { id: 75, name: "Balloon Set (L)", price: "23,990", image: "/hospital-balloon-set-l.jpg", category: "For Who", sub: "Patient" },

  // For Who - Corporate
  { id: 76, name: "Balloon Set", price: "23,990", image: "/corp-balloon-set.jpg", category: "For Who", sub: "Corporate" },
  { id: 77, name: "Grand Openning Balloon", price: "23,990", image: "/1-corp-balloon.jpg", category: "For Who", sub: "Corporate" },
  { id: 78, name: "Grand Openning Balloon (Pair)", price: "23,990", image: "/2-corp-balloon.jpg", category: "For Who", sub: "Corporate" },
  { id: 79, name: "Grand Openning Balloon (Pair-Connect)", price: "23,990", image: "/2-corp-balloon_connected.jpg", category: "For Who", sub: "Corporate" },
  { id: 80, name: "Event Backdrop", price: "23,990", image: "/corp-backdrop.jpg", category: "For Who", sub: "Corporate" },
  { id: 81, name: "Balloon Arch", price: "23,990", image: "/corp-balloon-arch.jpg", category: "For Who", sub: "Corporate" },
  { id: 82, name: "Flower Bouquet Balloon", price: "23,990", image: "/corp-flower-balloon.jpg", category: "For Who", sub: "Corporate" },
  { id: 83, name: "Extra Gift - Flower", price: "23,990", image: "/corp-flower.jpg", category: "For Who", sub: "Corporate" }, 

  // Supplies - Accessory
  { id: 84, name: "Letter Balloon", price: "23,990", image: "/letter-foil.jpg", category: "Supplies", sub: "Accessory" }, // Foil Balloon ตัวหนังสือ
  { id: 85, name: "Number Balloon", price: "23,990", image: "/number-foil.jpg", category: "Supplies", sub: "Accessory" }, // Foil Balloon ตัวเลข

  // Supplies - Extra Gift
  { id: 86, name: "Extra Gift - Flower", price: "23,990", image: "/flower.jpg", category: "Supplies", sub: "Extra Gift" },
  { id: 87, name: "Extra Gift - Teddy", price: "23,990", image: "/teddy.jpg", category: "Supplies", sub: "Extra Gift" },
  { id: 88, name: "Mystery Box", price: "23,990", image: "/mystery-box.jpg", category: "Supplies", sub: "Extra Gift" },


  
  // Recommendation - Promotion
  { id: 89, name: "Birthday Set", price: "23,990", image: "/recommended-p1.jpg", category: "Recommendation", sub: "Promotion" },
  { id: 90, name: "Anniversary Set", price: "23,990", image: "/recommended-p2.jpg", category: "Recommendation", sub: "Promotion" },
  { id: 91, name: "Congratulations Set", price: "23,990", image: "/recommended-p3.jpg", category: "Recommendation", sub: "Promotion" },

  // Recommendation - On a Budget
  { id: 92, name: "On a Budget Set 1", price: "500", image: "/recommended-bg1.jpg", category: "Recommendation", sub: "On a Budget Set" },
  { id: 93, name: "On a Budget Set 2", price: "1,000", image: "/recommended-bg2.jpg", category: "Recommendation", sub: "On a Budget Set" },
  { id: 94, name: "Custom Set", price: "starting at 500", image: "/recommended-bg3.jpg", category: "Recommendation", sub: "On a Budget Set" }
];

const categories = [
  "Recommendation",
  "Occasion",
  "For Who",
  "Supplies"
];

// เมนูย่อยในแต่ละหมวด (ถ้าหมวดไหนยังไม่อยากแสดง sub ก็ใส่ [] ได้)
const SUBCATS = {
  "Recommendation": ["Promotion", "Balloon Set", "Event Set", "On a Budget Set"],
  "Occasion": ["Birthday", "Graduation", "Wedding", "Event", "Welcome Baby", "Special Days & Festival"], 
  "For Who": ["Couple", "Friend", "Parent and Kid", "Corporate","Patient"],
  "Supplies": ["Accessory", "Extra Gift"]
};


/** ========= UI Helpers ========= */
function Container({ children, className = "" }) {
  return <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>;
}
function SectionTitle({ children, sub }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-black">{children}</h2>
      {sub && <p className="mt-1 text-black">{sub}</p>}
    </div>
  );
}

/** ========= Sections ========= */
function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={BRAND.logoSrc} className="w-9 h-9 object-contain" alt="logo" />
          <div className="text-2xl font-extrabold">
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>pa</span>
          </div>
        </div>

        {/* ✅ ปุ่ม "สั่งงาน" */}
      {/* Header เดิม */}
<nav className="flex gap-3">
<a
  href={BRAND.socials.lineUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-full text-white font-medium shadow-lg transform transition-transform duration-300 hover:scale-105"
  style={{ background: BRAND.colors.pink }}
>
  สั่งงาน
</a>
</nav>

      </Container>
    </div>
  );
}


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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
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
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>pa</span>
          </h1>
          <p className="mb-8 text-xl md:text-2xl leading-relaxed font-bold">
            รับจัดลูกโป่ง/ตกแต่งงานสำหรับ Birthday, Congratulation, Grand Opening,
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
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

/*function OccasionChips() {
  return (
    <Container className="py-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((ch) => (
          <span key={ch} className="px-4 py-2 rounded-full bg-white border shadow-sm text-sm text-black">
            {ch}
          </span>
        ))}
      </div>
    </Container>
  );
}*/

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

function ShopSection() {
  const [cat, setCat] = useState(categories[0]);
  const [sub, setSub] = useState("");

  // รีเซ็ตเมนูย่อยเมื่อสลับหมวด
  useEffect(() => setSub(""), [cat]);

  // ปุ่มแบบเดียวกับ "สั่งงาน"
  const Chip = ({ label, active, onClick, small = false }) => {
    const base = `
      inline-flex items-center justify-center whitespace-nowrap
      rounded-full font-medium transition transform
      hover:scale-105 focus:outline-none
    `;
    const size = small ? "px-3 py-1.5 text-sm" : "px-5 py-2";
    const clsActive = `text-white shadow-lg`;
    const clsIdle = `bg-white border-2`;

    return (
      <button
        onClick={onClick}
        className={`${base} ${size} ${active ? clsActive : clsIdle}`}
        // ใช้ชมพูแบรนด์แบบปุ่มสั่งงาน
        style={
          active
            ? { background: BRAND.colors.pink, borderColor: BRAND.colors.pink }
            : { borderColor: BRAND.colors.pink, color: BRAND.colors.pink }
        }
        onMouseEnter={(e) => {
          if (!active) {
            e.currentTarget.style.background = BRAND.colors.pink;
            e.currentTarget.style.color = "#fff";
          }
        }}
        onMouseLeave={(e) => {
          if (!active) {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = BRAND.colors.pink;
          }
        }}
      >
        {label}
      </button>
    );
  };

// ✅ พรีฟิลข้อความไป LINE OA โดยใช้ลิงก์ lin.ee
const lineLinkFor = (p) =>
  `${BRAND.socials.lineUrl}?text=` +
  encodeURIComponent(
    `🎈 สนใจสั่งซื้อสินค้า\n` +
    `ชื่อสินค้า: ${p.name}\n` +
    `หมวดหมู่: ${p.category}${p.sub ? " - " + p.sub : ""}\n` +
    `ราคา: ฿${p.price}\n` +
    `โปรดแจ้งรายละเอียดเพิ่มเติมครับ 🙏`
  );

  // กรองรายการตามหมวด/ย่อย
  const list = products.filter((p) => {
    if (p.category !== cat) return false;
    if (!sub) return true;
    return (p.sub || "") === sub;
  });

  return (
    <div id="shop">
      <Container className="py-12">
        <SectionTitle sub="เลือกหมวดหมู่เพื่อดูเซ็ตยอดนิยม">Shop</SectionTitle>

        {/* หมวดหลัก */}
        <div className="flex gap-3 overflow-auto pb-2 mb-4 justify-center">
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              active={c === cat}
              onClick={() => setCat(c)}
            />
          ))}
        </div>

        {/* เมนูย่อย */}
        {SUBCATS[cat] && SUBCATS[cat].length > 0 && (
          <div className="flex gap-2 overflow-auto pb-2 mb-6 justify-center">
            <Chip
              small
              label="ทั้งหมด"
              active={sub === ""}
              onClick={() => setSub("")}
            />
            {SUBCATS[cat].map((s) => (
              <Chip
                small
                key={s}
                label={s}
                active={sub === s}
                onClick={() => setSub(s)}
              />
            ))}
          </div>
        )}

        {/* รายการสินค้า */}
        {list.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            ยังไม่มีสินค้าในหมวดนี้
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border shadow-sm overflow-hidden bg-white text-black"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {p.category}
                    {p.sub ? ` · ${p.sub}` : ""}
                  </div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="font-bold mb-3">{p.price} ฿</div>
                  <a
                    href={lineLinkFor(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center px-3 py-2 rounded-lg text-white shadow-lg transition hover:scale-[1.02]"
                    style={{ background: BRAND.colors.line }}
                >
                    แชทสั่งซื้อทาง LINE
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}



function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/95 text-black backdrop-blur">
      <Container className="py-8 grid md:grid-cols-3 gap-6 items-center">
        {/* โลโก้ + ชื่อแบรนด์ */}
        <div className="flex items-center gap-3">
          <img src={BRAND.logoSrc} className="w-10 h-10 object-contain" alt="logo" />
          <div className="font-bold">
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>pa</span>
          </div>
        </div>

        {/* ข้อมูลติดต่อ (Email ขึ้นบรรทัดใหม่) */}
        <div className="text-sm leading-relaxed">
          LINE:{" "}
        <a
          className="underline"
          href={BRAND.socials.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LINE Official
        </a>

          <br />
          Email:{" "}
          <a className="underline" href={`mailto:${BRAND.email}`}>
            {BRAND.email}
          </a>
        </div>

        {/* ลิขสิทธิ์ */}
        <div className="text-sm md:text-right">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}


/** ========= Floating “Contact us” ========= */
function FloatingContacts() {
  const [open, setOpen] = useState(false);
  const [firstPress, setFirstPress] = useState(false);

  // ✅ ใช้ลิงก์ LINE แบบ lin.ee ที่กำหนดไว้ใน BRAND.socials.lineUrl
  // ถ้าไม่ได้ใส่ไว้ จะ fallback ไปวิธีเดิม (แต่แนะนำให้ใส่ lineUrl เสมอ)
  const lineUrl =
    BRAND.socials.lineUrl ||
    `https://line.me/ti/p/~${(BRAND.lineId || "").replace("@", "")}`;

  const phoneUrl  = `tel:${BRAND.phoneE164}`;
  const emailUrl  = `mailto:${BRAND.email}`;
  const igUrl     = BRAND.socials.instagram || "";
  const tiktokUrl = BRAND.socials.tiktok || "";

  const Item = ({ href, bg, title, children, delay = 0 }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        shadow-xl ring-1 ring-black/5
        transform transition duration-300
        hover:scale-110 hover:shadow-2xl
        opacity-0 translate-y-2
        ${open ? "opacity-100 translate-y-0" : firstPress ? "contact-down" : ""}
      `}
      style={{ background: bg, transitionDelay: `${delay}ms` }}
    >
      {children}
    </a>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* ปุ่มหลัก (สีชมพู + เอฟเฟกต์แบบ Portfolio) */}
      <button
        onClick={() => {
          setOpen(v => !v);
          setFirstPress(true);
          setTimeout(() => setFirstPress(false), 500);
        }}
        className={`
          px-4 h-12 rounded-full flex items-center gap-2
          text-white font-semibold shadow-2xl
          transform transition duration-300
          hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          focus:outline-none
        `}
        style={{ background: BRAND.colors.pink }}
        aria-expanded={open}
        aria-label="Contact us"
      >
        <span>Contact us</span>
        <span className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}>＋</span>
      </button>

      {/* เมนูเด้งขึ้น (เรียงลง-บนขวา) */}
      <div
        className={`
          absolute right-0 bottom-14 flex flex-col items-end gap-3
          ${open ? "contact-up" : ""}
        `}
      >
        {/* โทร */}
        <Item href={phoneUrl} bg={BRAND.colors.pink} title="โทร">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.44 12.44 0 00.67 2.73 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.35-1.35a2 2 0 012.11-.45 12.44 12.44 0 002.73.67A2 2 0 0122 16.92z" />
          </svg>
        </Item>

        {/* LINE */}
        <Item href={lineUrl} bg={BRAND.colors.line} title="LINE" delay={60}>
          <img src="/line-icon.png" alt="LINE" className="w-6 h-6" />
        </Item>

        {/* Instagram (ถ้ามี) */}
        {igUrl && (
          <Item href={igUrl} bg="#ffffff" title="Instagram" delay={120}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="url(#ig)">
              <defs>
                <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="50%" stopColor="#d62976" />
                  <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
              </defs>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3.001.001A1.5 1.5 0 0118.5 6.5z"/>
            </svg>
          </Item>
        )}

        {/* TikTok (ถ้ามี) */}
        {tiktokUrl && (
          <Item href={tiktokUrl} bg="#000000" title="TikTok" delay={180}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#fff" viewBox="0 0 24 24">
              <path d="M16 6.3c1.1.9 2.5 1.5 4 1.6V12a9.2 9.2 0 01-4-1.1v5.3a5.7 5.7 0 11-5.7-5.7c.2 0 .5 0 .7.1v3a2.7 2.7 0 102 2.6V2h3v4.3z"/>
            </svg>
          </Item>
        )}

        {/* Email */}
        <Item href={emailUrl} bg="#ffffff" title="Email" delay={240}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
            <path d="M22 6l-10 7L2 6"/>
          </svg>
        </Item>
      </div>
    </div>
  );
}



/** ========= APP ========= */
export default function Balloonpa() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      {/* <OccasionChips /> */}
      <Portfolio />
      <ShopSection />
      <Footer />

      {/* ✅ ปุ่ม Contact us แบบกางเมนู */}
      <FloatingContacts />
    </div>
  );
}
