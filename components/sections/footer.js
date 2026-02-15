import Container from "@/components/Container";
import { BRAND } from "@/data/brand";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/95 text-black backdrop-blur">
      <Container className="py-8 grid md:grid-cols-3 gap-6 items-center">
        {/* โลโก้ + ชื่อแบรนด์ */}
        <div className="flex items-center gap-3">
          <Image
            src={BRAND.logoSrc}
            fetchPriority="high"
            className="w-10 h-10 object-contain"
            width={0}
            height={0}
            alt="logo"
          />
          <div className="font-bold">
            <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>PA</span>
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
            @balloonpa.th
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

export default Footer;