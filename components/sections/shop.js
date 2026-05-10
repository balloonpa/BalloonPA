import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { BRAND } from "@/data/brand";
import NameUtil from "@/utils/name.util";
import Image from "next/image";
import { useEffect, useState } from "react";

function ShopSection({ products, categories, subCategories }) {

  const [cat, setCat] = useState(categories[0] ?? "");
  const [sub, setSub] = useState("");

  // รีเซ็ตเมนูย่อยเมื่อสลับหมวด
  useEffect(() => { setSub("") }, [cat]);

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
    <section id="shop">
      <Container className="py-12">
        <SectionTitle sub="เลือกหมวดหมู่เพื่อดูเซ็ตยอดนิยม">Shop</SectionTitle>

        {/* หมวดหลัก */}
        <div className="flex gap-3 overflow-auto pb-2 mb-4 justify-center">
          {categories.map((c) => (
            <Chip
              key={c}
              label={NameUtil.displayName(c)}
              active={c === cat}
              onClick={() => setCat(c)}
            />
          ))}
        </div>

        {/* เมนูย่อย */}
        {subCategories[cat] && subCategories[cat].length > 0 && (
          <div className="flex gap-2 overflow-auto pb-2 mb-6 justify-center">
            <Chip
              small
              label="ทั้งหมด"
              active={sub === ""}
              onClick={() => setSub("")}
            />
            {subCategories[cat].map((s) => (
              <Chip
                small
                key={s}
                label={NameUtil.displayName(s)}
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
                <Image
                  src={p.image}
                  width={0}
                  height={0}
                  alt={NameUtil.displayName(p.name)}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {NameUtil.displayName(p.category)}
                    {p.sub ? ` · ${NameUtil.displayName(p.sub)}` : ""}
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
    </section>
  );
}

export default ShopSection;