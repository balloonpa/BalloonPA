import fs from 'fs/promises';
import path from 'path';

async function readDir(relPath) {
  return fs.readdir(path.join(process.cwd(), relPath));
}

function parseFilename(name) {
  const base = name.endsWith('.webp') ? name.slice(0, -5) : name;
  const parts = base.split('.');
  const isNumbered = parts.length >= 2 && /^\d+$/.test(parts[0]);
  const detail = isNumbered ? parts[1] : parts[0];
  const [rawName, rawPrice] = detail.split('=');
  return {
    name:  rawName?.replaceAll('_', ' ')  ?? name,
    price: rawPrice?.replaceAll('_', ' ') ?? '',
  };
}

/** All products across every category. */
export async function getAllProducts() {
  const base = 'public/img/products';
  const cats = await readDir(base);
  let id = 1;
  const categories = [];
  const subCatagories = {};
  const products = [];

  for (const category of cats) {
    categories.push(category);
    subCatagories[category] = [];
    const subCats = await readDir(`${base}/${category}`);

    for (const sub of subCats) {
      subCatagories[category].push(sub);
      const items = await readDir(`${base}/${category}/${sub}`);

      for (const item of items) {
        const itemFullPath = path.join(process.cwd(), `${base}/${category}/${sub}/${item}`);
        const stat = await fs.stat(itemFullPath);
        if (!stat.isDirectory()) continue;

        const { name, price } = parseFilename(item);

        const imageFiles = (await readDir(`${base}/${category}/${sub}/${item}`))
          .filter(f => f.endsWith('.webp'))
          .sort();

        const images = imageFiles.map(f => `/img/products/${category}/${sub}/${item}/${f}`);
        const image = images[0] ?? '';

        let contents = null, remarks = null, unlistedCount = 0, promotion = null;
        try {
          const raw = await fs.readFile(
            path.join(process.cwd(), `${base}/${category}/${sub}/${item}/meta.json`),
            'utf8'
          );
          const meta = JSON.parse(raw);
          contents = meta.contents ?? null;
          remarks = meta.remarks ?? null;
          unlistedCount = meta.unlistedCount ?? 0;
          promotion = meta.promotion ?? null;
        } catch { /* meta.json is optional */ }

        products.push({ id, name, price, image, images, category, sub, contents, remarks, unlistedCount, promotion });
        id++;
      }
      id++;
    }
    id++;
  }

  return { categories, subCatagories, products };
}

/** Products from a single occasion subcategory (used by landing pages). */
export async function getProductsBySubDir(occasionSubDir) {
  const base = `public/img/products/2.Occasion/${occasionSubDir}`;
  const items = await readDir(base);
  const products = [];
  let i = 1;

  for (const item of items) {
    const itemFullPath = path.join(process.cwd(), `${base}/${item}`);
    const stat = await fs.stat(itemFullPath);
    if (!stat.isDirectory()) continue;

    const { name, price } = parseFilename(item);

    const imageFiles = (await readDir(`${base}/${item}`))
      .filter(f => f.endsWith('.webp'))
      .sort();

    const images = imageFiles.map(f => `/img/products/2.Occasion/${occasionSubDir}/${item}/${f}`);
    const image = images[0] ?? '';

    let contents = null, remarks = null, unlistedCount = 0, promotion = null;
    try {
      const raw = await fs.readFile(
        path.join(process.cwd(), `${base}/${item}/meta.json`),
        'utf8'
      );
      const meta = JSON.parse(raw);
      contents = meta.contents ?? null;
      remarks = meta.remarks ?? null;
      unlistedCount = meta.unlistedCount ?? 0;
      promotion = meta.promotion ?? null;
    } catch { /* optional */ }

    products.push({ id: i, name, price, image, images, contents, remarks, unlistedCount, promotion });
    i++;
  }

  return products;
}
