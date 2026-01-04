// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path';

export default function handler(req, res) {
  const pathStr = 'public/img/products';
  const cats = readDir(pathStr);
  let id = 1;
  const categories = [];
  const subCatagories = {};
  const products = [];
  for (let i = 0; i < cats.length; i++) {
    const category = cats[i];
    categories.push(category);
    subCatagories[category] = [];
    const subCats = readDir(pathStr + "/" + category);
    for (let j = 0; j < subCats.length; j++) {
      const sub = subCats[j];
      subCatagories[category].push(sub);
      const prods = readDir(pathStr + "/" + category + "/" + sub);
      for (let k = 0; k < prods.length; k++) {
        const prod = prods[k];
        const prodDetail = prod.split(".")[0];
        const product = { id: id, name: prodDetail.split("=")[0].replaceAll("_", " "), price: prodDetail.split("=")[1].replaceAll("_", " "), image: "img/products/" + category + "/" + sub + "/" + prod, category, sub }
        products.push(product);
        id += 1
      }
      id += 1
    }
    id += 1
  }

  res.status(200).json({ categories, subCatagories, products });
}

function readDir(pathStr) {
  const dirPath = path.join(process.cwd(), pathStr);
  return fs.readdirSync(dirPath);
}


