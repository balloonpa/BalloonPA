/**
 * migrate-products.js
 *
 * Converts flat product images to folder-per-product structure.
 *
 * Before: public/img/products/<cat>/<sub>/ProductName=price.webp
 * After:  public/img/products/<cat>/<sub>/ProductName=price/
 *           1.webp  ← original image
 *           2.webp  ← placeholder (copy of Extra_Gift_-_Flower from For_Who/Friend)
 *
 * Safe to run multiple times — already-migrated folders are skipped.
 * Run with: node scripts/migrate-products.js
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'public', 'img', 'products');
const PLACEHOLDER = path.join(BASE, '3.For_Who', '2.Friend', 'Extra_Gift_-_Flower=23,990.webp');

function main() {
  if (!fs.existsSync(PLACEHOLDER)) {
    console.error('Placeholder not found:', PLACEHOLDER);
    process.exit(1);
  }

  const placeholderBuf = fs.readFileSync(PLACEHOLDER);

  // Collect all flat .webp files (depth: base/cat/sub/file.webp)
  const toMigrate = [];
  for (const cat of fs.readdirSync(BASE)) {
    const catDir = path.join(BASE, cat);
    if (!fs.statSync(catDir).isDirectory()) continue;
    for (const sub of fs.readdirSync(catDir)) {
      const subDir = path.join(catDir, sub);
      if (!fs.statSync(subDir).isDirectory()) continue;
      for (const file of fs.readdirSync(subDir)) {
        const filePath = path.join(subDir, file);
        if (fs.statSync(filePath).isFile() && file.endsWith('.webp')) {
          toMigrate.push({ subDir, file, filePath });
        }
      }
    }
  }

  let migrated = 0;
  let skipped = 0;

  for (const { subDir, file, filePath } of toMigrate) {
    const folderName = file.slice(0, -5); // strip .webp
    const folderPath = path.join(subDir, folderName);

    if (fs.existsSync(folderPath)) {
      console.log(`  skip   ${folderName}`);
      skipped++;
      continue;
    }

    fs.mkdirSync(folderPath);
    fs.renameSync(filePath, path.join(folderPath, '1.webp'));
    fs.writeFileSync(path.join(folderPath, '2.webp'), placeholderBuf);
    console.log(`  ✓      ${folderName}`);
    migrated++;
  }

  console.log(`\nDone. Migrated: ${migrated}  Skipped: ${skipped}`);
}

main();
