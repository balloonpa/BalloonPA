import { BRAND } from "@/data/brand";
import Image from "next/image";
import { useState } from "react";

/** ========= Floating “Contact us” ========= */
function FloatingContacts() {
  const [open, setOpen] = useState(false);
  const [firstPress, setFirstPress] = useState(false);

  // ✅ ใช้ลิงก์ LINE แบบ lin.ee ที่กำหนดไว้ใน BRAND.socials.lineUrl
  // ถ้าไม่ได้ใส่ไว้ จะ fallback ไปวิธีเดิม (แต่แนะนำให้ใส่ lineUrl เสมอ)
  const lineUrl =
    BRAND.socials.lineUrl ||
    `https://line.me/ti/p/~${(BRAND.lineId || "").replace("@", "")}`;

  const phoneUrl = `tel:${BRAND.phoneE164}`;
  const emailUrl = `mailto:${BRAND.email}`;
  const igUrl = BRAND.socials.instagram || "";
  const tiktokUrl = BRAND.socials.tiktok || "";

  const Item = ({ href, bg, title, children, delay = 0 }) => (
    <a
      href={open ? href : null}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        shadow-xl ring-1 ring-black/5
        transform transition duration-300
        hover:scale-110 hover:shadow-2xl
        opacity-0 translate-y-2
        ${open ? "" : "pointer-events-none"}
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
          <Image
            fetchPriority="high"
            src="/line-icon.png"
            alt="LINE"
            width={0}
            height={0}
            className="w-6 h-6"
          />
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
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3.001.001A1.5 1.5 0 0118.5 6.5z" />
            </svg>
          </Item>
        )}

        {/* TikTok (ถ้ามี) */}
        {tiktokUrl && (
          <Item href={tiktokUrl} bg="#000000" title="TikTok" delay={180}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#fff" viewBox="0 0 24 24">
              <path d="M16 6.3c1.1.9 2.5 1.5 4 1.6V12a9.2 9.2 0 01-4-1.1v5.3a5.7 5.7 0 11-5.7-5.7c.2 0 .5 0 .7.1v3a2.7 2.7 0 102 2.6V2h3v4.3z" />
            </svg>
          </Item>
        )}

        {/* Email */}
        <Item href={emailUrl} bg="#ffffff" title="Email" delay={240}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </Item>
      </div>
    </div>
  );
}

export default FloatingContacts;