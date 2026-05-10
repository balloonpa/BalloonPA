import Container from '@/components/Container';
import { BRAND } from '@/data/brand';
import Link from 'next/link';

const OCCASIONS = [
  { href: '/birthday',    emoji: '🎂', label: 'วันเกิด',         en: 'Birthday' },
  { href: '/graduation',  emoji: '🎓', label: 'รับปริญญา',       en: 'Graduation' },
  { href: '/wedding',     emoji: '💍', label: 'งานแต่งงาน',      en: 'Wedding' },
  { href: '/event',       emoji: '🎊', label: 'งาน Event',       en: 'Event & Grand Opening' },
  { href: '/baby-shower', emoji: '🍼', label: 'Baby Shower',     en: 'Welcome Baby' },
];

export default function OccasionsNav() {
  return (
    <section className="py-12 border-b hidden">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-black">เลือกตามโอกาส</h2>
          <p className="mt-1 text-gray-500 text-sm">แตะเพื่อดูสินค้าและแพ็กเกจเฉพาะงาน</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {OCCASIONS.map(({ href, emoji, label, en }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white border-2 shadow-sm transition hover:scale-105 hover:shadow-md"
              style={{ borderColor: BRAND.colors.pink }}
            >
              <span className="text-3xl">{emoji}</span>
              <span className="font-bold text-sm text-black">{label}</span>
              <span className="text-xs text-gray-400">{en}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
