const fs = require('fs');

let gps = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
gps = gps.replace('import { BackButton } from "@/components/ui/back-button";\n', '');
gps = gps.replace('<div className="mb-5"><BackButton fallback="/#features" label="Back to Features" /></div>\n            ', '');
fs.writeFileSync('app/(site)/gps/page.tsx', gps, 'utf8');

let mkt = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');
mkt = mkt.replace('import { BackButton } from "@/components/ui/back-button";\n', '');
mkt = mkt.replace('<div className="mb-5"><BackButton fallback="/#features" label="Back to Features" /></div>\n          ', '');
fs.writeFileSync('app/(site)/marketplace/client-page.tsx', mkt, 'utf8');
