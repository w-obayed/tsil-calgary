import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const imagesToDownload = [
  { url: 'https://tsil-calgary.com/assets/images/db3c620d7d90f5fbcc3c1bdd7c92dae4.png', dest: 'public/images/logo/logo.png' },
  { url: 'https://tsil-calgary.com/assets/images/60bd6f516dbdf4ba28b411b1e46eb157.jpg', dest: 'public/images/hero/hero-irrigation.jpg' },
  { url: 'https://tsil-calgary.com/assets/images/99482b8e22d00aaf20703d534f30849c.jpg', dest: 'public/images/hero/hero-lightscape.jpg' },
  { url: 'https://tsil-calgary.com/assets/images/79af8a6013af04f94c70e9bd2f5f6c7f.jpeg', dest: 'public/images/features/sprinkler-installation.jpeg' },
  { url: 'https://tsil-calgary.com/assets/images/b1f79b393248279dded6bf90e9b3a3c8.jpg', dest: 'public/images/gallery/lighting-amphitheater.jpg' },
  { url: 'https://tsil-calgary.com/assets/images/fc1dcdb9d3fc861633f3f8b7bcdea731.jpg', dest: 'public/images/gallery/garden-uplighting.jpg' },
  { url: 'https://tsil-calgary.com/assets/images/5656801af88952efad7e8891eaf03901.jpeg', dest: 'public/images/gallery/ornamental-tree.jpeg' },
  { url: 'https://tsil-calgary.com/assets/images/1a045744595df4e94e7ef6f8f81bc007.jpg', dest: 'public/images/gallery/residential-accent.jpg' },
  { url: 'https://tsil-calgary.com/assets/images/4b26a52e9e938f92dc7c63f050852c63.jpg', dest: 'public/images/gallery/lit-trees.jpg' },
];

// Add irrigation 1 through 10
for (let i = 1; i <= 10; i++) {
  imagesToDownload.push({
    url: `https://tsil-calgary.com/assets/irrigation/irr-${i}.jpg`,
    dest: `public/images/irrigation/irr-${i}.jpg`
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    const file = fs.createWriteStream(fullDest);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded: ${url} -> ${dest}`);
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
      console.error(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Downloading original website assets...');
  for (const item of imagesToDownload) {
    await download(item.url, item.dest);
  }
  console.log('Finished downloading original assets.');
}

run();
