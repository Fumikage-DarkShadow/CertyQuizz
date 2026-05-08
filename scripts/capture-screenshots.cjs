/**
 * Auto-capture screenshots of CertyQuiz key pages for the README.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const URL = 'https://certyquiz.vercel.app';
const OUT = path.join(__dirname, '..', 'docs', 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const W = 414;
const H = 896;

async function shot(page, name, opts = {}) {
  const file = path.join(OUT, name);
  await page.waitForTimeout(opts.delay || 2000);
  await page.screenshot({ path: file, fullPage: !!opts.fullPage });
  console.log(`  ✓ ${name}`);
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const page = await context.newPage();

  // 1. Home / landing
  console.log('Capturing home...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3500);
  await shot(page, '01-home.png');

  // 2. Certifications list
  console.log('Capturing certifications...');
  await page.goto(URL + '/certifications', { waitUntil: 'networkidle' });
  await shot(page, '02-certifications.png');

  // 3. Cert hub (Security+)
  console.log('Capturing cert hub...');
  await page.goto(URL + '/cert/security-plus', { waitUntil: 'networkidle' });
  await shot(page, '03-cert-hub.png');

  // 4. Training (one question)
  console.log('Capturing training...');
  await page.goto(URL + '/cert/security-plus/train', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await shot(page, '04-training.png');

  // 5. Definitions
  console.log('Capturing definitions...');
  await page.goto(URL + '/definitions', { waitUntil: 'networkidle' });
  await shot(page, '05-definitions.png');

  // 6. Stats
  console.log('Capturing stats...');
  await page.goto(URL + '/stats', { waitUntil: 'networkidle' });
  await shot(page, '06-stats.png');

  // 7. Flashcards
  console.log('Capturing flashcards...');
  await page.goto(URL + '/flashcards', { waitUntil: 'networkidle' });
  await shot(page, '07-flashcards.png');

  // 8. Roadmap
  console.log('Capturing roadmap...');
  await page.goto(URL + '/roadmap', { waitUntil: 'networkidle' });
  await shot(page, '08-roadmap.png');

  await browser.close();
  console.log('Done.');
})();
