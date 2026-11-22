import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';

const services = [
  { url: 'https://tsil-calgary.com/airo-assets/images/services/lawn-irrigation', dest: 'public/images/services/lawn-irrigation.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/landscaping', dest: 'public/images/services/landscaping.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/lightscape', dest: 'public/images/services/lightscape.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/snow-removal', dest: 'public/images/services/snow-removal.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/services/other-services', dest: 'public/images/services/other-services.webp' },
  { url: 'https://tsil-calgary.com/airo-assets/images/pages/landscaping/hero', dest: 'public/images/heroes/landscaping-hero.webp' },
];

function downloadWithRedirect(url, dest, maxRedirects = 5) {
  return new Promise((resolve) => {
    if (maxRedirects <= 0) return resolve(false);
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
            console.log(`Saved: ${dest}`);
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
  for (const item of services) {
    await downloadWithRedirect(item.url, item.dest);
  }
}

run();
