import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const airoAssets = [
  // Services
  { url: 'https://tsil-calgary.com/airo-assets/images/services/lawn-irrigation', dest: 'public/images/services/lawn-irrigation.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/landscaping', dest: 'public/images/services/landscaping.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/lightscape', dest: 'public/images/services/lightscape.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/snow-removal', dest: 'public/images/services/snow-removal.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/other-services', dest: 'public/images/services/other-services.webp' },

  // Page Heroes & Features
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/landscaping/hero', dest: 'public/images/heroes/landscaping-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/landscaping/tri-star-landscaping-project', dest: 'public/images/landscaping/wooden-fence.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/landscaping/fence-door', dest: 'public/images/landscaping/fence-door.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/irrigation/hero', dest: 'public/images/heroes/irrigation-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/hero', dest: 'public/images/heroes/commercial-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/grading', dest: 'public/images/commercial/grading.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/irrigation', dest: 'public/images/commercial/irrigation.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/planting', dest: 'public/images/commercial/planting.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/lightscape/hero', dest: 'public/images/heroes/lightscape-hero.webp' },

  // Products
  { url: 'https://tsil-calgary.com/airo-assets/images/products/accent-lights-lt2105', dest: 'public/images/products/accent-lights-lt2105.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/bollard-light', dest: 'public/images/products/bollard-light.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/directional-path-light', dest: 'public/images/products/directional-path-light.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/right-angle-path-light', dest: 'public/images/products/lt2405-two-tier.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/lt2405-two-tier-path-light', dest: 'public/images/products/lt2406-hollowed.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/lt2406-hollowed-path-light', dest: 'public/images/products/well-light.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/well-light', dest: 'public/images/products/deck-lights.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/deck-lights', dest: 'public/images/products/transformers.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/transformer-lt3150', dest: 'public/images/products/wifi-socket.webp' },
];

function download(url, dest) {
  return new Promise((resolve) => {
    const fullDest = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    const file = fs.createWriteStream(fullDest);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Saved: ${dest}`);
            resolve(true);
          });
        });
      } else {
        file.close();
        fs.unlink(fullDest, () => {});
        console.warn(`Failed (${response.statusCode}): ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(fullDest, () => {});
      console.error(`Error ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading all airo assets...');
  for (const item of airoAssets) {
    await download(item.url, item.dest);
  }
  console.log('All airo assets processed.');
}

run();
