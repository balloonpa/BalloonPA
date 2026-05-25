import Container from "@/components/Container";
import { BRAND } from "@/data/brand";
import Image from "next/image";
import Link from "next/link";

function Footer({ hideContact = false }) {
  return (
    <footer className="mt-16 bg-white/95 text-black backdrop-blur shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <Container className="py-8">
        <div className={`flex flex-wrap items-center gap-4 ${hideContact ? 'justify-start' : 'justify-between'}`}>

          {/* Logo */}
          <Image
            src={BRAND.logoSrc}
            fetchPriority="high"
            loading="lazy"
            className="w-20 h-20 object-contain"
            width={0}
            height={0}
            alt="BalloonPA Logo"
          />

          {/* Contact */}
          {!hideContact && (
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
          )}

          {/* Copyright + Privacy */}
          <div className="text-sm text-right">
            <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
            <Link href="/privacy" className="text-xs text-gray-400 hover:underline mt-0.5 inline-block">
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
