import { useState, useEffect } from 'react';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

// ── Branch data ──────────────────────────────────────────────────────────────
const BRANCHES = [
  {
    id: 'ladprao',
    name: 'รัชดา - ลาดพร้าว',
    lat: 13.802026990503531,
    lng: 100.5681996355542,
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.067348298539!2d100.5681996355542!3d13.802026990503531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29da11942dba5%3A0xb7f54daeb431acfe!2sBalloonPA%20Balloon%26Event%2024%20Hours%20%40Ladprao!5e0!3m2!1sen!2sth!4v1779018956440!5m2!1sen!2sth',
  },
  {
    id: 'sena',
    name: 'เสนานิคม - เกษตร',
    lat: 13.848,
    lng: 100.566,
    embedSrc: null,
  },
  {
    id: 'sathorn',
    name: 'สาทร - วงเวียนใหญ่',
    lat: 13.721612199999996,
    lng: 100.3534778433594,
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124030.328533947!2d100.3534778433594!3d13.721612199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299beaf4a7b3b%3A0xc9fd6bf216154c03!2zQmFsbG9vblBBIEJhbGxvb24mRXZlbnQgMjQgSG91ciBAIOC4quC4suC4l-C4oyAtIOC4p-C4h-C5gOC4p-C4teC4ouC4meC5g-C4q-C4jeC5iA!5e0!3m2!1sen!2sth!4v1779019090085!5m2!1sen!2sth',
  },
];

// Haversine distance in km
function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function nearestBranch(userLat, userLng) {
  const locatable = BRANCHES.filter((b) => b.lat !== null);
  return locatable.reduce((best, b) => {
    return distanceKm(userLat, userLng, b.lat, b.lng) <
      distanceKm(userLat, userLng, best.lat, best.lng)
      ? b : best;
  }, locatable[0]);
}

function mapSrc(branch) {
  if (branch.embedSrc) return branch.embedSrc;
  return `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&hl=th&z=16&output=embed`;
}

// ── Social icons ─────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: 'LINE',
    href: BRAND.socials.lineUrl,
    bg: '#06C755',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.037 2 11c0 3.084 1.676 5.81 4.27 7.53-.19.686-.687 2.47-.787 2.854-.123.47.172.465.362.338.149-.1 2.366-1.605 3.32-2.254.6.083 1.215.128 1.835.128 5.523 0 10-4.037 10-9S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: BRAND.socials.instagram,
    bg: 'radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.302 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.327 2.633-1.302 3.608-.975.975-2.242 1.24-3.608 1.302-1.265.058-1.645.069-4.85.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.327-3.608-1.302-.975-.975-1.24-2.242-1.301-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.061-1.366.326-2.633 1.301-3.608C4.51 2.49 5.777 2.225 7.143 2.163 8.408 2.105 8.788 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.667-.072-4.947c-.085-1.856-.601-3.698-1.942-5.038C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: BRAND.socials.messenger,
    bg: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.098 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: BRAND.socials.tiktok,
    bg: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.26 8.26 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]);
  const [nearestId, setNearestId] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const branch = nearestBranch(coords.latitude, coords.longitude);
        setActiveBranch(branch);
        setNearestId(branch.id);
      },
      () => {
        // denied or unavailable — stay on default (Ladprao)
      }
    );
  }, []);

  const hasMap = activeBranch.lat !== null;

  const BranchSelector = (
    <div className="flex flex-wrap gap-2">
      {BRANCHES.map((b) => {
        const isActive = activeBranch.id === b.id;
        return (
          <button
            key={b.id}
            onClick={() => setActiveBranch(b)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200"
            style={
              isActive
                ? { background: PINK, borderColor: PINK, color: '#fff' }
                : { borderColor: PINK, color: PINK, background: '#fff' }
            }
          >
            {b.name}
            {nearestId === b.id && (
              <span className="text-xs bg-white/30 rounded-full px-1.5 py-0.5 leading-none">
                ใกล้คุณ
              </span>
            )}
          </button>
        );
      })}
    </div>
  );

  const ContactInfo = (
    <div className="flex flex-col gap-8">
      {/* Social icons */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">ช่องทางโซเชียล</h3>
        <div className="grid grid-cols-2 gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-white font-semibold text-sm shadow-sm transition hover:scale-[1.03] hover:shadow-md"
              style={{ background: s.bg }}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Contact info */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">ข้อมูลติดต่อ</h3>
        <div className="flex flex-col gap-3">
          <a href={`tel:${BRAND.phoneE164}`} className="flex items-center gap-3 text-gray-700 hover:text-[#FF8FB4] transition-colors">
            <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff0f5' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="font-medium">{BRAND.phoneDisplay}</span>
          </a>

          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-gray-700 hover:text-[#FF8FB4] transition-colors">
            <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff0f5' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span className="font-medium">{BRAND.email}</span>
          </a>

          <div className="flex items-center gap-3 text-gray-700">
            <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff0f5' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={PINK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span className="font-normal">เปิดให้บริการ 24 ชั่วโมง (ทุกวัน)</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative bg-white pt-8 pb-14 px-4">
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="h-[3px] w-36  rounded-full" style={{ background: BRAND.colors.pink }} />
      </div>
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-500">เยี่ยมชมร้านของเราหรือสั่งซื้อผ่านช่องทางออนไลน์</p>
        </div>

        {hasMap ? (
          /* ── Two-column: map + contact ── */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-4">
              {BranchSelector}
              <div className="rounded-2xl overflow-hidden shadow-md flex-1 min-h-[340px]">
                <iframe
                  key={activeBranch.id}
                  src={mapSrc(activeBranch)}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`แผนที่สาขา ${activeBranch.name}`}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              {ContactInfo}
            </div>
          </div>
        ) : (
          /* ── Centered: no map ── */
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex justify-center">{BranchSelector}</div>
            <div className="w-full max-w-lg">
              {ContactInfo}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
