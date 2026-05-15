const fs = require('fs');
const path = require('path');

// Extract original Wikipedia image URL by stripping thumbnail suffixes
function getOriginalUrl(url) {
  if (url.includes('upload.wikimedia.org/wikipedia/commons/thumb/')) {
    const parts = url.split('/');
    parts.pop(); // remove /800px-...
    return parts.join('/').replace('/thumb/', '/');
  }
  return url;
}

const imagesToDownload = [
  // 1. MacBook
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MacBook_Pro_13-inch_M1.jpg/800px-MacBook_Pro_13-inch_M1.jpg', name: 'macbook_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MacBook_Pro_16_%28M1_Pro%2C_2021%29_-_Wikipedia.jpg/960px-MacBook_Pro_16_%28M1_Pro%2C_2021%29_-_Wikipedia.jpg', name: 'macbook_3.jpg' },
  // 5. Office
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Business_Design_Centre_exterior.jpg/800px-Business_Design_Centre_exterior.jpg', name: 'office_3.jpg' },
  // 6. Rolex
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Rolex_Submariner.jpg/800px-Rolex_Submariner.jpg', name: 'rolex_1.jpg' },
  // 7. Prom
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wilhelm_Gause_Hofball_in_Wien.jpg/960px-Wilhelm_Gause_Hofball_in_Wien.jpg', name: 'prom_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/1975_Holton-Armes_Senior_Prom.png', name: 'prom_3.jpg' },
  // 9. Football
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Football_Spiel_Berlin_Kobra_Ladies_gegen_Berlin_Knights_Ladies_in_Berlin%2C_2019-06-01_0067.jpg/960px-Football_Spiel_Berlin_Kobra_Ladies_gegen_Berlin_Knights_Ladies_in_Berlin%2C_2019-06-01_0067.jpg', name: 'football_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Titans_Texans.jpg/960px-Titans_Texans.jpg', name: 'football_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg/960px-Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg', name: 'football_3.jpg' }
];

const destDir = path.join(__dirname, '../frontend/src/assets/images');

const delay = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  for (const img of imagesToDownload) {
    const originalUrl = getOriginalUrl(img.url);
    let success = false;
    let retries = 3;
    
    while (!success && retries > 0) {
      try {
        const res = await fetch(originalUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
          redirect: 'follow'
        });
        
        if (!res.ok) {
          console.error(`Failed ${img.name}: ${res.status} ${res.statusText}`);
          if (res.status === 429) {
            console.log('Waiting 3 seconds before retry...');
            await delay(3000);
            retries--;
            continue;
          }
          break;
        }
        
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(destDir, img.name), Buffer.from(buffer));
        console.log(`Downloaded ${img.name} (${buffer.byteLength} bytes)`);
        success = true;
      } catch (e) {
        console.error(`Error downloading ${img.name}:`, e.message);
        break;
      }
    }
    await delay(1000); // 1 sec delay between normal requests
  }
})();
