const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800 });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle0' });
  const res = await page.evaluate(() => {
    const rootGutter = window.getComputedStyle(document.documentElement).getPropertyValue('--page-gutter');
    const header = document.querySelector('header');
    const headerDiv = header.querySelector('div');
    return {
      rootGutter,
      headerDivPaddingLeft: window.getComputedStyle(headerDiv).paddingLeft,
      headerDivPaddingRight: window.getComputedStyle(headerDiv).paddingRight,
      headerDivInlineStyle: headerDiv.getAttribute('style'),
      headerDivRect: headerDiv.getBoundingClientRect(),
    };
  });
  console.log("GUTTER CHECK:", res);
  await browser.close();
})();
