const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/features', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'features_screenshot.png' });
  await browser.close();
})();
