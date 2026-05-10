import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const pathStr = 'public/img/products';
  const cats = await readDir(pathStr);
  let id = 1;
  const categories = [];
  const subCatagories = {};
  const products = [];

  for (let i = 0; i < cats.length; i++) {
    const category = cats[i];
    categories.push(category);
    subCatagories[category] = [];
    const subCats = await readDir(pathStr + "/" + category);

    for (let j = 0; j < subCats.length; j++) {
      const sub = subCats[j];
      subCatagories[category].push(sub);
      const prods = await readDir(pathStr + "/" + category + "/" + sub);

      for (let k = 0; k < prods.length; k++) {
        const prod = prods[k];
        const prodDetailList = prod.split(".");
        let prodDetail;
        if (prodDetailList.length == 2) {
          prodDetail = prod.split(".")[0];
        } else if (prodDetailList.length == 3) {
          prodDetail = prod.split(".")[1];
        }
        const prodPrice = prodDetail.split("=")[1].replaceAll("_", " ");
        let prodName = prodDetail.split("=")[0].replaceAll("_", " ");

        const product = { id, name: prodName, price: prodPrice, image: "img/products/" + category + "/" + sub + "/" + prod, category, sub };
        products.push(product);
        id += 1;
      }
      id += 1;
    }
    id += 1;
  }

  res.status(200).json({ categories, subCatagories, products });
}

async function readDir(pathStr) {
  const dirPath = path.join(process.cwd(), pathStr);
  return fs.readdir(dirPath);
}
