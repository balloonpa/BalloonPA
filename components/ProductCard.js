import Image from 'next/image';
import { BRAND } from '@/data/brand';
import NameUtil from '@/utils/name.util';
import { trackOutboundClick } from '@/utils/gtag';

/**
 * Props:
 *   product     — product object from getAllProducts / getProductsBySubDir
 *   onOpenModal — called with the product when the detail button is clicked
 *   keyword     — optional string appended to image alt (e.g. 'วันเกิด')
 */
export default function ProductCard({ product: p, onOpenModal, keyword = '' }) {
  const categoryLine = p.category
    ? `หมวดหมู่: ${p.category}${p.sub ? ' - ' + p.sub : ''}\n`
    : '';

  const lineLink =
    `${BRAND.socials.lineUrl}?text=` +
    encodeURIComponent(
      `🎈 สนใจสั่งซื้อสินค้า\n` +
      `ชื่อสินค้า: ${p.name}\n` +
      categoryLine +
      `ราคา: ฿${p.price}\n` +
      `โปรดแจ้งรายละเอียดเพิ่มเติมครับ 🙏`
    );

  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white text-black">
      <Image
        src={p.image}
        width={0}
        height={0}
        alt={`${p.name} ลูกโป่ง${keyword} — BalloonPA กรุงเทพฯ`}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-4">
        {p.category && (
          <div className="text-xs text-gray-500 mb-1">
            {NameUtil.displayName(p.category)}
            {p.sub ? ` · ${NameUtil.displayName(p.sub)}` : ''}
          </div>
        )}
        <h3 className="font-semibold">{p.name}</h3>
        <div className="font-bold mb-3">{p.price} ฿</div>

        <div className="flex gap-2 items-stretch">
          {/* Detail button — text on mobile, magnifier icon at sm+ (2-3 col) */}
          <button
            onClick={() => onOpenModal(p)}
            title="ดูรายละเอียด"
            className="flex-shrink-0 flex items-center justify-center border-2 rounded-lg transition hover:scale-[1.02]
              px-3 py-2 text-sm font-medium
              md:w-10 md:px-0"
            style={{ borderColor: BRAND.colors.pink, color: BRAND.colors.pink }}
          >
            <svg
              className="hidden md:block w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="md:hidden">รายละเอียด</span>
          </button>

          {/* LINE CTA */}
          <a
            href={lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center text-center px-3 py-2 rounded-lg text-white text-sm shadow-lg transition hover:scale-[1.02]"
            style={{ background: BRAND.colors.line }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#06C755'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = BRAND.colors.line; }}
            onClick={() => trackOutboundClick(lineLink, 'แชทสั่งซื้อทาง LINE', { source: 'product_card', product_name: p.name })}
          >
            แชทสั่งซื้อทาง LINE
          </a>
        </div>
      </div>
    </div>
  );
}
