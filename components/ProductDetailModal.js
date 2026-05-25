import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { nearestBranch, DEFAULT_BRANCH } from '@/data/branches';
import { trackOutboundClick, trackPhoneClick } from '@/utils/gtag';

const DEFAULT_REMARKS = [
  'ราคานี้ไม่รวมค่าจัดส่ง',
  'ราคาขึ้นอยู่กับจำนวนลูกโป่งฮีเลียม',
];

const THUMB_VISIBLE = 4;

function ChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function ProductDetailModal({ product, onClose }) {
  const [heroIdx, setHeroIdx] = useState(0);
  const [thumbOffset, setThumbOffset] = useState(0);
  const [branch, setBranch] = useState(DEFAULT_BRANCH);
  const [isNearest, setIsNearest] = useState(false);
  const PINK = BRAND.colors.pink;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    setHeroIdx(0);
    setThumbOffset(0);
  }, [product]);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setBranch(nearestBranch(coords.latitude, coords.longitude));
        setIsNearest(true);
      },
      () => {}
    );
  }, []);

  const images = product.images?.length ? product.images : [product.image];
  const remarks = product.remarks?.length ? product.remarks : DEFAULT_REMARKS;
  const priceDisplay = /^\d/.test(product.price) ? `฿${product.price}` : product.price;

  const lineLink = `${BRAND.socials.lineUrl}?text=${encodeURIComponent(
    `🎈 สนใจสั่งซื้อ\nชื่อสินค้า: ${product.name}\nราคา: ${priceDisplay}\nโปรดแจ้งรายละเอียดเพิ่มเติมครับ 🙏`
  )}`;

  function goToImage(idx) {
    const clamped = Math.max(0, Math.min(images.length - 1, idx));
    setHeroIdx(clamped);
    if (clamped < thumbOffset) setThumbOffset(clamped);
    else if (clamped >= thumbOffset + THUMB_VISIBLE) setThumbOffset(clamped - THUMB_VISIBLE + 1);
  }

  const canThumbPrev = thumbOffset > 0;
  const canThumbNext = thumbOffset + THUMB_VISIBLE < images.length;
  const visibleThumbs = images.slice(thumbOffset, thumbOffset + THUMB_VISIBLE);
  const needThumbArrows = images.length > THUMB_VISIBLE;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition text-sm font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ── Left: image gallery ── */}
          <div className="p-6">

            {/* Hero image with prev/next arrows */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-50 group">
              <Image
                src={images[heroIdx]}
                width={0}
                height={0}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {heroIdx > 0 && (
                <button
                  onClick={() => goToImage(heroIdx - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
              )}
              {heroIdx < images.length - 1 && (
                <button
                  onClick={() => goToImage(heroIdx + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-1.5 mt-3">

                {/* Left scroll arrow */}
                {needThumbArrows && (
                  <button
                    onClick={() => setThumbOffset(o => Math.max(0, o - 1))}
                    disabled={!canThumbPrev}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition disabled:opacity-25"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                )}

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-1.5 flex-1">
                  {visibleThumbs.map((img, i) => {
                    const realIdx = thumbOffset + i;
                    return (
                      <button
                        key={realIdx}
                        onClick={() => goToImage(realIdx)}
                        className="h-16 rounded-lg overflow-hidden border-2 transition"
                        style={heroIdx === realIdx
                          ? { borderColor: PINK }
                          : { borderColor: 'transparent', opacity: 0.55 }}
                      >
                        <Image
                          src={img}
                          width={64}
                          height={64}
                          alt={`${product.name} ${realIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Right scroll arrow */}
                {needThumbArrows && (
                  <button
                    onClick={() => setThumbOffset(o => Math.min(images.length - THUMB_VISIBLE, o + 1))}
                    disabled={!canThumbNext}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition disabled:opacity-25"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                )}
              </div>
            )}

            {/* Promotion box */}
            {product.promotion && (
              <div className="mt-3 rounded-xl p-3 text-sm" style={{ background: '#fff8f0', border: '1px solid #fde8c8' }}>
                <p className="font-bold text-orange-500 text-xs mb-1">🎉 โปรโมชั่น</p>
                <p className="text-gray-700 leading-snug">{product.promotion}</p>
              </div>
            )}

            {/* Nearest branch */}
            <div className="mt-3 rounded-xl p-3 flex items-center gap-2.5" style={{ background: '#f5f8ff', border: '1px solid #dde8ff' }}>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: PINK }}>
                <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 leading-none mb-0.5">สาขาใกล้คุณ</p>
                <p className="text-sm font-semibold text-gray-700 truncate">{branch.name}</p>
              </div>
              {isNearest && (
                <span className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{ background: PINK }}>
                  ใกล้คุณ
                </span>
              )}
              <a
                href={`https://maps.google.com/?q=${branch.lat},${branch.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-xs font-medium underline"
                style={{ color: PINK }}
              >
                แผนที่
              </a>
            </div>
          </div>

          {/* ── Right: product detail ── */}
          <div className="p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-100">

            {/* Name + price */}
            <div>
              <h2 className="text-xl font-extrabold text-black leading-snug">{product.name}</h2>
              <p className="text-2xl font-bold mt-1" style={{ color: PINK }}>
                {priceDisplay}
              </p>
            </div>

            {/* Contents */}
            {product.contents?.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-2">
                  เซ็ตนี้ประกอบด้วย{' '}
                  <span className="font-normal text-gray-400">(ขั้นต่ำ)</span>
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {product.contents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: PINK }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {product.unlistedCount > 0 && (
                  <p className="text-xs text-gray-400 mt-2 ml-4">
                    + {product.unlistedCount} รายการเพิ่มเติมที่ไม่ได้ระบุ
                  </p>
                )}
              </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Remarks */}
            <div className="flex flex-col gap-1.5 pt-3 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-500 tracking-wide mb-0.5">หมายเหตุ</h3>
              {remarks.map((r, i) => (
                <p key={i} className="text-xs text-gray-400">• {r}</p>
              ))}
            </div>

            {/* สอบถามเพิ่มเติม + phone */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>สอบถามเพิ่มเติม:</span>
              <a
                href={`tel:${BRAND.phoneE164}`}
                className="font-semibold hover:underline"
                style={{ color: PINK }}
                onClick={() => trackPhoneClick('product_modal')}
              >
                {BRAND.phoneDisplay}
              </a>
            </div>

            {/* LINE CTA */}
            <a
              href={lineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl text-white font-semibold shadow-md transition hover:scale-[1.02]"
              style={{ background: BRAND.colors.line }}
              onMouseEnter={e => { e.currentTarget.style.background = '#06C755'; }}
              onMouseLeave={e => { e.currentTarget.style.background = BRAND.colors.line; }}
              onClick={() => trackOutboundClick(lineLink, 'สั่งซื้อทาง LINE', { source: 'product_modal', product_name: product.name })}
            >
              สั่งซื้อทาง LINE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
