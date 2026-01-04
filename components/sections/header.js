import Container from "@/components/Container";
import { BRAND } from "@/data/brand";

/** ========= Sections ========= */
function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="py-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <img src={BRAND.logoSrc} className="w-9 h-9 object-contain" alt="logo" /> */}
          <div >

            <img
              src={"/web_Icon.png"}
              className="w-40 object-cover pointer-events-none"
            />
            {/* <span style={{ color: BRAND.colors.pink }}>Balloon</span>
            <span style={{ color: BRAND.colors.blue }}>PA</span> */}
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

export default Header;