import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/data/brand';
import { NAV_CATEGORIES } from '@/data/categories';

const PINK = '#FF8FB4';

// All paths that make "สินค้าและบริการ" active
const PRODUCT_SERVICE_PATHS = [
  '/shop', '/birthday', '/graduation', '/wedding', '/event', '/baby-shower',
  '/organizer', '/drone', '/subscription', '/studio',
];

const NAV_LINKS = [
  { label: 'หน้าแรก',         href: '/' },
  { label: 'เกี่ยวกับเรา',    href: '/#about' },
  { label: 'สินค้าและบริการ', href: '/shop', megaMenu: true },
  { label: 'ผลงานของเรา',     href: '/portfolio' },
  { label: 'บทความ',           href: '/blog' },
  { label: 'คำถามที่พบบ่อย',  href: '/faq' },
];

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

const subLinkClass = 'text-sm text-gray-600 hover:text-[#FF8FB4] transition-colors duration-150';
const catHeadingClass = 'text-xs font-bold uppercase tracking-wider text-gray-400 mb-2';

/** 3-column mega menu */
function MegaMenu() {
  const [Recommendation, Occasion, ForWho, Supplies] = NAV_CATEGORIES;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex gap-6 w-[700px]">

        {/* Col 1 — Recommendation */}
        <div className="w-40 flex-shrink-0">
          <p className={catHeadingClass}>Recommendation</p>
          <ul className="flex flex-col gap-2">
            {Recommendation.items.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={subLinkClass}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-gray-100 self-stretch" />

        {/* Col 2 — Browse shop */}
        <div className="flex-1 flex flex-col">
          <p className={catHeadingClass}>Balloon Set</p>
          <div className="flex flex-col gap-5">
          {[Occasion, ForWho, Supplies].map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold text-gray-700 mb-1.5">{cat.label}</p>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {cat.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={subLinkClass}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-gray-100 self-stretch" />

        {/* Col 3 — Services */}
        <div className="w-44 flex-shrink-0 flex flex-col gap-4">
          {/* Event Organization */}
          <div>
            <p className={catHeadingClass}>Event Organization</p>
            <Link href="/organizer" className="block text-sm font-semibold text-gray-900 hover:text-[#FF8FB4] transition-colors mb-1">
              Event Organizer
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              ตกแต่งสถานที่ ซุ้มลูกโป่ง Backdrop บริการนอกสถานที่ทั่วกรุงเทพฯ
            </p>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Other Services */}
          <div>
            <p className={catHeadingClass}>Other Services</p>
            <Link href="/drone" className="block text-sm font-semibold text-gray-900 hover:text-[#FF8FB4] transition-colors mb-1">
              Drone Service
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              ถ่ายภาพและวิดีโองานมุมสูงด้วยโดรน
            </p>
            <Link href="/subscription" className="block text-sm font-semibold text-gray-900 hover:text-[#FF8FB4] transition-colors mb-1">
              Monthly Subscription
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              บริการลูกโป่งรายเดือนสำหรับร้านค้า คลินิก Showroom
            </p>
            <Link href="/studio" className="block text-sm font-semibold text-gray-900 hover:text-[#FF8FB4] transition-colors mb-1">
              Studio ถ่ายภาพ
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              ถ่ายภาพสินค้า Boxshot พร้อมใช้งาน
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaExpanded, setMegaExpanded] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const router = useRouter();

  const isActive = (link) => {
    if (link.megaMenu) return PRODUCT_SERVICE_PATHS.includes(router.pathname);
    if (link.href.includes('#')) return false;
    return router.pathname === link.href;
  };

  // Mobile mega menu sections — mirrors PC 3-column layout
  const mobileSections = [
    {
      label: 'Recommendation',
      items: NAV_CATEGORIES[0].items,
    },
    {
      label: 'Balloon Set',
      groups: [
        { label: 'Occasion',  items: NAV_CATEGORIES[1].items },
        { label: 'For Who',   items: NAV_CATEGORIES[2].items },
        { label: 'Supplies',  items: NAV_CATEGORIES[3].items },
      ],
    },
    {
      label: 'Services',
      items: [
        { label: 'Event Organizer',      href: '/organizer' },
        { label: 'Drone Service',        href: '/drone' },
        { label: 'Monthly Subscription', href: '/subscription' },
        { label: 'Studio ถ่ายภาพ',      href: '/studio' },
      ],
    },
  ];

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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.megaMenu ? (
              <div key={link.label} className="relative group flex items-center">
                <Link href={link.href} className={linkClass(isActive(link))}>
                  {link.label}
                  <ChevronDown />
                </Link>
                <div className="hidden group-hover:block">
                  <MegaMenu />
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
            style={{ background: PINK }}
          >
            สั่งงาน
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => { setMobileOpen(v => !v); setMegaExpanded(false); setExpandedSection(null); }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 pb-6 shadow-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-gray-100">
            {NAV_LINKS.map((link) =>
              link.megaMenu ? (
                <li key={link.label}>
                  <button
                    className={`w-full flex items-center justify-between py-3.5 text-sm font-medium ${isActive(link) ? 'text-[#FF8FB4]' : 'text-gray-700'}`}
                    onClick={() => { setMegaExpanded(v => !v); setExpandedSection(null); }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown />
                  </button>
                  {megaExpanded && (
                    <div className="pb-4 flex flex-col gap-1">
                      {mobileSections.map((section) => (
                        <div key={section.label}>
                          <button
                            className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-gray-400"
                            onClick={() => setExpandedSection(v => v === section.label ? null : section.label)}
                          >
                            <span>{section.label}</span>
                            <ChevronDown />
                          </button>
                          {expandedSection === section.label && (
                            section.groups ? (
                              <div className="pl-3 flex flex-col gap-4 mt-1.5 mb-2">
                                {section.groups.map((group) => (
                                  <div key={group.label}>
                                    <p className="text-xs font-semibold text-gray-500 mb-1.5">{group.label}</p>
                                    <ul className="flex flex-col gap-1.5">
                                      {group.items.map((item) => (
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
                            ) : (
                              <ul className="pl-3 flex flex-col gap-2 mt-1.5 mb-2">
                                {section.items.map((item) => (
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
                            )
                          )}
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
            style={{ background: PINK }}
          >
            สั่งงาน
          </a>
        </div>
      )}
    </header>
  );
}
