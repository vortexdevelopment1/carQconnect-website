const fs = require('fs');
let sosContent = fs.readFileSync('components/sections/sos-section.tsx', 'utf8');
sosContent = sosContent.replace(
  'title="When every second matters."',
  'title={<>When every <span className="text-orange">second matters.</span></>}'
);
fs.writeFileSync('components/sections/sos-section.tsx', sosContent, 'utf8');
