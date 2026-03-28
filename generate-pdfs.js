const { chromium } = require('playwright');
const path = require('path');

const files = [
  { html: 'flyer/falt/eltern-flyer-falt.html',  pdf: 'flyer/falt/eltern-flyer-falt.pdf',   w: '297mm', h: '210mm' },
  { html: 'flyer/falt/jugend-flyer-falt.html',   pdf: 'flyer/falt/jugend-flyer-falt.pdf',    w: '297mm', h: '210mm' },
  { html: 'flyer/aushang/eltern-aushang-1.html', pdf: 'flyer/aushang/eltern-aushang-1.pdf',  w: '148mm', h: '210mm' },
  { html: 'flyer/aushang/eltern-aushang-2.html', pdf: 'flyer/aushang/eltern-aushang-2.pdf',  w: '148mm', h: '210mm' },
  { html: 'flyer/aushang/jugend-aushang-1.html', pdf: 'flyer/aushang/jugend-aushang-1.pdf',  w: '148mm', h: '210mm' },
  { html: 'flyer/aushang/jugend-aushang-2.html', pdf: 'flyer/aushang/jugend-aushang-2.pdf',  w: '148mm', h: '210mm' },
];

(async () => {
  const browser = await chromium.launch();
  for (const f of files) {
    const page = await browser.newPage();
    const url = 'file://' + path.resolve(__dirname, f.html);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.pdf({
      path: path.resolve(__dirname, f.pdf),
      width: f.w,
      height: f.h,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log('✓', f.pdf);
    await page.close();
  }
  await browser.close();
})();
