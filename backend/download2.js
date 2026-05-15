const fs = require('fs');
const path = require('path');

const imagesToDownload = [
  // 1. MacBook
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MacBook_Pro_13-inch_M1.jpg/800px-MacBook_Pro_13-inch_M1.jpg', name: 'macbook_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MacBook_Pro_16_%28M1_Pro%2C_2021%29_-_Wikipedia.jpg/960px-MacBook_Pro_16_%28M1_Pro%2C_2021%29_-_Wikipedia.jpg', name: 'macbook_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/MacBook_Pro_14-inch_M1.jpg/800px-MacBook_Pro_14-inch_M1.jpg', name: 'macbook_3.jpg' },
  // 2. Adidas
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Adidas_2022_logo.svg/960px-Adidas_2022_logo.svg.png', name: 'adidas_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Original_Adidas_logo.svg/960px-Original_Adidas_logo.svg.png', name: 'adidas_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Kak%C3%A1_2012.jpg', name: 'adidas_3.jpg' },
  // 3. Antique Turkish helmet (Using Met Museum)
  { url: 'https://images.metmuseum.org/CRDImages/is/web-large/DP240367.jpg', name: 'helmet_1.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/is/web-large/DP170373.jpg', name: 'helmet_2.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/is/web-large/DP170394.jpg', name: 'helmet_3.jpg' },
  // 4. Drawing Tools (Using Met Museum)
  { url: 'https://images.metmuseum.org/CRDImages/ep/web-large/DT10776.jpg', name: 'drawing_1.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-011.jpg', name: 'drawing_2.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP109484.jpg', name: 'drawing_3.jpg' },
  // 5. Hall and office for business
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Los_Angeles_City_Hall_2013.jpg/960px-Los_Angeles_City_Hall_2013.jpg', name: 'office_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Eameslounch.jpg', name: 'office_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Business_Design_Centre_exterior.jpg/800px-Business_Design_Centre_exterior.jpg', name: 'office_3.jpg' },
  // 6. Rolex Watch
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Rolex_Submariner.jpg/800px-Rolex_Submariner.jpg', name: 'rolex_1.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/es/web-large/DP340434.jpg', name: 'rolex_2.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/es/web-large/DP336058.jpg', name: 'rolex_3.jpg' },
  // 7. Prom
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Senior_Prom_Main.jpg/960px-Senior_Prom_Main.jpg', name: 'prom_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wilhelm_Gause_Hofball_in_Wien.jpg/960px-Wilhelm_Gause_Hofball_in_Wien.jpg', name: 'prom_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/1975_Holton-Armes_Senior_Prom.png', name: 'prom_3.jpg' },
  // 8. Wooden Toy
  { url: 'https://images.metmuseum.org/CRDImages/mi/web-large/DP225545.jpg', name: 'toy_1.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/eg/web-large/2-35.9.20a%E2%80%93w_EGDP014589-4594.jpg', name: 'toy_2.jpg' },
  { url: 'https://images.metmuseum.org/CRDImages/dp/web-large/DP865112.jpg', name: 'toy_3.jpg' },
  // 9. American football
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Football_Spiel_Berlin_Kobra_Ladies_gegen_Berlin_Knights_Ladies_in_Berlin%2C_2019-06-01_0067.jpg/960px-Football_Spiel_Berlin_Kobra_Ladies_gegen_Berlin_Knights_Ladies_in_Berlin%2C_2019-06-01_0067.jpg', name: 'football_1.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Titans_Texans.jpg/960px-Titans_Texans.jpg', name: 'football_2.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg/960px-Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg', name: 'football_3.jpg' }
];

const destDir = path.join(__dirname, '../frontend/src/assets/images');

(async () => {
  for (const img of imagesToDownload) {
    try {
      const res = await fetch(img.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
        redirect: 'follow'
      });
      if (!res.ok) {
        console.error(`Failed ${img.name}: ${res.status} ${res.statusText}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(path.join(destDir, img.name), Buffer.from(buffer));
      console.log(`Downloaded ${img.name} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${img.name}:`, e.message);
    }
  }
})();
