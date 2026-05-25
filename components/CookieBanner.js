import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BRAND } from '@/data/brand';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('cookie_consent');
    if (!choice) {
      setShow(true);
    } else if (choice === 'accepted') {
      grantConsent();
    }
  }, []);

  function grantConsent() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      });
    }
  }

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    grantConsent();
    setShow(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 pointer-events-none">
      <div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex flex-wrap items-center gap-3 pointer-events-auto"
        style={{ borderTop: `3px solid ${BRAND.colors.pink}` }}
      >
        <p className="flex-1 text-sm text-gray-600 leading-relaxed min-w-[200px]">
          เว็บไซต์นี้ใช้ Cookie เพื่อวิเคราะห์การใช้งานและปรับปรุงบริการ{' '}
          <Link href="/privacy" className="underline font-medium" style={{ color: BRAND.colors.pink }}>
            นโยบายความเป็นส่วนตัว
          </Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-500 hover:bg-gray-50 transition"
          >
            ปฏิเสธ
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: BRAND.colors.pink }}
          >
            ยอมรับทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
}
