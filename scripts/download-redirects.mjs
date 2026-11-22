import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';

const airoAssets = [
  // Page Heroes & Features that redirected
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/irrigation/hero', dest: 'public/images/heroes/irrigation-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/hero', dest: 'public/images/heroes/commercial-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/grading', dest: 'public/images/commercial/grading.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/irrigation', dest: 'public/images/commercial/irrigation.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/commercial-landscaping/planting', dest: 'public/images/commercial/planting.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/lightscape/hero', dest: 'public/images/heroes/lightscape-hero.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/products/transformer-lt3150', dest: 'public/images/products/wifi-socket.webp' },
];

function downloadWithRedirect(url, dest, maxRedirects = 5) {
  return new Promise((resolve) => {
    if (maxRedirects <= 0) {
      console.warn('Too many redirects for', url);
      return resolve(false);
    }
    const fullDest = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        let redirectUrl = response.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return resolve(downloadWithRedirect(redirectUrl, dest, maxRedirects - 1));
      }
      
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(fullDest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Saved (after redirect): ${dest}`);
            resolve(true);
          });
        });
      } else {
        console.warn(`Failed (${response.statusCode}): ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading redirected airo assets...');
  for (const item of airoAssets) {
    await downloadWithRedirect(item.url, item.dest);
  }
  console.log('All redirected assets processed.');
}

run();
