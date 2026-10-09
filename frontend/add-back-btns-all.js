const fs = require('fs');

// Add to GPS
let gpsContent = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
gpsContent = gpsContent.replace(
  '<div className="container-page relative z-10 max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">',
  '<div className="container-page relative z-10 max-w-[1180px] mx-auto">\n          <div className="mb-2 max-md:mt-4 md:mt-2"><BackButton fallback="/features" label="Back to features" /></div>\n          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">'
);
// Make sure to close the div
gpsContent = gpsContent.replace(
  '</section>',
  '</div>\n      </section>'
);
fs.writeFileSync('app/(site)/gps/page.tsx', gpsContent, 'utf8');

// Add to SOS
let safetyContent = fs.readFileSync('app/(site)/safety/page.tsx', 'utf8');
if (!safetyContent.includes('import { BackButton }')) {
  safetyContent = safetyContent.replace('import { Users, ShieldCheck, MapPin, PhoneCall } from "lucide-react";', 'import { Users, ShieldCheck, MapPin, PhoneCall } from "lucide-react";\nimport { BackButton } from "@/components/ui/back-button";');
}
safetyContent = safetyContent.replace(
  '<PageHeader',
  '<PageHeader\n        backButton={<BackButton fallback="/features" label="Back to features" />}'
);
fs.writeFileSync('app/(site)/safety/page.tsx', safetyContent, 'utf8');
