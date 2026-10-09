const fs = require('fs');
let content = fs.readFileSync('components/sections/sos-section.tsx', 'utf8');

content = content.replace(/description="A deliberate press-and-hold starts the SOS flow[^"]+"/g, 'description="A deliberate press-and-hold starts the SOS flow, capturing your location, notifying the emergency contacts you\'ve configured, and putting emergency calling and nearby help within reach."');

fs.writeFileSync('components/sections/sos-section.tsx', content, 'utf8');
