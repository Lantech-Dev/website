import { create } from 'xmlbuilder2';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://lantechgames.org';
const currentDate = new Date().toISOString();

// Define routes directly in the script to avoid module resolution issues
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly'
  },
  {
    path: '/privacy-policy',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/developer-tools',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/license',
    priority: 0.7,
    changefreq: 'monthly'
  }
];

// Ensure public directory exists
const publicDir = join(__dirname, '../public');
try {
  mkdirSync(publicDir, { recursive: true });
} catch (err) {
  if (err.code !== 'EEXIST') throw err;
}

// Create the sitemap XML structure
const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

// Add URLs to the sitemap
routes.forEach(route => {
  sitemap
    .ele('url')
      .ele('loc').txt(`${BASE_URL}${route.path}`).up()
      .ele('lastmod').txt(currentDate).up()
      .ele('changefreq').txt(route.changefreq).up()
      .ele('priority').txt(route.priority.toString()).up();
});

// Generate the XML string
const xml = sitemap.end({ prettyPrint: true });

// Write the sitemap to the public directory
const outputPath = join(publicDir, 'sitemap.xml');
writeFileSync(outputPath, xml);

console.log('Sitemap generated successfully at public/sitemap.xml');
