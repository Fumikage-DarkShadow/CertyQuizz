const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const URL = 'https://certyquiz.vercel.app';
const OUT = path.join(__dirname, '..', 'docs', 'screenshots');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(URL + '/cert/security-plus/train', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  // Click on "Standard" card by approximate y position (2nd card)
  await page.mouse.click(207, 480);
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(OUT, '04-question.png'), fullPage: false });
  console.log('  ✓ 04-question.png');

  // Click on first answer to reveal rationale
  // Try clicking option A
  try {
    const firstOpt = page.locator('button').filter({ hasText: /^[A-D]\./ }).first();
    if (await firstOpt.count()) {
      await firstOpt.click({ force: true });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: path.join(OUT, '04b-rationale.png'), fullPage: true });
      console.log('  ✓ 04b-rationale.png');
    }
  } catch (e) {
    console.log('  Could not click option:', e.message);
  }

  await browser.close();
})();
