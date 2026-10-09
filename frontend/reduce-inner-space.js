const fs = require('fs');
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');

// Reduce space between Back button and QR SAFETY badge
qr = qr.replace('mb-6', 'mb-3 md:mb-6');

// Reduce space between QR SAFETY badge and Heading
qr = qr.replace('mb-5 max-w-[800px]', 'mb-2 md:mb-5 max-w-[800px]');

// Reduce space between Heading and Paragraph
qr = qr.replace('mb-8', 'mb-4 md:mb-8');

// Reduce bottom padding of section
qr = qr.replace('pb-6 md:pb-8', 'pb-0 md:pb-8');

fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');
