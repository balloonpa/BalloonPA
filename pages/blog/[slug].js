import ContentPageLayout from '@/components/ContentPageLayout';
import Container from '@/components/Container';
import { getAllPostsMeta, getPostBySlug } from '@/utils/posts.server';

export async function getStaticPaths() {
  const posts = await getAllPostsMeta();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, html } = await getPostBySlug(params.slug);
  return { props: { meta, html } };
}

export default function BlogPostPage({ meta, html }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.description,
    image: `https://balloonpabkk.com${meta.ogImage}`,
    datePublished: meta.date,
    author: { '@type': 'Organization', name: 'BalloonPA' },
    publisher: { '@type': 'Organization', name: 'BalloonPA', url: 'https://balloonpabkk.com' },
    url: `https://balloonpabkk.com/blog/${meta.slug}`,
  };

  const pageMeta = {
    title: `${meta.title} | BalloonPA`,
    description: meta.description,
    ogImage: meta.ogImage,
    path: `/blog/${meta.slug}`,
    jsonLd,
  };

  const hero = {
    badge: 'บทความ',
    h1: meta.title,
    description: meta.description,
    lineText: `สนใจสั่งจัดลูกโป่ง Surprise แฟน ช่วยแนะนำแพ็กเกจด้วยนะครับ 🎈🙏`,
  };

  return (
    <ContentPageLayout meta={pageMeta} hero={hero}>
      <section className="py-16">
        <Container>
          <div
            className="prose prose-lg max-w-3xl mx-auto prose-headings:font-extrabold prose-h2:text-2xl prose-h3:text-lg prose-img:rounded-2xl prose-img:shadow-md prose-img:w-full prose-a:text-pink-400 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </section>
    </ContentPageLayout>
  );
}
