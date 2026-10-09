const fs = require('fs');
let content = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

content = content.replace(
  'import { Phone, MessageSquare, Flag, AlertTriangle, QrCode, Check } from "lucide-react";',
  'import { Phone, MessageSquare, Flag, AlertTriangle, QrCode, Check, ArrowRight } from "lucide-react";'
);

content = content.replace(
  '<span className="text-xl leading-none rotate-90 md:rotate-0">&rarr;</span>',
  '<ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" strokeWidth={2.5} />'
);

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', content, 'utf8');
