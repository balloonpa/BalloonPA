import BasePageLayout from '@/components/BasePageLayout';

/**
 * Layout for content pages (blog, portfolio, faq, organizer, studio, etc.).
 * Extends BasePageLayout — children are injected between Hero and Why Us.
 *
 * Props:
 *   meta:     { title, description, ogImage, path, jsonLd? }
 *   hero:     { badge, h1, description, lineText }
 *   children  — page-specific content sections
 */
export default function ContentPageLayout({ meta, hero, children }) {
  return (
    <BasePageLayout meta={meta} hero={hero}>
      {children}
    </BasePageLayout>
  );
}
