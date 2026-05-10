import fs from 'fs/promises';
import path from 'path';

async function readDir(relPath) {
  return fs.readdir(path.join(process.cwd(), relPath));
}

function parseFilename(file) {
  const parts = file.split('.');
  const detail = parts.length >= 3 ? parts[1] : parts[0];
  const [rawName, rawPrice] = detail.split('=');
  return {
    name:  rawName?.replaceAll('_', ' ')  ?? file,
    price: rawPrice?.replaceAll('_', ' ') ?? '',
  };
}

/** All products across every category — mirrors /api/products structure exactly. */
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
      const files = await readDir(`${base}/${category}/${sub}`);

      for (const file of files) {
        const { name, price } = parseFilename(file);
        products.push({
          id,
          name,
          price,
          image: `img/products/${category}/${sub}/${file}`,
          category,
          sub,
        });
        id += 1;
      }
      id += 1;
    }
    id += 1;
  }

  return { categories, subCatagories, products };
}

/** Products from a single occasion subcategory (used by landing pages). */
export async function getProductsBySubDir(occasionSubDir) {
  const relPath = `public/img/products/2.Occasion/${occasionSubDir}`;
  const files = await readDir(relPath);

  return files.map((file, i) => {
    const { name, price } = parseFilename(file);
    return {
      id: i + 1,
      name,
      price,
      image: `/img/products/2.Occasion/${occasionSubDir}/${file}`,
    };
  });
}
