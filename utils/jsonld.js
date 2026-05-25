const BASE_URL = 'https://balloonpabkk.com';

function extractPrice(priceStr) {
  if (!priceStr) return null;
  const match = priceStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

export function buildProductListLd(products, { name, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: `${BASE_URL}${url}`,
    itemListElement: products.map((p, i) => {
      const price = extractPrice(p.price);
      const item = {
        '@type': 'Product',
        '@id': `${BASE_URL}${url}#product-${i + 1}`,
        name: p.name,
        image: p.image ? `${BASE_URL}${p.image}` : undefined,
        brand: { '@type': 'Brand', name: 'BalloonPA' },
      };
      if (price !== null) {
        item.offers = {
          '@type': 'Offer',
          price,
          priceCurrency: 'THB',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'LocalBusiness', name: 'BalloonPA', url: BASE_URL },
        };
      }
      return { '@type': 'ListItem', position: i + 1, item };
    }),
  };
}
