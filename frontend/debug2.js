const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));
  await page.goto('http://localhost:3000/features');
  await new Promise(r => setTimeout(r, 2000));
  const html = await page.content();
  console.log("HTML_SNIPPET:", html.substring(0, 1000));
  await browser.close();
})();
