import BasePageLayout from '@/components/BasePageLayout';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import ProductDetailModal from '@/components/ProductDetailModal';
import { buildProductListLd } from '@/utils/jsonld';
import Script from 'next/script';
import { useState } from 'react';

/**
 * Layout for pages with a product grid (birthday, graduation, wedding, etc.).
 * Extends BasePageLayout — products slot is injected between Hero and Why Us.
 *
 * Props:
 *   meta:     { title, description, ogImage, path, jsonLd? }
 *   hero:     { badge, h1, description, lineText, productsTitle }
 *   keyword:  string — appended to product image alt texts
 *   products: product[]
 */
export default function ProductPageLayout({ meta, hero, keyword, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <BasePageLayout meta={meta} hero={hero}>
      {products.length > 0 && (
        <>
          <Script
            id={`ld-products-${meta.path.replace(/\//g, '-')}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildProductListLd(products, { name: `แพ็กเกจ${hero.badge}`, url: meta.path })
              ).replace(/</g, '\\u003c'),
            }}
          />
          <section className="py-16">
            <Container>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-black">{hero.productsTitle}</h2>
                <p className="mt-2 text-gray-500">เลือกแพ็กเกจที่ถูกใจ สั่งงานผ่าน LINE ได้เลย</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} onOpenModal={setSelectedProduct} keyword={keyword} />
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </BasePageLayout>
  );
}
