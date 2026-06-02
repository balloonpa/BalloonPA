import Link from 'next/link';
import Image from 'next/image';
import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { getAllPostsMeta } from '@/utils/posts.server';
import { BRAND } from '@/data/brand';

const PINK = BRAND.colors.pink;

const META = {
  title: 'บทความลูกโป่ง | เคล็ดลับตกแต่งงาน | BalloonPA',
  description: 'รวมบทความและเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาส วันเกิด งานแต่งงาน งาน Event จาก BalloonPA ร้านลูกโป่งกรุงเทพฯ',
  ogImage: '/hero-balloon.webp',
  path: '/blog',
};

const HERO = {
  badge: 'บทความ',
  h1: 'บทความและเคล็ดลับ',
  description: 'รวมบทความ ไอเดีย และเคล็ดลับการจัดตกแต่งลูกโป่งสำหรับทุกโอกาสพิเศษ จากทีมงาน BalloonPA ที่มีประสบการณ์ตรง',
  lineText: 'สวัสดีครับ สนใจสั่งจัดลูกโป่ง ขอข้อมูลเพิ่มเติมด้วยนะครับ 🎈🙏',
};

export async function getStaticProps() {
  const posts = await getAllPostsMeta();
  return { props: { posts } };
}

export default function BlogIndexPage({ posts }) {
  return (
    <ContentPageLayout meta={META} hero={HERO}>
      <section className="py-16">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center max-w-lg mx-auto py-12">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="text-2xl font-extrabold text-black mb-3">บทความกำลังจะมาเร็วๆ นี้</h2>
              <p className="text-gray-500 leading-relaxed">ทีมงานกำลังเตรียมบทความและเคล็ดลับดีๆ กลับมาติดตามได้เร็วๆ นี้</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-white"
                >
                  {post.ogImage && (
                    <div className="overflow-hidden">
                      <Image
                        src={post.ogImage}
                        alt={post.title}
                        width={0}
                        height={0}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="text-xs text-gray-400">{post.date}</div>
                    <h2 className="font-extrabold text-gray-900 leading-snug text-base group-hover:text-pink-500 transition-colors duration-150" style={{ '--tw-text-opacity': 1 }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
                    )}
                    <span className="text-sm font-semibold" style={{ color: PINK }}>อ่านต่อ →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </ContentPageLayout>
  );
}
