import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { NAV_CATEGORIES } from '@/data/categories';

const NAV_LINKS = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'เกี่ยวกับเรา', href: '/#about' },
  { label: 'หมวดหมู่สินค้า', href: '/shop', dropdown: true },
  { label: 'ผลงานของเรา', href: '/portfolio' },
  { label: 'บทความ', href: '/blog' },
  { label: 'คำถามที่พบบ่อย', href: '/faq' },
];

const SHOP_PATHS = ['/shop', '/birthday', '/graduation', '/wedding', '/event', '/baby-shower'];

const LINK_BASE = 'text-sm font-medium transition-colors duration-150';

function linkClass(active) {
  return `${LINK_BASE} ${active ? 'text-[#FF8FB4]' : 'text-gray-700 hover:text-[#FF8FB4]'}`;
}

function ChevronDown() {
  return (
    <svg className="inline w-3.5 h-3.5 ml-1 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/** Desktop mega-menu dropdown */
function CategoryDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 z-50 w-max">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5 grid grid-cols-4 gap-6 min-w-[600px]">
        {NAV_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{cat.label}</p>
            <ul className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-700 hover:text-[#FF8FB4] transition-colors duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const router = useRouter();

  const isActive = (link) => {
    if (link.dropdown) return SHOP_PATHS.includes(router.pathname);
    if (link.href.includes('#')) return false;
    return router.pathname === link.href;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/web_Icon.webp"
            width={0}
            height={0}
            alt="BalloonPA Logo"
            className="w-36 object-contain pointer-events-none"
            fetchPriority="high"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group flex items-center">
                <Link href={link.href} className={linkClass(isActive(link))}>
                  {link.label}
                  <ChevronDown />
                </Link>
                <div className="hidden group-hover:block">
                  <CategoryDropdown />
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={linkClass(isActive(link))}>
                {link.label}
              </Link>
            )
          )}

          <a
            href={BRAND.socials.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-full text-white text-sm font-semibold shadow transition hover:opacity-85"
            style={{ background: BRAND.colors.pink }}
          >
            สั่งงาน
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 pb-6 shadow-md">
          <ul className="flex flex-col divide-y divide-gray-100">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    className={`w-full flex items-center justify-between py-3.5 text-sm font-medium ${isActive(link) ? 'text-[#FF8FB4]' : 'text-gray-700'}`}
                    onClick={() => setMobileCatOpen((v) => !v)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown />
                  </button>
                  {mobileCatOpen && (
                    <div className="pb-3 pl-2 grid grid-cols-2 gap-x-6 gap-y-4">
                      {NAV_CATEGORIES.map((cat) => (
                        <div key={cat.label}>
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{cat.label}</p>
                          <ul className="flex flex-col gap-1.5">
                            {cat.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-[#FF8FB4]"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block py-3.5 text-sm font-medium ${isActive(link) ? 'text-[#FF8FB4]' : 'text-gray-700'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <a
            href={BRAND.socials.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full block text-center py-3 rounded-full text-white font-semibold shadow"
            style={{ background: BRAND.colors.pink }}
          >
            สั่งงาน
          </a>
        </div>
      )}
    </header>
  );
}
